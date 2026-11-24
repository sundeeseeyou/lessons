# Next.js Challenges (00–15)

Rules:

- One step at a time. Tick the box when done.
- Stuck 10 minutes? Read the docs link. Still stuck? Ask.
- Some lessons have a **Quiz**. Answer it in `NOTES.md`, not here.
- After each lesson: write `NOTES.md` in the lesson folder, then commit.

All lesson folders go inside `src/app/`.

---

## 00 — Home menu

- [x] Replace `src/app/page.tsx` with a list of `<Link>`s to the 5 lesson folders.
  - Done when: `http://localhost:3000` shows 5 links.

---

## 01 — Layouts and Pages

Docs: https://nextjs.org/docs/app/getting-started/layouts-and-pages

- [x] 1. Create `01-layouts-and-pages/page.tsx` that shows "Lesson 01".
  - Done when: the link on home opens it.
- [x] 2. Add `01-layouts-and-pages/layout.tsx` with a header.
  - Done when: the header shows above the page.
- [x] 3. Create `01-layouts-and-pages/about/page.tsx`.
  - Done when: `/01-layouts-and-pages/about` shows the same header.
- [x] 4. Create `01-layouts-and-pages/[slug]/page.tsx` that shows the slug from the URL.
  - Done when: `/01-layouts-and-pages/hello` shows "hello".
  - Hint: `params` is a Promise, so `await params`.
  - Hint: red "blocking-route" error? Add `generateStaticParams` that returns a few slugs.
- [x] 5. Write `NOTES.md` + commit.

---

## 02 — Linking and Navigating

Docs: https://nextjs.org/docs/app/getting-started/linking-and-navigating

- [x] 1. Create pages `02-linking-and-navigating/a/page.tsx` and `02-linking-and-navigating/b/page.tsx`.
- [x] 2. In `02-linking-and-navigating/layout.tsx`, add a `<Link>` to `a`, a `<Link>` to `b`, and a plain `<a>` to `b`.
- [x] 3. Put an `<input />` in that layout. Type something, then click each link.
- [x] 4. Make the current link bold, using `usePathname()`.
  - Hint: hooks need `'use client'` at the top of the file.
- [x] 5. Write `NOTES.md` (with quiz answer) + commit.

**Quiz**

> Q1. Why does the input text stay when you click `<Link>`, but disappear when you click `<a>`?

---

## 03 — Server and Client Components

Docs: https://nextjs.org/docs/app/getting-started/server-and-client-components

- [x] 1. In `03-server-and-client-components/page.tsx`, add `console.log("page")`. Reload the page.
- [x] 2. Make `counter.tsx` with `'use client'` and a `useState` button. Use it in the page.
  - Done when: clicking increases the number.
- [x] 3. Remove `'use client'` from `counter.tsx`. Read the error. Put it back.
- [x] 4. Add `console.log("counter")` inside the counter. Reload the page.
- [x] 5. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. Where does `console.log("page")` print: terminal, browser, or both?
>
> Q2. Where does `console.log("counter")` print, and why is it different from `"page"`?

---

## 04 — Fetching Data

Docs: https://nextjs.org/docs/app/getting-started/fetching-data

- [x] 1. Make an `async` component that fetches `https://api.vercel.app/blog` and lists the titles. Render it in `04-fetching-data/page.tsx`.
  - Hint: red "blocking-route" error? Wrap the component in `<Suspense fallback={<p>Loading...</p>}>`.
- [x] 2. Create `04-fetching-data/with-loading/page.tsx` that fetches directly in the page, plus `loading.tsx` next to it.
  - Done when: you see the loading text, then the list.
- [x] 3. Write `NOTES.md` + commit.

---

## 05 — Mutating Data

Docs: https://nextjs.org/docs/app/getting-started/mutating-data

- [x] 1. Create `05-mutating-data/todos.ts` with `export const todos: string[] = []`.
- [x] 2. Create `05-mutating-data/actions.ts` with `'use server'` at the top and an `addTodo(formData: FormData)` function that pushes `formData.get("title")` into `todos` and then calls `revalidatePath("/05-mutating-data")`.
- [x] 3. In `05-mutating-data/page.tsx`, add `<form action={addTodo}>` with `<input name="title" />` and a button, and list the todos below it.
  - Done when: a new todo appears after you submit.
  - Note: the list resets when the dev server restarts. That's fine.
- [x] 4. Remove the `revalidatePath` line and add a todo. Then put the line back.
- [x] 5. Write `NOTES.md` (with quiz answer) + commit.

**Quiz**

> Q1. In step 4, without `revalidatePath`, what happened after you added a todo?

---

## 06 — useState (client hooks 1)

Docs:

- https://react.dev/learn/state-a-components-memory
- https://react.dev/learn/updating-arrays-in-state

- [x] 1. Add lessons 06–10 to the home menu (`src/data/lesson.ts`). Use the folder names from this file.
  - Done when: home shows 10 links.
- [x] 2. Create `06-use-state/toggle.tsx` (`'use client'`) with a button that shows/hides a `<p>`. Render it in `06-use-state/page.tsx`.
  - First write it with a plain variable: `let show = false` and `show = !show` in `onClick`. Click it.
  - Then rewrite it with `useState`.
  - Done when: the `useState` version toggles the text.
  - Hint: show it conditionally with `{show && <p>...</p>}`.
- [x] 3. Create `06-use-state/name-input.tsx`: an input whose value lives in state (`value={name}` + `onChange={(e) => setName(e.target.value)}`). Below it, show `Hello, {name}`.
  - Done when: the greeting updates while you type.
- [x] 4. Create `06-use-state/shopping-list.tsx`: an input + an "Add" button. Keep the items in `useState<string[]>([])` and add with `setItems([...items, text])`. Show the items in a `<ul>`.
  - Done when: the list grows on every click.
  - Hint: you need two states: the input text and the items.
  - Hint: don't wrap it in a `<form>` (there's no server action here). Use the button's `onClick`.
  - Hint: `key={index}` is fine here, because this list never gets reordered.
- [x] 5. Change the add line to `items.push(text); setItems(items);`. Click "Add" a few times, then type one more letter in the input. Put the spread version back.
- [x] 6. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. Why did the `let show` version do nothing? (The docs give two reasons.)
>
> Q2. In step 5, why didn't the list update on "Add"? And why did it suddenly update when you typed?

---

## 07 — useEffect and useRef (client hooks 2)

Docs:

- https://react.dev/learn/synchronizing-with-effects
- https://react.dev/learn/manipulating-the-dom-with-refs

- [x] 1. Create `07-effect-and-ref/focus-input.tsx`: an input + a "Focus" button. Use `useRef<HTMLInputElement>(null)`, put `ref={inputRef}` on the input, and call `inputRef.current?.focus()` on click. Render it in `07-effect-and-ref/page.tsx`.
  - Done when: clicking the button puts the cursor in the input.
  - Hint: `?.` is there because `current` is `null` until React attaches the input.
- [x] 2. Create `07-effect-and-ref/title-counter.tsx`: a counter button with `useState`, plus ``useEffect(() => { document.title = `Clicked ${count} times` }, [count])``.
  - Done when: the browser tab title changes when you click.
- [x] 3. Add `console.log("effect ran")` inside that effect. Try 3 versions of the dependency array, clicking a few times each: no array, `[]`, `[count]`. End with `[count]`.
  - Hint: seeing the log twice on page load is normal in dev (Strict Mode).
- [x] 4. Create `07-effect-and-ref/timer.tsx`: a `seconds` state that goes up every second. In `useEffect` with `[]`: `const id = setInterval(() => setSeconds((s) => s + 1), 1000)` and `return () => clearInterval(id)`.
  - Done when: it counts +1 every second.
  - Hint: use `(s) => s + 1`, not `seconds + 1`. With `[]`, the effect only ever sees the first value of `seconds`.
- [x] 5. Delete the `return () => clearInterval(id)` line and reload the page. Watch the speed. Put the line back.
- [x] 6. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. When does the effect run with no array, with `[]`, and with `[count]`?
>
> Q2. In step 5, why did the timer speed up without the cleanup? What does the cleanup function do?

---

## 08 — Search Params and useRouter

**What you're building:** a page that lists 10 blog titles, with "A–Z" and "Z–A" buttons. Clicking a button changes the URL and the order of the list.

Docs:
- https://nextjs.org/docs/app/api-reference/functions/use-search-params
- https://nextjs.org/docs/app/api-reference/functions/use-router
- https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional

- [x] 1. Make a sort buttons component (`sort-buttons.tsx`) with two buttons, "A–Z" and "Z–A". Clicking one keeps you on the same page but changes the URL to `?sort=asc` or `?sort=desc`. Show it on the lesson 08 page.
  - Done when: the URL in the address bar changes when you click.
- [x] 2. Make a component (`current-sort.tsx`) that shows which sort is active: "Sort: asc", "Sort: desc", or "Sort: none" when there's no sort in the URL.
  - Done when: the text follows the URL when you click the buttons.
- [x] 3a. Make a post list component (`post-list.tsx`) that fetches the blog posts and shows the first 10 titles, in the API's order. Show it on the page with a loading text while it waits.
  - Done when: 10 titles show on the page.
- [x] 3b. Let the post list know the current sort. The page hands the URL's query to the post list, and the post list reads `sort` from it and logs it.
  - Done when: clicking "A–Z" logs `asc` in the terminal, and "Z–A" logs `desc`.
- [x] 3c. Sort the titles before showing them: `asc` → A to Z, `desc` → Z to A, no sort → the API's order.
  - Done when: the buttons reorder the list.
- [x] 4. Click A–Z, Z–A, A–Z, then press the browser's Back button a few times. Then change the buttons so they *replace* the current history entry instead of adding a new one, and try Back again.
- [x] 5. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. `useSearchParams()` vs the page's `searchParams` prop: which one works in a Server Component, and which one in a Client Component?
>
> Q2. In step 4, what changed about the Back button after the change?
>
> Q3. Why do the docs recommend wrapping a component that uses `useSearchParams` in `<Suspense>`?

<details>
<summary>Hints (open only when stuck)</summary>

**Step 1**
- Client component (`'use client'`). `useRouter()` and `usePathname()` come from `next/navigation`.
- Navigate with `router.push(...)`. The new URL is the current path + `?sort=asc`.

**Step 2**
- `useSearchParams()` (from `next/navigation`) reads the query: `.get("sort")` gives `"asc"`, `"desc"`, or `null`.
- A component that uses `useSearchParams` should be wrapped in `<Suspense>` where you render it.

**Step 3a**
- Same pattern as `posts.tsx` in lesson 04: an `async` component, wrapped in `<Suspense fallback={...}>` in the page.

**Step 3b**
- The page receives its props with `export default function LessonEight(props: PageProps<"/08-search-params">)`.
- `props.searchParams` is a Promise (like `params` in lesson 01). Don't `await` it in the page. Pass it as a prop: `<PostList searchParams={props.searchParams} />`. Awaiting it in the page, outside `<Suspense>`, makes the whole page wait ("blocking-route").
- In the post list, type the prop as `{ searchParams: Promise<{ sort?: string | string[] }> }`. Read it as: "a Promise that gives an object that *may* have `sort`". `?` = may be missing, `string[]` because a URL can repeat a key.
- Then `const { sort } = await searchParams;`.

**Step 3c**
- A to Z: `[...posts].sort((a, b) => a.title.localeCompare(b.title))`. Z to A: add `.reverse()`.
- Copy first (`[...posts]`) because `.sort()` changes the array it's called on.
- `localeCompare` compares two strings alphabetically.

**Step 4**
- `router.replace(...)` instead of `router.push(...)`.

</details>

---

## 09 — Error Handling

**What you're building:** a lesson page with three sub-pages, each showing a different kind of error: a "not found", a crash, and a form that rejects bad input.

**Built-in pieces you'll use** (Next.js and React already have these, you don't build them):
- `not-found.tsx`: a special file name. Next.js shows it when a page calls `notFound()`. The one in `src/app/` is the site-wide 404.
- `notFound()`: a function from `next/navigation`. Call it to say "this thing doesn't exist", and Next.js swaps the page for the nearest `not-found.tsx`.
- `error.tsx`: a special file name. When something inside that folder crashes, Next.js shows this file instead. Next.js hands it two props for free: `error` (what went wrong) and `retry` (a function that tries again). No import needed.
- `useActionState`: a React hook (from `react`). It runs a server action from a form and gives you back what the action returned, plus whether it's still running.

Docs: https://nextjs.org/docs/app/getting-started/error-handling

- [x] 1. Make the lesson 09 page with links to three sub-pages: `post`, `crash`, and `form`. Also make your own 404 page for the whole site.
  - Done when: opening `/does-not-exist` shows your own 404.
- [x] 2. Make the `post` page. It looks for a post with the heading `"nope"` in your local post data (`src/data/post.ts`). If there's no such post, it shows a "not found" page that belongs to this lesson, with different text from the site's 404.
  - Done when: `/09-error-handling/post` shows the lesson's 404, not the site's. Then change `"nope"` to `"hello"` and the post shows.
- [x] 3. Make the `crash` page with an "Explode" button. Clicking it makes the component crash. Instead of a broken page, the user sees a friendly error screen with the error message and a "Try again" button that brings the "Explode" button back.
  - Done when: "Explode" shows your error screen, and "Try again" brings the button back.
- [x] 4. On the `crash` page, add a second button that throws an error from inside its click handler. Click it and watch what happens (and what doesn't).
- [x] 5. Make the `form` page: a form with a name input. The check happens on the server. Submitting it empty shows "Name is required". Submitting a name shows "Saved: <name>". The submit button is disabled while it's saving.
  - Done when: an empty submit shows "Name is required", and a filled one shows "Saved: ...".
- [x] 6. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. In step 2, which 404 page was shown, and why that one?
>
> Q2. In step 4, why didn't your error screen catch the error from the click?
>
> Q3. The docs split errors into "expected errors" and "uncaught exceptions". Which one was step 3, which one was step 5, and how is each handled?

<details>
<summary>Hints (open only when stuck)</summary>

**Step 1**
- The site's 404 is `src/app/not-found.tsx`.

**Step 2**
- `notFound()` from `next/navigation` shows the nearest `not-found.tsx`.
- Put a `not-found.tsx` next to the `post` page.

**Step 3**
- The crashing part is a client component with an `explode` state. If `explode` is true, `throw new Error("Boom")` before the `return`.
- The error screen is `error.tsx` next to the `crash` page. It must be a client component.
- Its props: `{ error, retry }: { error: unknown; retry: () => void }`. It's `retry`, not `reset` (older tutorials use `reset`).
- `error` is `unknown`. Show it with `error instanceof Error ? error.message : String(error)`.
- In dev, Next.js shows its own red error overlay first. Close it to see your `error.tsx`.

**Step 4**
- `onClick={() => { throw new Error("Click boom") }}`

**Step 5**
- Server side: an `actions.ts` with `'use server'`, exporting `saveName(prevState: { message: string }, formData: FormData)`. It returns `{ message: "..." }` in both cases.
- Client side: a form component that uses `useActionState` (from `react`): `const [state, formAction, pending] = useActionState(saveName, { message: "" })`. Put `action={formAction}` on the form, show `state.message`, and `disabled={pending}` on the button.
- With `useActionState`, the action gets `prevState` first and `formData` second.
- Don't add `required` to the input, or the browser blocks the empty submit before it reaches the server.

</details>

---

## 10 — Caching

**What you're building:** a page that shows two clocks side by side. One shows a fresh time on every reload, the other is cached and stays the same for a while. Then the same idea for fetched data.

**Built-in pieces you'll use** (Next.js already has these, you don't build them):
- `connection()`: a function from `next/server`. Await it in a component to say "build this fresh on every visit".
- `'use cache'`: a directive, written as the first line inside a function or component. It tells Next.js "remember what this returns and reuse it".
- `cacheLife()`: a function from `next/cache`, called right after `'use cache'`. It says how long to remember: `'minutes'`, `'hours'`, `'days'`, and so on.
- The dev overlay "insight": when Next.js can't pre-build part of a page, the dev overlay shows a card that names the problem and suggests fixes.

**How it works (read this first)**

Next.js wants to build every page *in advance*, before anyone visits. Think of a printed flyer: print once, hand the same copy to everyone, super fast. This is called **prerendering**. Your lesson 01–09 pages all got printed this way without you noticing.

A clock breaks the flyer idea. If you print "14:03:21" today, everyone tomorrow still gets "14:03:21". Next.js knows that `new Date()` / `Date.now()` inside a server component means "this can't be printed in advance", so in dev it stops and shows an **insight card** telling you to choose. There are only two choices, and this lesson makes you try both:

| Choice | What you write | What it means | Analogy |
|---|---|---|---|
| Fresh every visit | `await connection()` as the first line of an `async` component, and wrap it in `<Suspense>` | Don't print this part. Build it when the visitor arrives. | A barista writing your name on the cup |
| Cached for a while | `'use cache'` then `cacheLife('minutes')` as the first lines of an `async` component or function | Print it, keep the copy for N minutes, then print a new one | A café's "soup of the day" board |

Why `<Suspense>` for the fresh part? Because the rest of the page is still a flyer. Suspense marks the one hole in the flyer ("time goes here") so the flyer can still be printed with the hole left blank. Same idea as the `useSearchParams` Suspense in lesson 08.

Why `async`? Both `connection()` and `'use cache'` need the component to be able to wait, and only `async` functions can `await`.

One more rule: this all applies to **server** components. A `'use client'` component is not what this lesson is about, so do not put `'use client'` on the lesson 10 page.

Docs:
- https://nextjs.org/docs/app/getting-started/caching
- https://nextjs.org/docs/app/api-reference/functions/cacheLife

- [x] 1. On the lesson 10 page, show the current time, rendered on the server. Open the page.
  - Done when: the dev overlay shows a "blocking-prerender-current-time" insight. Read its fix cards.
- [x] 2. Fix it so the time is fresh on every reload.
  - Done when: the time changes on every reload, and the insight is gone.
- [x] 3. Add a second clock next to it that is cached for a few minutes.
  - Done when: the first clock changes on every reload, but the second one stays the same (reload a few times within one minute).
- [x] 4. Step 3 cached a *component*. Now cache *data* instead. In a `data.ts`, write `getPosts()`: a function (not a component) that fetches the blog posts and returns `{ posts, fetchedAt }`, where `fetchedAt` is the time the fetch really ran. Cache this function for hours. Then make a plain component (no `'use cache'`) that calls `getPosts()` and shows "Fetched at: ..." once, plus the first 5 titles.
  - Done when: "Fetched at" stays the same across reloads. If it changes, the fetch ran again, so the cache is not on the function.
- [x] 5. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. You open the lesson 10 page at 14:00:00. A friend opens the same page at 14:00:30. What time does each of you see on the Fresh clock? What time does each of you see on the Cached clock? Why are the two clocks different?
>
> Q2. `cacheLife('minutes')` is a preset made of three durations: `stale`, `revalidate`, and `expire`. Open the `cacheLife` docs and find the table of presets. For each of the three, write in your own words: "when this much time has passed, what happens?" Then: if you write `'use cache'` but never call `cacheLife`, which preset do you get?
>
> Q3. In step 3 you cached a component (`CachedClock`). In step 4 you cached a data function (`getPost`). Imagine a second page also needs the blog posts. Which of the two ways lets that second page reuse the cache, and why? Then give one case where caching the whole component is the better pick.

<details>
<summary>Hints (open only when stuck)</summary>

**Step 1**
- `new Date().toLocaleTimeString()` inside a server component.

**Step 2**
- Make the clock component `async` and call `await connection()` (from `next/server`) as its first line.
- Wrap the clock in `<Suspense>` in the page.
- Starter (`fresh-clock.tsx`):
  ```tsx
  import { connection } from "next/server";

  export default async function FreshClock() {
    await connection();
    return <p>Fresh: {new Date().toLocaleTimeString()}</p>;
  }
  ```
  In the page: `<Suspense fallback={<p>...</p>}><FreshClock /></Suspense>`.

**Step 3**
- A second clock component with `'use cache'` and `cacheLife('minutes')` (from `next/cache`) at the top of its body.
- Cached components must be `async`.
- Saving the file resets the cache in dev. Reload without editing.
- Starter (`cached-clock.tsx`):
  ```tsx
  import { cacheLife } from "next/cache";

  export default async function CachedClock() {
    "use cache";
    cacheLife("minutes");
    return <p>Cached: {new Date().toLocaleTimeString()}</p>;
  }
  ```

**Step 4**
- A `data.ts` with `getPosts()`: `'use cache'`, `cacheLife('hours')`, fetch, and `return { posts, fetchedAt: new Date().toLocaleTimeString() }`.
- Starter (`data.ts`):
  ```ts
  import { cacheLife } from "next/cache";

  export async function getPosts() {
    "use cache";
    cacheLife("hours");
    const res = await fetch("https://api.vercel.app/blog");
    const posts: { title: string }[] = await res.json();
    return { posts, fetchedAt: new Date().toLocaleTimeString() };
  }
  ```
  In the page: `const { posts, fetchedAt } = await getPosts()`, then show `fetchedAt` and `posts.slice(0, 5)`.

</details>

---

## 11 — useContext: a dark mode switch for the whole site

**What you're building:** a dark mode button in the site header. Click it and every page goes dark, not just one. Reload the page and your choice is still there.

**The story:** a theme isn't owned by one page. The header has the button, but the lesson pages need to know the theme too. You could pass it down as props through every layout and page, but that gets messy fast ("prop drilling"). Context is a shared noticeboard: one component pins the current theme on it, and any component below can read it.

**Built-in pieces you'll use:**
- `createContext`: React function that creates the noticeboard. You make it once, in its own file.
- The provider: you wrap part of the app with your context (`<ThemeContext value={...}>`), and everything inside can read what you put in `value`.
- `useContext`: React hook. A component calls it to read the noticeboard.
- `localStorage`: the browser's small notebook. It keeps a value even after reload. Only exists in the browser.
- `document.documentElement`: the `<html>` element. You'll add or remove a `dark` class on it.
- Tailwind's `dark:` prefix: styles that only apply in dark mode. By default it follows the OS setting, so you'll tell Tailwind to follow the `dark` class instead.

Docs: https://react.dev/learn/passing-data-deeply-with-context · https://tailwindcss.com/docs/dark-mode

**How it works (read this first)**

The header and the page are neighbours, so they can't pass props to each other. Context lets one component above both share a value with everything below it.

```
RootLayout
└─ ThemeProvider        <- holds the state, pins it
   ├─ Header
   │  └─ ThemeToggle    <- reads it, flips it
   └─ main
      └─ lesson 11 page
         └─ ThemeLabel  <- reads it
```

Three parts: `createContext` makes the board, the provider pins a value, `useContext` reads it.

- [x] 1. Add lessons 11–15 to the home menu. Use these folder names: `11-use-context`, `12-use-reducer`, `13-custom-hooks`, `14-metadata`, `15-route-handlers`.
  - Done when: home shows 15 links.
- [x] 2a. Create the context, default `"light"`. Make `ThemeLabel` that reads it. Show it on the lesson 11 page.
  - Done when: the page shows "Theme: light".
- [x] 2b. Make `ThemeProvider` that pins `"dark"`. Wrap the site with it in the root layout.
  - Done when: the label says "Theme: dark".
- [x] 2c. Swap `"dark"` for state. Pin the theme and a function that flips it.
  - Done when: the label says "Theme: light" again.
- [x] 3. Make `ThemeToggle` in the header. It shows the theme and flips it on click.
  - Done when: clicking it changes the label on the lesson 11 page.
- [x] 4. When the theme changes, add or remove the `dark` class on `<html>`. Make Tailwind follow that class. Add a card that changes colour.
  - Done when: the toggle changes the card's colours.
- [x] 5. Save the theme in the browser. Read it back when the site opens.
  - Done when: pick dark, reload, still dark. A light flash on reload is normal, see Q3.
- [x] 6. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. Why use context here instead of passing `theme` as a prop from the layout to every page?
>
> Q2. The provider has to be a client component, but the root layout stays a server component. Why does that work?
>
> Q3. Why does the page flash light for a moment on reload, before turning dark?

<details>
<summary>Hints (open only when stuck)</summary>

**Step 2a**
- You already have the file: `src/app/11-use-context/ThemeContext.tsx`. Keep it there.
- The context's name must start with a capital letter: `ThemeContext`, not `themeContext`. In step 2b you use it as a JSX tag, and React treats lowercase tags as plain HTML.
  ```tsx
  "use client";
  import { createContext } from "react";

  export const ThemeContext = createContext("light");
  ```
- The reader, `src/app/11-use-context/ThemeLabel.tsx`. Hooks need a client component.
  ```tsx
  "use client";
  import { useContext } from "react";
  import { ThemeContext } from "./ThemeContext";

  export default function ThemeLabel() {
    const theme = useContext(ThemeContext);
    return <p>Theme: {theme}</p>;
  }
  ```
- Then render `<ThemeLabel />` in the lesson 11 `page.tsx`.

**Step 2b**
- In `src/app/11-use-context/ThemeProvider.tsx`, with `"use client"` on line 1 and `import { ThemeContext } from "./ThemeContext"`. `children` is "whatever is between my tags" (same as a layout).
  ```tsx
  export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    return <ThemeContext value="dark">{children}</ThemeContext>;
  }
  ```
- In `src/app/layout.tsx`, wrap what is inside `<body>`:
  ```tsx
  <body className="min-h-full flex flex-col">
    <ThemeProvider>
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  </body>
  ```
- Import it as a default import: `import ThemeProvider from "@/app/11-use-context/ThemeProvider"`.

**Step 2c**
- In `ThemeContext.tsx`: the board now holds a pair, not a word, so the default value and its type change too:
  ```tsx
  type ThemeValue = { theme: string; toggleTheme: () => void };

  export const ThemeContext = createContext<ThemeValue>({
    theme: "light",
    toggleTheme: () => {},
  });
  ```
- In `ThemeProvider.tsx`: the provider holds the state (lesson 06) and pins the pair. Import `useState` from `react`.
  ```tsx
  export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
  }
  ```
- In `ThemeLabel`, the reader now gets the pair: `const { theme } = useContext(ThemeContext);`

**Step 3**
- A client component, e.g. `src/components/navigation/ThemeToggle.tsx`:
  ```tsx
  "use client";
  import { useContext } from "react";
  import { ThemeContext } from "@/app/11-use-context/ThemeContext";

  export default function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return <button onClick={toggleTheme}>{theme === "light" ? "Light" : "Dark"}</button>;
  }
  ```
- Render `<ThemeToggle />` inside `Header.tsx`. Header can stay a server component (same idea as Counter in lesson 03).

**Step 4**
- In `globals.css`, after `@import "tailwindcss";`: `@custom-variant dark (&:where(.dark, .dark *));`
- In the provider, a `useEffect` with `[theme]` that runs `document.documentElement.classList.toggle("dark", theme === "dark")`.
- Card example classes: `bg-white text-black dark:bg-gray-900 dark:text-white`.

**Step 5**
- Save: in the same effect, `localStorage.setItem("theme", theme)`.
- Read: a second `useEffect` with `[]` that reads `localStorage.getItem("theme")` and sets the state if it's there.
- Don't read `localStorage` directly in `useState(...)`: the provider also renders on the server, where `localStorage` doesn't exist.

</details>

---

## 12 — useReducer: a shopping cart

**What you're building:** a tiny shop page. A few products with "Add to cart" buttons, and a cart that shows each item with its quantity, a "−" button, an "Empty cart" button, and the total price.

**The story:** with `useState`, every button would carry its own "how to change the cart" logic, spread across the component. A reducer moves all of that into one place, like a cashier. Buttons don't touch the cart themselves. They hand the cashier a note ("add this", "remove one of these", "empty everything"), and the cashier is the only one who changes the cart.

**Built-in pieces you'll use:**
- `useReducer`: React hook. Like `useState`, but instead of a setter you get `dispatch`, which sends a note to the cashier.
- The reducer: a plain function you write. It receives the current cart and a note, and returns the new cart. It never edits the old cart (the lesson 06 rule: always return a new array).
- The note (an "action"): a small object you design, like `{ type: "add", product }`.
- `.reduce()` for the total: you practiced it in `Typescript-project`.

Docs: https://react.dev/learn/extracting-state-logic-into-a-reducer

- [x] 1. Make the products: a short list (3–4 items, each with an id, a name and a price) in `src/data/products.ts`. Show them on the lesson 12 page, each with an "Add to cart" button that does nothing yet.
  - Done when: the products show with their buttons.
- [x] 2. Make the cashier. Write a reducer that understands one note: "add this product". If the product is already in the cart, its quantity goes up by one. If not, it joins the cart with quantity 1. Hook it up so "Add to cart" sends that note, and show the cart below the products (name × quantity).
  - Done when: clicking "Add" on the same product twice shows it once with × 2.
- [x] 3. Teach the cashier "remove one of these". Add a "−" button to each cart line. Quantity goes down by one, and the line disappears at zero.
  - Done when: "−" lowers the count and removes the line at zero.
- [x] 4. Teach the cashier "empty everything", with an "Empty cart" button.
  - Done when: the button clears the cart.
- [x] 5. Show the total price at the bottom of the cart.
  - Done when: the total updates as you add and remove.
- [x] 6. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. In your own words: what does the reducer do, and what does `dispatch` do?
>
> Q2. When would you pick `useReducer` over `useState`?

<details>
<summary>Hints (open only when stuck)</summary>

**Step 1**
- The page is a server component. The buttons and the cart need state, so the products list and the cart both go in one client component (they share the cart).

**Step 2**
- `const [cart, dispatch] = useReducer(cartReducer, [])`.
- Reducer shape: `function cartReducer(cart, action) { if (action.type === "add") { ... } return cart; }`.
- "Already in the cart?": `.find()`. Update it with `.map()` + spread (practice-2, question 12). New item: `[...cart, { ...product, qty: 1 }]`.
- A type for the notes keeps TypeScript happy: `type Action = { type: "add"; product: Product } | { type: "remove"; id: number } | { type: "clear" }`.

**Step 3**
- Lower the quantity with `.map()`, then drop lines at zero with `.filter()`.

**Step 5**
- `cart.reduce((total, item) => total + item.price * item.qty, 0)`.

</details>

---

## 13 — Custom hooks: an online / offline badge

**What you're building:** a small badge that says "Online" or "Offline", like WhatsApp's "connecting...". Plus a "Save" button that disables itself while you're offline. Then you move the shared logic into your own hook.

**The story:** both the badge and the button need to know "am I online?". The first time, you'll write that logic twice and feel how annoying it is. Then you'll pack it into your own hook, `useOnlineStatus`, and both components just call it.

**You'll build the same thing twice, on purpose:**

| | Version A: without a custom hook (long) | Version B: with a custom hook (short) |
|---|---|---|
| Steps | 1 and 2 | 3 |
| Where the online logic lives | inside `OnlineBadge` **and** inside `SaveButton` (copied) | only in `use-online-status.ts` |
| `OnlineBadge.tsx` | state + effect + `return <span>` | `useOnlineStatus()` + `return <span>` |
| `SaveButton.tsx` | state + effect (copy) + `return <button>` | `useOnlineStatus()` + `return <button>` |
| `use-online-status.ts` | not used yet | state + effect + `return isOnline` (no JSX) |

Why both? Version A is how you'd normally start: logic lives in the component that needs it. You only extract a hook once a second component needs the same logic. Version A shows you the problem, and version B is the fix. Only the state + effect part moves into the hook. Each component keeps its own `return` with JSX.

**How it works (read this first)**

- **The problem.** Some values live in the browser and change by themselves: scroll position, window size, internet connection. A component that wants one of them needs three things: a `useState` to hold it, a `useEffect` that starts listening to the browser, and a cleanup that stops listening (lesson 07). If two components need the same value, you write those three things twice.
- **A custom hook is cut and paste.** Cut the `useState` + `useEffect` lines out of the component, paste them into a function whose name starts with `use`, and `return` the value at the end. The component now calls your function, the same way it calls `useState`.
- **The flow, every time:**

| Moment | What happens |
|---|---|
| Component appears | state starts with its default value |
| Right after that | the effect runs and starts listening to the browser |
| The browser announces a change | your listener calls `setState`, the component re-renders with the new value |
| Component disappears | the cleanup runs and stops listening |

- **Analogy.** A school announces "the power is out!" through a speaker. Without a custom hook, every class writes its own rules for "how to listen to the speaker". With a custom hook, the teacher writes one SOP sheet, and every class just says "follow the SOP".

**Built-in pieces you'll use:**
- `navigator.onLine`: the browser tells you `true` / `false` right now.
- The `online` / `offline` window events: the browser announces when the connection changes. You listen with `window.addEventListener`, and stop listening in the effect's cleanup (lesson 07).
- A custom hook: just a function whose name starts with `use` and that calls other hooks inside. No special import.
- DevTools → Network → "Offline": a switch to fake being offline.

Docs: https://react.dev/learn/reusing-logic-with-custom-hooks

### Worked example: `useScrollY` (read it first, or try it)

**Scenario:** a long page shows "You scrolled N px" in the corner, and a "Back to top" button that only appears after you scroll down 300px. Both need the scroll position.

To try it: put these files in `src/app/13-custom-hooks/example/`, open `/13-custom-hooks/example`, and scroll.

**Version A: without a custom hook (the logic is written twice)**

```tsx
// example/ScrollLabel.tsx
"use client";

import { useState, useEffect } from "react";

export default function ScrollLabel() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <p className="fixed bottom-4 left-4">You scrolled {scrollY}px</p>;
}
```

```tsx
// example/BackToTop.tsx
"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [scrollY, setScrollY] = useState(0); // same lines again...

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (scrollY < 300) return null;

  return (
    <button
      className="fixed bottom-4 right-4"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      Back to top
    </button>
  );
}
```

```tsx
// example/page.tsx
import ScrollLabel from "./ScrollLabel";
import BackToTop from "./BackToTop";

export default function ScrollExample() {
  return (
    <div className="h-[300vh] p-8">
      <h1>Scroll down</h1>
      <ScrollLabel />
      <BackToTop />
    </div>
  );
}
```

**Version B: with a custom hook (the logic lives in one place)**

```ts
// example/use-scroll-y.ts
import { useState, useEffect } from "react";

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY; // the component only needs the number
}
```

```tsx
// example/ScrollLabel.tsx
"use client";

import { useScrollY } from "./use-scroll-y";

export default function ScrollLabel() {
  const scrollY = useScrollY();
  return <p className="fixed bottom-4 left-4">You scrolled {scrollY}px</p>;
}
```

`BackToTop.tsx` changes the same way: delete its `useState` + `useEffect`, add `const scrollY = useScrollY();`.

The hook file has no `"use client"`: it runs inside the components that call it, and those are already client components.

### From the example to your challenge

| Example | Your challenge |
|---|---|
| `scrollY`, starts at `0` | `isOnline`, starts at `true` |
| 1 event: `"scroll"` | 2 events: `"online"` and `"offline"` |
| 1 handler reads `window.scrollY` | 2 handlers: one sets `true`, one sets `false` |
| 1 `addEventListener` + 1 `removeEventListener` | 2 of each |
| `ScrollLabel` + `BackToTop` | `OnlineBadge` + `SaveButton` |
| `BackToTop` hides itself with `return null` | `SaveButton` stays visible but gets `disabled` |
| `use-scroll-y.ts` → `useScrollY()` | `use-online-status.ts` → `useOnlineStatus()` |

### Challenge

**Version A: without a custom hook** (`use-online-status.ts` stays empty)

- [x] 1. Make the badge: a client component that shows "Online" or "Offline" and updates by itself when the connection changes.
  - Done when: flipping DevTools Network to "Offline" changes the badge without reloading.
- [x] 2. Make a "Save" button in a second component that is disabled while offline. Copy the same online logic into it on purpose.
  - Done when: the button greys out when offline. (Notice you wrote the same code twice.)

**Version B: with a custom hook**

- [x] 3. Move that logic into your own hook in its own file, and use the hook in both components instead.
  - Done when: both still work, and the online logic exists in one place only.
- [x] 4. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. The badge and the button both call your hook. Do they share one `isOnline` value, or does each have its own? (The docs have a one-line answer.)
>
> Q2. Why must a custom hook's name start with `use`?

<details>
<summary>Hints (open only when stuck)</summary>

**Step 1**
- Copy the version A `ScrollLabel` and change it using the table: rename the state, start with `true`, and use two handlers instead of one.
- Start with `true`, not `navigator.onLine`: the component also renders on the server, where `navigator` doesn't exist.

**Step 3**
- Do exactly what version B does: cut the `useState` + `useEffect` into `use-online-status.ts`, `return isOnline;`, then `const isOnline = useOnlineStatus();` in each component.

</details>

---

## 14 — Metadata and share previews

**What you're building:** proper tab titles and descriptions for your lesson pages, and a share image for the site. This is what Google shows in search results, and what WhatsApp shows when someone shares your link. For agency clients, it's not optional.

**The story:** your root layout already has a title template (`%s | Bladjar`), so each page only has to fill in its own part. Then you'll make an "OG image": the picture that shows up in a link preview. Next.js can draw it for you from JSX.

**How it works (read this first)**

- **The problem.** Every page has a hidden `<head>` part that people don't see on the page, but Google, the browser tab and WhatsApp read it: `<title>`, `<meta name="description">`, `<meta property="og:image">`. In plain HTML you write those tags by hand on every page.
- **In Next.js you don't write the tags.** You export an object called `metadata` from a `page.tsx` or `layout.tsx`, and Next.js writes the tags for you.
- **Inheritance.** Metadata flows down the folders, like layouts. A page's metadata is merged with its layouts' metadata, and the closest one wins. That's why the root layout's template `%s | Bladjar` wraps every page's title.
- **Three tools, pick by situation:**

| Situation | Use |
|---|---|
| The title is always the same (`"Recipes"`) | `export const metadata = { ... }` |
| The title depends on the URL or data (`/recipes/pancake` → `"Pancake"`) | `export async function generateMetadata()` |
| You want a share image | a file named `opengraph-image.tsx` in that folder |

- **Analogy.** A book in a library. The page content is what's inside the book. Metadata is the cover and the label on the spine: the title, a one-line summary, a cover picture. The librarian (Google) and your friends (WhatsApp) only see the cover before they open it.

**Built-in pieces you'll use:**
- `metadata`: an object you export from a `page.tsx` or `layout.tsx` (server components only). Next.js turns it into `<title>` and `<meta>` tags.
- `title.template`: already in your root layout. A page's title gets slotted into `%s`.
- `generateMetadata`: the function version, for titles that depend on data (like a slug). You already used it in lesson 01.
- `opengraph-image.tsx`: a special file name. Next.js turns what it returns into the share image and adds the `og:image` tag for you.
- `ImageResponse`: from `next/og`. It draws JSX into an image. Only flexbox and simple CSS work inside it.

Docs: https://nextjs.org/docs/app/getting-started/metadata-and-og-images

### Worked example: a small recipe section

**Scenario:** a recipe section with a list page (`/14-metadata/example`), one page per recipe (`/14-metadata/example/pancake`), and a share image for the whole section.

To try it: put these files in `src/app/14-metadata/example/`, open the pages, and look at the browser tab and DevTools → Elements → `<head>`.

**1. Fixed title + description** (`metadata` object)

```tsx
// example/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recipes",
  description: "Simple recipes you can cook in 15 minutes.",
};

export default function RecipesPage() {
  return (
    <div className="p-8">
      <h1>Recipes</h1>
      <Link href="/14-metadata/example/pancake">Pancake</Link>
      <Link href="/14-metadata/example/omelette">Omelette</Link>
    </div>
  );
}
```

Result: the tab shows **"Recipes | Bladjar"**. You wrote `"Recipes"`, and the root layout's template added `" | Bladjar"`.

**2. Title from the URL** (`generateMetadata`)

```tsx
// example/[slug]/page.tsx
import type { Metadata } from "next";

const recipes = [
  { slug: "pancake", name: "Pancake", summary: "Fluffy pancakes in 10 minutes." },
  { slug: "omelette", name: "Omelette", summary: "Three eggs, one pan." },
];

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);

  return recipe
    ? { title: `Recipe: ${recipe.name}`, description: recipe.summary }
    : { title: "Recipe not found" };
}

export default async function RecipePage({ params }: Props) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);

  return <h1 className="p-8">{recipe?.name ?? "Not found"}</h1>;
}
```

Result: `/pancake` shows **"Recipe: Pancake | Bladjar"**, and `/omelette` shows **"Recipe: Omelette | Bladjar"**. One file, a different title per URL.

**3. Share image** (`opengraph-image.tsx`)

```tsx
// example/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Recipes";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f97316",
          color: "white",
          fontSize: 120,
          fontWeight: 700,
        }}
      >
        Recipes
      </div>
    ),
    size,
  );
}
```

Result: `<head>` now has `<meta property="og:image" content="...">`. Copy that URL into a new tab and you see an orange picture with "Recipes". Inside `ImageResponse`, use inline `style` with `display: "flex"`. Tailwind classes don't work there.

### From the example to your challenge

| Example | Your challenge |
|---|---|
| 1 page gets `metadata` | every lesson page gets `metadata` |
| title `"Recipes"` | title like `"Lesson 06 — useState"` |
| a `page.tsx` that is a server component | if a lesson's `page.tsx` has `'use client'`, put `metadata` in that lesson's `layout.tsx` instead |
| `generateMetadata` → `"Recipe: Pancake"` | lesson 01's `[slug]` → `"Lesson 01 — <post heading>"` |
| `opengraph-image.tsx` inside `example/` (that section only) | `opengraph-image.tsx` in `src/app/` (the whole site) |
| orange, text "Recipes" | your own color, text "Bladjar" + your site description as a second line |

### Challenge

- [x] 1. Give every lesson page its own title, like "Lesson 06 — useState".
  - Done when: each lesson's browser tab shows "Lesson NN — ... | Bladjar".
- [x] 2. Add a one-line description to each lesson page.
  - Done when: DevTools → Elements → `<head>` shows a `<meta name="description">` with your text.
- [x] 3. Change lesson 01's `[slug]` title so it reads "Lesson 01 — <post heading>".
  - Done when: two different slugs show two different tab titles, both starting with "Lesson 01 —".
- [x] 4. Make a share image for the whole site: big "Bladjar" text, with your site description as a smaller second line, on a colored background.
  - Done when: `<head>` has an `og:image` tag on every page, and opening that image URL shows your picture.
- [x] 5. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. Why can't `metadata` be exported from a `'use client'` file?
>
> Q2. Static `metadata` vs `generateMetadata`: when do you need the function version?
>
> Q3. What is `og:image` for, and who reads it?

<details>
<summary>Hints (open only when stuck)</summary>

**Step 1**
- Same as example part 1, without the `description` for now.
- Error "You are attempting to export metadata from a component marked with use client"? Move the `metadata` export into that lesson's `layout.tsx`.

**Step 3**
- Lesson 01 already has a `generateMetadata`. Only the `title` string changes, like `` `Recipe: ${recipe.name}` `` in example part 2.

**Step 4**
- Same as example part 3, but the file goes in `src/app/opengraph-image.tsx`.
- Two lines of text: the outer `div` gets `flexDirection: "column"`, with two child `div`s inside, each with its own `fontSize`.

</details>

---

## 15 — Route Handlers: your own mini API

**What you're building:** your own API, `/api/todos`, that sends the todo list as JSON and accepts new todos. Then a page that talks to it from the browser. Later, the same kind of API is what a Flutter app would call.

**The story:** in lesson 05, the form talked to the server through a server action, which only works inside your Next.js app. An API endpoint is a public door with an address: anything that can make an HTTP request (a browser, Postman, a phone app) can knock on it. You'll build the door, then knock on it from a page.

**How it works (read this first)**

- **The problem.** Pages return HTML, made for humans to look at. A phone app or another program doesn't want HTML: it wants plain data (JSON), and it wants to send data back.
- **A `route.ts` file is a page that returns data instead of HTML.** The folder still decides the URL (`src/app/api/likes/route.ts` → `/api/likes`). Inside, you export functions named after HTTP methods: `GET` runs when someone reads, `POST` runs when someone sends.
- **The flow of one request:**

| Step | Who | What |
|---|---|---|
| 1 | Client (browser, Postman, phone app) | sends `POST /api/likes` with a body `{ "amount": 1 }` |
| 2 | Next.js | sees `POST`, calls your `POST` function |
| 3 | Your `POST` | reads the body, checks it, updates the data |
| 4 | Your `POST` | answers with JSON and a status code (200 = ok, 400 = your request is wrong) |
| 5 | Client | reads the status and the JSON, shows the result |

- **Analogy.** A restaurant takeaway window. `GET` = "what's on the menu?", and they hand you the menu. `POST` = "I'd like to order this", and they take your order. If your order form is empty, they hand it back: "you didn't write anything" (status 400). The window doesn't care who's ordering: a person, a delivery driver, or an app.

**Built-in pieces you'll use:**
- `route.ts`: a special file name. Instead of a page, it answers HTTP requests at that folder's URL. A folder can have a `page.tsx` or a `route.ts`, not both.
- `GET` / `POST`: you export functions with these names, and Next.js calls the matching one.
- `Response.json(...)`: sends data back as JSON. You can also set a status code, like 400 for "bad request".
- `request.json()`: reads the JSON body that a POST sent.
- `connection()`: from lesson 10. It makes a `GET` run fresh on every request instead of being pre-built once.
- `fetch` in the browser: the same `fetch` as lesson 04, but called from a client component.

Docs: https://nextjs.org/docs/app/getting-started/route-handlers

### Worked example: a like counter API

**Scenario:** a post has a like counter. The API stores one number. `GET` returns it, and `POST` adds an amount to it but refuses amounts below 1. A button on a page uses the API.

To try it: create the files below, open `http://localhost:3000/api/likes` in the browser, then open `/15-route-handlers/example` and click the buttons.

**1. The API**

```ts
// src/app/api/likes/route.ts
import { connection } from "next/server";

let likes = 0; // lives in server memory, resets when the dev server restarts

export async function GET() {
  await connection(); // answer fresh every time, don't pre-build
  return Response.json({ likes });
}

export async function POST(request: Request) {
  const body = await request.json(); // read what the client sent
  const amount = Number(body.amount);

  if (!amount || amount < 1) {
    return Response.json(
      { error: "amount must be 1 or more" },
      { status: 400 },
    );
  }

  likes += amount;
  return Response.json({ likes });
}
```

Test with Postman: method `POST`, URL `http://localhost:3000/api/likes`, Body → raw → JSON → `{ "amount": 2 }`. You get `{ "likes": 2 }`. Then send `{ "amount": 0 }`. You get status **400** and the error message.

**2. A page that uses the API**

```tsx
// src/app/15-route-handlers/example/LikeButton.tsx
"use client";

import { useState, useEffect } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [error, setError] = useState("");

  // load the current number once, when the component appears
  useEffect(() => {
    fetch("/api/likes")
      .then((res) => res.json())
      .then((data) => setLikes(data.likes));
  }, []);

  async function sendLike(amount: number) {
    const res = await fetch("/api/likes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error); // 400: show the API's message
      return;
    }

    setError("");
    setLikes(data.likes); // 200: show the new number
  }

  return (
    <div className="flex flex-col gap-2 p-8">
      <p>Likes: {likes}</p>
      <button onClick={() => sendLike(1)}>+1</button>
      <button onClick={() => sendLike(0)}>+0 (should fail)</button>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
```

```tsx
// src/app/15-route-handlers/example/page.tsx
import LikeButton from "./LikeButton";

export default function LikesExample() {
  return <LikeButton />;
}
```

Notice `route.ts` lives in `src/app/api/likes/`, not next to the page. The page and the API are two different doors.

### From the example to your challenge

| Example | Your challenge |
|---|---|
| `src/app/api/likes/route.ts` | `src/app/api/todos/route.ts` |
| data: one number, `let likes = 0` | data: an array, like lesson 05's todo list |
| `GET` returns `{ likes }` | `GET` returns the todo list |
| `POST` body `{ "amount": 1 }` | `POST` body `{ "text": "buy milk" }` |
| `POST` adds to the number | `POST` pushes a new todo, returns the updated list |
| rejects `amount < 1` | rejects empty text (also only spaces: use `.trim()`) |
| page: two buttons with fixed amounts | page: an `<input>` + "Add" button that sends what you typed |
| shows a number | shows a list (`.map`) |

### Challenge

- [x] 1. Make `GET /api/todos`. It returns a todo list (keep it in an array in the same file, like lesson 05).
  - Done when: opening `http://localhost:3000/api/todos` in the browser shows JSON.
- [x] 2. Make `POST /api/todos`. It reads a todo text from the request body, adds it to the list, and sends back the updated list. Test it with Postman, then open the GET URL again.
  - Done when: after a POST in Postman, the GET URL shows the new todo.
- [x] 3. Reject empty todos. A POST with empty text (or only spaces) gets a 400 status and an error message instead of being added.
  - Done when: Postman shows status 400 and your message for an empty text.
- [x] 4. Make the lesson 15 page talk to your API. A client component loads the list from `GET /api/todos` when it appears, and has an input + "Add" button that POSTs to your API, then shows the new list. If the API answers 400, show its error message.
  - Done when: adding a todo from the page works, and an empty one shows your error.
- [x] 5. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. Lesson 05's server action vs this API: both add a todo. When would you pick each one?
>
> Q2. Why can't `route.ts` and `page.tsx` be in the same folder?
>
> Q3. Why does the `GET` handler need `connection()` here?

<details>
<summary>Hints (open only when stuck)</summary>

**Step 1**
- Copy example part 1's `GET` and swap `likes` for your array.

**Step 2**
- Same shape as the example's `POST`, but read `body.text` and `push` a new todo instead of `likes += amount`.

**Step 3**
- `if (!text || text.trim() === "")` → return the 400, the same way the example does.

**Step 4**
- Copy `LikeButton`'s structure: `useEffect` to load, an `async` function to POST, `res.ok` to tell 200 from 400.
- The input is a controlled input (lesson 06): a `useState` for the text, then send `{ text }` instead of `{ amount }`.

</details>

---

## NOTES.md template

```md
# Lesson NN — Name

- Learned:
- Tried → saw:
- Error → fix:
- Quiz: (skip if the lesson has none)
- Docs:
```

## Commit (Git Bash, from the Lessons folder)

```bash
git add next-lesson
git commit -m "next: 01 layouts and pages"
```
