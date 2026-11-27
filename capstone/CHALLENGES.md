# Capstone Challenges

A capstone comes after every 15 lessons. It mixes what you learned into one
small real project, so the lessons stick.

Rules:

- One step at a time. Tick the box when done.
- Every step adds **one** new thing, and you can **see** it in the browser.
- Every step says **"Like lesson XX"**: that's the lesson to open if you forget how.
- **Look, close, type it yourself.** You may open old lessons, docs, or ask.
  Don't paste whole files.
- Keep a **Forgotten list** in `NOTES.md`. Every time you get stuck and open an
  old lesson to remember how something works, add one line: which lesson you
  opened, and what you forgot. It is not a cheating log. It shows which
  lessons didn't stick yet, so you know what to review:
  ```md
  ## Forgotten list
  - 01: generateStaticParams (step C2)
  - 08: router.replace (step D2)
  - 08: passing searchParams into Suspense (step D3)
  ```
  Lesson 08 shows up twice, so review lesson 08 before lesson 16.
- Each capstone is its own Next.js project inside this folder.
- Hints are under each step. Open them only when stuck.

---

## Capstone 1 — Mini Shop (lessons 00–15)

**What you're building:** a small online shop. No database yet: the products
live in a TS array.

**The finished shop:**

| URL                       | What it shows                              |
| ------------------------- | ------------------------------------------ |
| `/`                       | Product cards + a search box               |
| `/?q=kopi`                | Only the products that match "kopi"        |
| `/products/latte`         | One product + an "Add to cart" button      |
| `/products/nope`          | Your own 404 page                          |
| `/cart`                   | The cart: + / − buttons, empty, total      |
| `/api/products`           | All products as JSON                       |
| `/api/products/latte`     | One product as JSON, or status 404         |

The header (shop name, cart badge, dark mode button) shows on every page.

**Files in this project** (no `src/` folder, so everything starts at the
project root; `@/` means the project root):

```
01-mini-shop/
├─ app/
│  ├─ layout.tsx                  header + providers
│  ├─ page.tsx                    home: search box + product list
│  ├─ not-found.tsx               your 404            (Part C)
│  ├─ error.tsx                   your error screen   (Part G)
│  ├─ products/[slug]/page.tsx    one product         (Part C)
│  ├─ cart/page.tsx               the cart            (Part E)
│  └─ api/products/...            the API             (Part G)
├─ components/                    Header, Cards, SearchBox, CartBadge, ...
├─ context/                       CartContext, ThemeContext   (Parts E, F)
└─ data/products.ts               the products
```

You don't need all of this now. Each part tells you which file to make.

---

### Part A — Setup ✅

- [x] A1. Create the project, turn on `cacheComponents`, and start it.
- [x] A2. Replace the home page with a "Mini Shop" heading, and add a header in the root layout.

---

### Part B — Product cards on the home page

You already have most of this.

- [x] B1. Make the product list 6 products (you have 5). Each one has an id, slug, name, price, emoji, and description. Show all of them as cards on the home page.
  - Like lesson 12 (`products.ts`).
  - Done when: the home page shows 6 cards.

- [x] B2. Show the price as Rupiah with dots.
  - Done when: a card shows `Rp45.000`, not `Rp45000`.

<details>
<summary>Hints B</summary>

- B1: just add one more object to the array in `data/products.ts`. Use a different slug for each one.
- B2: `toLocaleString("id-ID")` adds the dots:
  ```tsx
  <p>Rp{x.price.toLocaleString("id-ID")}</p>
  ```

</details>

---

### Part C — One page for each product

**How it works:** you don't make 6 pages. You make **one** page in a folder
called `[slug]`. The square brackets mean "any word goes here". Next.js gives
that word to your page, and your page uses it to find the right product.

```
/products/latte      → slug = "latte"      → find "latte" in PRODUCTS → show Latte
/products/kopi-susu  → slug = "kopi-susu"  → find "kopi-susu"         → show Kopi Susu
```

Your old `app/[slug]/` folder: delete it. Part C builds the page again in
`app/products/[slug]/`, one small piece at a time.

- [x] C1. Make `app/products/[slug]/page.tsx`. For now it only shows the text "Product page".
  - Like lesson 01 step 1.
  - Done when: opening `/products/anything` shows "Product page".

- [x] C2. Show the slug from the URL on the page. Next.js will show a red **"blocking-route"** error: that's expected. It wants a list of the slugs that exist. Add that list (`generateStaticParams`) and the error goes away.
  - Like lesson 01 step 4.
  - Done when: `/products/latte` shows the word "latte".

- [x] C3. Use the slug to find the product in `PRODUCTS`, and show its **name** instead of the slug.
  - Done when: `/products/latte` shows "Latte".

- [ ] C4. Also show the emoji, the price (Rupiah, like B2), and the description.
  - Done when: `/products/latte` shows all four.

- [x] C5. Make each card on the home page a link to its product page.
  - Like lesson 02.
  - Done when: clicking a card opens that product's page.

- [ ] C6. Make your own 404 page for the whole site: a message and a link back to the shop.
  - Like lesson 09 step 1.
  - Done when: opening `/abc` shows your 404, not the Next.js default.

- [x] C7. On the product page, if no product has that slug, show the 404 from C6.
  - Like lesson 09 step 2.
  - Done when: `/products/nope` shows your 404.

- [ ] C8. Give each product page its own browser tab title: "product name | Mini Shop".
  - Like lesson 14.
  - Done when: the tab on `/products/latte` says "Latte | Mini Shop".

<details>
<summary>Hints C</summary>

**C1**
```tsx
// app/products/[slug]/page.tsx
export default function ProductPage() {
  return <p>Product page</p>;
}
```

**C2**
- The page gets `props`. `props.params` is a Promise, so the page must be `async` and `await` it:
  ```tsx
  export default async function ProductPage(props: PageProps<"/products/[slug]">) {
    const { slug } = await props.params;
    return <p>{slug}</p>;
  }
  ```
- The slug list goes in the same file, outside the page function:
  ```tsx
  export async function generateStaticParams() {
    return PRODUCTS.map((p) => ({ slug: p.slug }));
  }
  ```
  It returns `[{ slug: "latte" }, { slug: "kopi-susu" }, ...]`: one object per product.
- Error type **"Instant"** ("URL data during prerendering or a navigation")? It comes from `partialPrefetching: true` in `next.config.ts` (copied from `next-lesson`, not a default). Fixes, simplest first:
  - **Add `app/products/[slug]/loading.tsx`.** Next.js wraps the page in that folder with `<Suspense>` for you, so the page stays as it is:
    ```tsx
    export default function Loading() {
      return <p>Loading...</p>;
    }
    ```
  - **Or** delete the `partialPrefetching` line and restart `npm run dev`.
  - A `<Suspense>` inside the page's JSX doesn't help: the page `await`s before its JSX exists. A `<Suspense>` in `app/products/layout.tsx` doesn't cover moving from one product to another, because that layout doesn't re-render.

**C3**
- `.find` gives the first item that matches, or `undefined` if nothing matches:
  ```tsx
  const product = PRODUCTS.find((p) => p.slug === slug);
  ```
- TypeScript will say `product` is "possibly undefined" (a wrong slug finds nothing). For now, add this line before the `return`. C7 replaces it with the real 404:
  ```tsx
  if (!product) return <p>Not found</p>;
  ```
- Show **one** product: `{product.name}`. No `.map` here.

**C5**
- `` href={`/products/${x.slug}`} ``. The `/` at the start means "from the root of the site". Without it, the link depends on which page you're on.
- `Cards.tsx` has no state and no clicks, so it doesn't need `"use client"`. Remove it.

**C6**
- The file name must be exactly `app/not-found.tsx`. It's a normal component with a `<Link href="/">`.

**C7**
- Replace the temporary `if (!product) return <p>Not found</p>;` with:
  ```tsx
  import { notFound } from "next/navigation";

  if (!product) notFound();
  ```
- Still a red "blocking-route" error on `/products/nope`? Add `app/products/[slug]/loading.tsx` with any short text (e.g. `<p>Loading...</p>`).

**C8**
- Add this to the product page file, outside the page function. It finds the product again, the same way as C3:
  ```tsx
  export async function generateMetadata(props: PageProps<"/products/[slug]">) {
    const { slug } = await props.params;
    const product = PRODUCTS.find((p) => p.slug === slug);
    return { title: `${product?.name} | Mini Shop` };
  }
  ```

</details>

---

### Part D — Search

**How it works:** the search text lives in the URL (`/?q=kopi`), like lesson
08's `?sort=asc`. Two parts:

```
SearchBox (client)          you type "kopi"  → it changes the URL to /?q=kopi
page.tsx (server)           reads q from the URL → gives it to the list
ProductList                 shows only the products that match q
```

- [ ] D1. Make a `SearchBox` component with an input, and show it above the cards. The input keeps what you type.
  - Like lesson 06 (controlled input).
  - Done when: you can type in the box.

- [ ] D2. When you type, change the URL to `/?q=what-you-typed`. Use the kind of navigation that doesn't add a Back-button step for every letter.
  - Like lesson 08 steps 1 and 4.
  - Done when: typing "kopi" shows `?q=kopi` in the address bar.

- [ ] D3. Give the search text to the card list, and show it above the cards as "Searching: kopi". Nothing is filtered yet.
  - Like lesson 08 step 3b.
  - Done when: typing "kopi" shows "Searching: kopi".

- [ ] D4. Show only the products whose name contains the search text. Upper or lower case doesn't matter. An empty search shows all products.
  - Done when: "kopi" and "KOPI" show the same cards.

- [ ] D5. When nothing matches, show "Produk tidak ditemukan" instead of the cards.
  - Done when: "zzz" shows the message.

<details>
<summary>Hints D</summary>

**D1**
- A client component (`"use client"`) with `useState("")` and `value` / `onChange` on the input.

**D2**
- Add `useRouter` from `next/navigation`. In `onChange`, after setting the state:
  ```tsx
  router.replace(`/?q=${encodeURIComponent(e.target.value)}`);
  ```
- `encodeURIComponent` makes text safe for a URL (a space becomes `%20`).
- `replace` instead of `push`: `push` adds one Back-button step for every letter you type.

**D3**
- The home page gets `props.searchParams` (a Promise). **Don't** `await` it in the page. Pass it to the list, inside `<Suspense>`:
  ```tsx
  // app/page.tsx
  export default function Homepage(props: PageProps<"/">) {
    return (
      <main>
        <SearchBox />
        <Suspense fallback={<p>Loading...</p>}>
          <CardPrice searchParams={props.searchParams} />
        </Suspense>
      </main>
    );
  }
  ```
- In `Cards.tsx`, the component becomes `async` and awaits it:
  ```tsx
  export default async function CardPrice({
    searchParams,
  }: {
    searchParams: Promise<{ q?: string | string[] }>;
  }) {
    const { q } = await searchParams;
    return <p>Searching: {q}</p>; // then your cards below
  }
  ```
- `async` components can't have `"use client"`. If C5 didn't remove it, remove it now.

**D4**
- `q` may be missing. Make it a lowercase string first:
  ```tsx
  const query = (q ?? "").toString().toLowerCase();
  const found = PRODUCTS.filter((p) => p.name.toLowerCase().includes(query));
  ```
- Then `.map` over `found` instead of `PRODUCTS`.
- `"anything".includes("")` is `true`, so an empty search keeps every product.

**D5**
- `found.length === 0` means nothing matched.

</details>

---

### Part E — The cart

**How it works:** in lesson 12, the whole cart lived in one component
(`Shop.tsx`): the products, the buttons, and the cart list were all in the
same file. Here the cart is needed in three places that are **neighbours**:

```
RootLayout
└─ CartProvider              holds the cart (the useReducer moves here)
   ├─ Header
   │  └─ CartBadge           reads the cart: "Cart: 3"
   └─ main
      ├─ /products/[slug]
      │  └─ AddToCartButton  sends "add"
      └─ /cart
         └─ CartView         reads the cart, sends "add" / "remove" / "clear"
```

Neighbours can't pass props to each other. That's the same problem as lesson
11 (header and page), so the answer is the same: **context**. The new part is
that the provider holds a `useReducer` instead of a `useState`:

| Lesson 12                                   | Capstone                                        |
| ------------------------------------------- | ----------------------------------------------- |
| `useReducer` inside `Shop.tsx`              | `useReducer` inside `CartProvider`              |
| `cart` and `dispatch` used in the same file | the provider puts `{ cart, dispatch }` on the context |
| buttons call `dispatch` in the same file    | any component calls `useCart()`, then `dispatch` |

**Analogy.** Lesson 12 was a cashier inside one counter. Now the shop has
three counters (header, product page, cart page), so the cashier moves to the
back office (the provider), and every counter sends notes there.

#### Worked example: a notification bell

Same idea, different scenario. A bell in the header shows a number. A button
on a page adds one, another clears it. The bell and the page are neighbours,
so the number lives in a provider with `useReducer`.

To try it: put these files in any Next.js project, wrap the root layout's
`<body>` content with `<NotifProvider>`, put `<Bell />` in the header, and
`<NotifButtons />` on a page.

```tsx
// context/NotifContext.tsx
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

// the back office: holds the state, puts it on the context
export function NotifProvider({ children }: { children: React.ReactNode }) {
  const [count, dispatch] = useReducer(notifReducer, 0);
  return <NotifContext value={{ count, dispatch }}>{children}</NotifContext>;
}

// the custom hook (lesson 13): any component reads the context with one call
export function useNotif() {
  return useContext(NotifContext);
}
```

```tsx
// components/Bell.tsx
"use client";

import { useNotif } from "@/context/NotifContext";

export default function Bell() {
  const { count } = useNotif();
  return <span>Bell: {count}</span>;
}
```

```tsx
// components/NotifButtons.tsx
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

The header and the page never talk to each other. Both talk to the provider.

| Notification bell (example)      | Mini Shop cart (your steps)                                |
| -------------------------------- | ---------------------------------------------------------- |
| `context/NotifContext.tsx`       | `context/CartContext.tsx`                                  |
| state: a number, starts at `0`   | state: an array of cart items, starts at `[]`              |
| notes: `add`, `clear`            | notes: `add` (a product), `remove` (an id), `clear`        |
| reducer: `count + 1`             | reducer: lesson 12's `cartReducer`                         |
| `useNotif()`                     | `useCart()`                                                |
| `Bell` shows the number          | `CartBadge` shows how many items are in the cart           |
| `NotifButtons` sends `add`       | `AddToCartButton` sends `{ type: "add", payload: product }` |

#### Steps

- [ ] E1. Make `context/CartContext.tsx` with a context whose default value is an empty cart. Make `CartBadge` that reads it and shows "Cart: 0". Put it in the header.
  - Like lesson 11 step 2a.
  - Done when: the header shows "Cart: 0".

- [ ] E2. Make `CartProvider` in the same file. For now it puts a **hard-coded** cart on the context: one product with quantity 2. Wrap the site with it in the root layout.
  - Like lesson 11 step 2b.
  - Done when: the header shows "Cart: 2".

- [ ] E3. Replace the hard-coded cart with `useReducer`, starting empty. The reducer only knows the "add" note for now.
  - Like lesson 12 step 2.
  - Done when: the header shows "Cart: 0" again.

- [ ] E4. Make `AddToCartButton` and put it on the product page. Clicking it sends the "add" note with that product.
  - Done when: each click raises the badge by 1, on any product page.

- [ ] E5. Make the `useCart()` hook in `CartContext.tsx`, and use it in `CartBadge` and `AddToCartButton` instead of `useContext`.
  - Like lesson 13 (and `useNotif` above).
  - Done when: the badge and the button still work.

- [ ] E6. Make the `/cart` page. It shows one line per product: name × quantity.
  - Done when: add 2 Latte and 1 Kopi, open `/cart`, and see "Latte × 2" and "Kopi × 1".

- [ ] E7. Add a "+" and a "−" button to each line. "−" at quantity 1 removes the line.
  - Like lesson 12 step 3.
  - Done when: + and − change the quantity, and the line disappears at zero.

- [ ] E8. Add an "Empty cart" button, and the total price at the bottom. An empty cart shows "Keranjang kosong".
  - Like lesson 12 steps 4 and 5.
  - Done when: the total changes with + / −, and "Empty cart" shows "Keranjang kosong".

- [ ] E9. Make the badge a link to `/cart`.
  - Done when: clicking the badge opens the cart.

<details>
<summary>Hints E</summary>

**E1**
- Types for a cart line (a product plus a quantity):
  ```tsx
  import { PRODUCTS } from "@/data/products";

  type Product = (typeof PRODUCTS)[number]; // "one item of PRODUCTS"
  export type CartItem = Product & { qty: number };
  ```
- The context, like lesson 11's `ThemeContext`:
  ```tsx
  "use client";
  import { createContext } from "react";

  export const CartContext = createContext<{ cart: CartItem[] }>({ cart: [] });
  ```
- How many items: add up every line's `qty`:
  ```tsx
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  ```
- `CartBadge` is a client component. `Header` can stay a server component.

**E2**
```tsx
export function CartProvider({ children }: { children: React.ReactNode }) {
  const fakeCart = [{ ...PRODUCTS[0], qty: 2 }];
  return <CartContext value={{ cart: fakeCart }}>{children}</CartContext>;
}
```
- In `app/layout.tsx`, wrap `<Header />` and `{children}` with `<CartProvider>`.

**E3**
- Bring lesson 12's `CartAction` and `cartReducer` into `CartContext.tsx`. Keep only the `add` case for now.
- The context now holds `cart` **and** `dispatch`, so its type and default change:
  ```tsx
  type CartValue = {
    cart: CartItem[];
    dispatch: (action: CartAction) => void;
  };

  export const CartContext = createContext<CartValue>({
    cart: [],
    dispatch: () => {},
  });
  ```
- In the provider:
  ```tsx
  const [cart, dispatch] = useReducer(cartReducer, []);
  return <CartContext value={{ cart, dispatch }}>{children}</CartContext>;
  ```

**E4**
- The product page stays a server component. The button is a client component that gets the product as a prop:
  ```tsx
  <AddToCartButton product={product} />
  ```
- Inside the button: `dispatch({ type: "add", payload: product })`.

**E5**
- Same as `useNotif()` in the worked example:
  ```tsx
  export function useCart() {
    return useContext(CartContext);
  }
  ```

**E6**
- `components/CartView.tsx` (client) does the work. `app/cart/page.tsx` just shows `<CartView />`.

**E7**
- "+" can send the same `add` note. "−" is lesson 12's `remove` note.

**E8**
- `clear` returns `[]`. Total price: `cart.reduce((sum, item) => sum + item.price * item.qty, 0)`.

</details>

---

### Part F — Dark mode

Same as lesson 11, in a new project.

- [ ] F1. Make a theme button in the header. It switches its own text between "Light" and "Dark".
  - Like lesson 11 steps 2 and 3.
  - Done when: clicking the button changes its text.

- [ ] F2. When the theme is dark, the whole site goes dark: header, cards, product page, cart.
  - Like lesson 11 step 4.
  - Done when: one click changes the colours of every page.

- [ ] F3. Remember the theme after reload.
  - Like lesson 11 step 5.
  - Done when: pick dark, reload, still dark.

<details>
<summary>Hints F</summary>

- F1: `context/ThemeContext.tsx` with a `ThemeProvider` that holds `useState("light")`, like lesson 11. Wrap the site with it in the layout, next to `CartProvider`.
- F2: in `app/globals.css`, add this line after `@import "tailwindcss";`:
  ```css
  @custom-variant dark (&:where(.dark, .dark *));
  ```
- F2: the starter `globals.css` has a `@media (prefers-color-scheme: dark)` block that changes colours by itself, following your computer's setting. Delete it, or it fights your button.
- F2: then add `dark:` classes, e.g. `bg-white dark:bg-gray-900`.
- F3: `localStorage`, same as lesson 11 step 5.

</details>

---

### Part G — Error screen and API

- [ ] G1. Make an error screen for the whole site: the error message and a "Try again" button. Test it: make the home page `throw new Error("test")` on purpose, look, then remove the throw.
  - Like lesson 09 step 3.
  - Done when: the throw shows your error screen, and removing it brings the shop back.

- [ ] G2. Make `GET /api/products` that returns all products as JSON.
  - Like lesson 15 step 1.
  - Done when: opening `http://localhost:3000/api/products` shows the 6 products.

- [ ] G3. Make `GET /api/products/[slug]` that returns one product, or status 404 with an error message if the slug doesn't exist.
  - Like lesson 15 step 3 (but 404 instead of 400).
  - Done when: in Postman, `/api/products/latte` gives the product, and `/api/products/nope` gives status 404.

<details>
<summary>Hints G</summary>

**G1**
- `app/error.tsx`, a client component, props `{ error, retry }` (lesson 09 step 3).
- In dev, Next.js shows its own red overlay first. Close it to see your screen.

**G2**
- `app/api/products/route.ts`, same shape as lesson 15's `GET`.

**G3**
- `app/api/products/[slug]/route.ts`. A route handler gets the URL's slug in its **second** argument:
  ```ts
  export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> },
  ) {
    const { slug } = await params;
    // find the product (like C3), return it,
    // or return { error: "..." } with { status: 404 }
  }
  ```

</details>

---

### Part H — Wrap up

- [ ] H1. Write `NOTES.md` in the project folder: what was hard, your **Forgotten list**, and the quiz answers. Then commit.

**Quiz**

> Q1. In lesson 12 the cart lived in `Shop.tsx`. Why did it have to move into a provider here?
>
> Q2. In lesson 15, `GET /api/todos` needed `connection()`. Your `GET /api/products` doesn't. Why?
>
> Q3. Reload the page: the theme stays, but the cart empties. Why? How could you keep the cart?
>
> Q4. In step D2, why `router.replace` and not `router.push`?
