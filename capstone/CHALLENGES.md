# Capstone Challenges

A capstone comes after every 15 lessons. It mixes what you learned into one
small real project, so the lessons stick.

Rules:

- One step at a time. Tick the box when done.
- **Look, close, type it yourself.** You may open old lessons, docs, or ask.
  Don't paste whole files.
- When you reopen a lesson, write its number in `NOTES.md`. That list shows
  what to review.
- Each capstone is its own Next.js project inside this folder.
- After the capstone: write `NOTES.md` in the project folder, then commit.

---

## Capstone 1 — Mini Shop (lessons 00–15)

**What you're building:** a small online shop. A product list with search, a
page for each product, a cart with a badge in the header, a cart page, dark
mode, your own 404 and error screens, and a small API that returns the
products as JSON. No database yet: products live in a TS array.

**The story:** every lesson so far built one piece on its own page. A real
site is all the pieces at once, sharing one header and one cart. This is the
first time the parts have to work together.

### How it works (read this first)

**The pages:**

| URL                       | What it shows                                   | Lessons |
| ------------------------- | ----------------------------------------------- | ------- |
| `/`                       | Product list + search box                       | 04, 08  |
| `/?q=kopi`                | Only the products that match "kopi"             | 08      |
| `/products/kopi-susu`     | One product + "Add to cart"                     | 01, 14  |
| `/products/nope`          | Your 404                                        | 09      |
| `/cart`                   | Cart lines, + / − buttons, empty, total         | 12      |
| `/api/products`           | All products as JSON                            | 15      |
| `/api/products/kopi-susu` | One product as JSON, or status 404              | 15      |

**The one new idea: the cart has to move up.**

In lesson 12, the whole cart lived inside one component (`Shop.tsx`): the
products, the buttons, and the cart list were all in the same place. Here they
are not:

```
RootLayout
└─ ThemeProvider
   └─ CartProvider            <- holds the cart (useReducer lives here now)
      ├─ Header
      │  ├─ CartBadge         <- reads the cart: "🛒 3"
      │  └─ ThemeToggle
      └─ main
         ├─ /products/[slug]
         │  └─ AddToCartButton <- sends "add" to the cart
         └─ /cart
            └─ CartView        <- reads the cart, sends "add" / "remove" / "clear"
```

`CartBadge`, `AddToCartButton` and `CartView` are neighbours, the same problem
as lesson 11's header and page. So you combine lessons 11 and 12:

| Lesson 12 (cart in one component)            | Capstone (cart shared)                                       |
| -------------------------------------------- | ------------------------------------------------------------ |
| `useReducer` inside `Shop.tsx`               | `useReducer` inside `CartProvider`                           |
| `cart` and `dispatch` used in the same file  | The provider pins `{ cart, dispatch }` on the context        |
| Buttons call `dispatch` directly             | Any component calls `useCart()`, then `dispatch`             |

`useCart()` is a tiny custom hook (lesson 13) that wraps `useContext(CartContext)`,
so components don't need to import the context themselves.

**Analogy.** Lesson 12 was a cashier inside one shop counter. Now the shop has
three counters (header, product page, cart page), so the cashier moves to the
back office (the provider), and every counter sends notes there.

### Real-world use

- Every e-commerce site (Tokopedia, Shopee, any WooCommerce shop) has this
  shape: product list, product page, cart badge in the header, cart page.
- The "state shared above the neighbours" pattern is also used for the logged-in
  user, notifications, and language. You will use it again in Capstone 2.
- The JSON API is what a Flutter app would call to show the same products.

### Built-in pieces you'll use

All of these are from lessons 00–15. The lesson number tells you where to look.

- `create-next-app`: makes a new Next.js project. New here, see step 0.
- `[slug]` folder + `await params` (01): one page for every product.
- `generateStaticParams` (01): tells Next which slugs exist, so the page can be built ahead.
- `<Link>` (02): links between pages.
- `"use client"` (03): needed for anything with state, effects, or clicks.
- `notFound()` + `not-found.tsx` (09): show your 404 when the slug doesn't exist.
- `error.tsx` (09): friendly screen when something crashes. Gets `error` and `retry`.
- `useRouter` + `router.replace` (08): change `?q=` in the URL from the search box.
- `searchParams` prop + `<Suspense>` (08): the page reads `?q=` and hands it to the list.
- `createContext` / provider / `useContext` (11): share the cart and the theme.
- `localStorage` + `dark` class (11): remember the theme.
- `useReducer` + `dispatch` (12): the cart's add / remove / clear.
- Custom hook (13): `useCart()`.
- `generateMetadata` (14): each product page gets its own title.
- `route.ts` + `Response.json` (15): the API.

### Worked example: a notification bell (reducer inside a provider)

This is the only new combination, so here it is once, in a different scenario.

**Scenario:** a bell in the header shows how many notifications you have. A
button on a page adds one, another clears them. The bell and the page are
neighbours, so the count lives in a provider with `useReducer`.

To try it: put these files in any Next.js project, wrap the root layout's
`<body>` content with `<NotifProvider>`, put `<Bell />` in the header, and
`<NotifButtons />` on a page.

**1. Context + provider + hook (one file)**

```tsx
// src/context/NotifContext.tsx
"use client";

import { createContext, useContext, useReducer } from "react";

type NotifAction = { type: "add" } | { type: "clear" };

function notifReducer(count: number, action: NotifAction): number {
  switch (action.type) {
    case "add":
      return count + 1;
    case "clear":
      return 0;
    default:
      return count;
  }
}

type NotifValue = {
  count: number;
  dispatch: (action: NotifAction) => void;
};

const NotifContext = createContext<NotifValue>({
  count: 0,
  dispatch: () => {},
});

// the back office: holds the state, pins it on the board
export function NotifProvider({ children }: { children: React.ReactNode }) {
  const [count, dispatch] = useReducer(notifReducer, 0);
  return <NotifContext value={{ count, dispatch }}>{children}</NotifContext>;
}

// the custom hook: any component reads the board with one call
export function useNotif() {
  return useContext(NotifContext);
}
```

**2. A reader in the header**

```tsx
// src/components/Bell.tsx
"use client";

import { useNotif } from "@/context/NotifContext";

export default function Bell() {
  const { count } = useNotif();
  return <span>🔔 {count}</span>;
}
```

**3. A sender on a page**

```tsx
// src/components/NotifButtons.tsx
"use client";

import { useNotif } from "@/context/NotifContext";

export default function NotifButtons() {
  const { dispatch } = useNotif();
  return (
    <div className="flex gap-2">
      <button onClick={() => dispatch({ type: "add" })}>New notification</button>
      <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
    </div>
  );
}
```

Click "New notification" on the page, and the bell in the header goes up. The
header and the page never talk to each other: both talk to the provider.

### From the example to your capstone

| Notification bell (example)            | Mini Shop cart (capstone)                                        |
| -------------------------------------- | ---------------------------------------------------------------- |
| `src/context/NotifContext.tsx`         | `src/context/CartContext.tsx`                                    |
| state: one number, starts at `0`       | state: an array of cart items, starts at `[]`                    |
| notes: `add`, `clear`                  | notes: `add` (a product), `remove` (an id), `clear`              |
| reducer: `count + 1`                   | reducer: lesson 12's `cartReducer` (find → map, or add new line) |
| `useNotif()`                           | `useCart()`                                                      |
| `Bell` shows the count                 | `CartBadge` shows the total quantity of all lines                |
| `NotifButtons` sends `add`             | `AddToCartButton` sends `{ type: "add", product }`               |

---

### Challenge

Folder: `Lessons/capstone/01-mini-shop/`.

**Part A — Setup**

- [ ] 0. Create the project in this folder, turn on `cacheComponents` (so it works like `next-lesson`), and start it.
  - Done when: `http://localhost:3000` shows the Next.js starter page.
- [ ] 1. Replace the home page with a "Mini Shop" heading, and add a header (shop name on the left) in the root layout.
  - Done when: the home page shows your heading under your header.

**Part B — Products** (lessons 01, 04, 09, 14)

- [ ] 2a. Make the product data: 6 products, each with an id, slug, name, price, emoji, and short description. Show them on the home page as cards (emoji, name, price in Rupiah).
  - Done when: 6 cards show, with prices like "Rp25.000".
- [ ] 2b. Make every card a link to its own product page. The product page shows the emoji, name, price, and description.
  - Done when: clicking a card opens that product's page.
- [ ] 2c. An unknown slug shows your own 404 page with a link back to the shop.
  - Done when: `/products/nope` shows your 404, not the Next.js default.
- [ ] 2d. Give each product page its own title and description.
  - Done when: the browser tab shows "Kopi Susu | Mini Shop" on that product's page.

**Part C — Search** (lesson 08)

- [ ] 3a. Add a search box above the list. Typing changes the URL to `?q=what-you-typed`, without adding a history entry for every letter.
  - Done when: typing "kopi" shows `?q=kopi` in the address bar.
- [ ] 3b. The list only shows products whose name matches the search (upper or lower case doesn't matter). An empty search shows all. No match shows "Produk tidak ditemukan".
  - Done when: "KOPI" and "kopi" give the same list, and "zzz" shows the message.

**Part D — Cart** (lessons 11, 12, 13, worked example above)

- [ ] 4a. Make the cart context and provider, pinning a **hard-coded** cart of one product with quantity 2. Wrap the site with it. Make `CartBadge` in the header that shows the total quantity.
  - Done when: the header shows "🛒 2".
- [ ] 4b. Swap the hard-coded cart for `useReducer`, starting empty, with the "add" note. Put an "Add to cart" button on the product page.
  - Done when: the badge starts at 0, and each "Add to cart" click raises it by 1, on any product.
- [ ] 4c. Make the `useCart()` hook and use it in the badge and the button.
  - Done when: everything still works, and no component imports `useContext` itself (only `useCart` does).
- [ ] 4d. Make the `/cart` page: one line per product (emoji, name × quantity, line price), a "+" and a "−" button per line (the line disappears at zero), an "Empty cart" button, and the total. Empty cart shows "Keranjang kosong" with a link to the shop.
  - Done when: + / − / empty all change the lines and the total.
- [ ] 4e. Make the badge a link to `/cart`.
  - Done when: clicking the badge opens the cart, and the count matches the cart page.

**Part E — Dark mode** (lesson 11)

- [ ] 5a. Add a theme toggle in the header. It switches the whole site between light and dark (header, cards, cart page).
  - Done when: one click changes every page's colours.
- [ ] 5b. Remember the theme after reload.
  - Done when: pick dark, reload, still dark.

**Part F — Errors and API** (lessons 09, 15)

- [ ] 6a. Add a site-wide error screen with the error message and a "Try again" button. Test it by making the home page throw on purpose, then remove the throw.
  - Done when: the throw shows your error screen, and removing it brings the shop back.
- [ ] 6b. Make `GET /api/products` that returns all products as JSON.
  - Done when: opening `http://localhost:3000/api/products` shows the 6 products.
- [ ] 6c. Make `GET /api/products/[slug]` that returns one product, or status 404 with an error message if the slug doesn't exist.
  - Done when: in Postman, `/api/products/kopi-susu` gives the product, and `/api/products/nope` gives status 404.

**Part G — Wrap up**

- [ ] 7. Write `NOTES.md` (with quiz answers and the list of lessons you reopened) + commit.

**Quiz**

> Q1. In lesson 12 the cart lived in `Shop.tsx`. Why did it have to move into a provider here?
>
> Q2. In lesson 15, `GET /api/todos` needed `connection()`. Your `GET /api/products` doesn't. Why?
>
> Q3. Reload the page: the theme stays, but the cart empties. Why? How could you keep the cart?
>
> Q4. In step 3a, why `router.replace` and not `router.push`?

<details>
<summary>Hints (open only when stuck)</summary>

**Step 0**

- From the `Lessons/capstone` folder:
  ```bash
  npx create-next-app@latest 01-mini-shop
  ```
- Answers to its questions: TypeScript **yes**, ESLint **yes**, Tailwind **yes**, `src/` directory **yes**, App Router **yes**, import alias **default (`@/*`)**. Anything else: the default.
- In `next.config.ts`, add `cacheComponents: true` inside the config object (look at `next-lesson/next.config.ts`).
- Then `cd 01-mini-shop` and `npm run dev`.

**Step 1**

- The header is a component (e.g. `src/components/Header.tsx`) rendered in `src/app/layout.tsx` above `{children}`, like `next-lesson`.

**Step 2a**

- A type and the array, in `src/data/products.ts`:
  ```ts
  export type Product = {
    id: number;
    slug: string;
    name: string;
    price: number;
    emoji: string;
    description: string;
  };

  export const PRODUCTS: Product[] = [
    { id: 1, slug: "kopi-susu", name: "Kopi Susu", price: 25000, emoji: "☕", description: "..." },
    // 5 more
  ];
  ```
- Rupiah format: `price.toLocaleString("id-ID")` turns `25000` into `"25.000"`.

**Step 2b**

- Folder `src/app/products/[slug]/page.tsx`. Find the product with `PRODUCTS.find((p) => p.slug === slug)`.
- Same as lesson 01: `params` is a Promise, and `generateStaticParams` returns `PRODUCTS.map((p) => ({ slug: p.slug }))`.

**Step 2c**

- Same as lesson 09 step 2: if `find` gives `undefined`, call `notFound()`. Your page is `src/app/not-found.tsx`.
- Red "blocking-route" error on `/products/nope`? Add a `loading.tsx` next to the product page (any short text). It gives the page the `<Suspense>` it asks for.

**Step 2d**

- Same as lesson 14: `generateMetadata({ params })` in the product page, find the product again, return `{ title, description }`.

**Step 3a**

- A client component, like lesson 08's sort buttons. A controlled input (lesson 06), and on change:
  ```tsx
  router.replace(`/?q=${encodeURIComponent(e.target.value)}`);
  ```
- `encodeURIComponent` makes text safe for a URL (spaces become `%20`).

**Step 3b**

- Same as lesson 08 step 3b: the page doesn't `await` `searchParams`. It passes it to a `ProductList` component inside `<Suspense>`, and `ProductList` awaits it.
- `q` may be missing: `const query = (q ?? "").toString().toLowerCase();`
- Match: `PRODUCTS.filter((p) => p.name.toLowerCase().includes(query))`.

**Step 4a**

- Worked example part 1, but `createContext` holds `{ cart, dispatch }`, and the provider pins a fixed array for now:
  ```tsx
  const fakeCart = [{ ...PRODUCTS[0], qty: 2 }];
  return <CartContext value={{ cart: fakeCart, dispatch: () => {} }}>{children}</CartContext>;
  ```
- Total quantity: `cart.reduce((sum, item) => sum + item.qty, 0)`.
- Wrap in the root layout, like lesson 11 step 2b.

**Step 4b**

- Bring lesson 12's `CartItem`, `CartAction` and `cartReducer` into `CartContext.tsx`. Start with only the `add` case.
- `const [cart, dispatch] = useReducer(cartReducer, []);`
- The product page stays a server component. `AddToCartButton` is a client component that gets the product as a prop: `<AddToCartButton product={product} />`.

**Step 4c**

- Worked example: `useNotif()` → `useCart()`.

**Step 4d**

- "+" can reuse the `add` note. "−" is lesson 12's `remove`. Total: lesson 12 step 5.
- `CartView` is a client component. `src/app/cart/page.tsx` just renders it.

**Step 5a**

- Same as lesson 11 steps 3 and 4. Don't forget the `@custom-variant dark` line in `globals.css`.
- The starter `globals.css` has a `@media (prefers-color-scheme: dark)` block that changes the colours by itself, following your OS. Delete it, or your toggle and the OS will fight.

**Step 5b**

- Same as lesson 11 step 5.

**Step 6a**

- `src/app/error.tsx`, a client component, props `{ error, retry }` (lesson 09 step 3).

**Step 6b**

- `src/app/api/products/route.ts`, same shape as lesson 15's `GET`.

**Step 6c**

- `src/app/api/products/[slug]/route.ts`. A route handler gets the URL's params as its **second** argument:
  ```ts
  export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> },
  ) {
    const { slug } = await params;
    // find the product, return it, or return { error } with status 404
  }
  ```

</details>
