# Next.js Challenges (00–10)

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

Docs: https://nextjs.org/docs/app/getting-started/error-handling

- [ ] 1. Make the lesson 09 page with links to three sub-pages: `post`, `crash`, and `form`. Also make your own 404 page for the whole site.
  - Done when: opening `/does-not-exist` shows your own 404.
- [ ] 2. Make the `post` page. It looks for a post with the heading `"nope"` in your local post data (`src/data/post.ts`). If there's no such post, it shows a "not found" page that belongs to this lesson, with different text from the site's 404.
  - Done when: `/09-error-handling/post` shows the lesson's 404, not the site's. Then change `"nope"` to `"hello"` and the post shows.
- [ ] 3. Make the `crash` page with an "Explode" button. Clicking it makes the component crash. Instead of a broken page, the user sees a friendly error screen with the error message and a "Try again" button that brings the "Explode" button back.
  - Done when: "Explode" shows your error screen, and "Try again" brings the button back.
- [ ] 4. On the `crash` page, add a second button that throws an error from inside its click handler. Click it and watch what happens (and what doesn't).
- [ ] 5. Make the `form` page: a form with a name input. The check happens on the server. Submitting it empty shows "Name is required". Submitting a name shows "Saved: <name>". The submit button is disabled while it's saving.
  - Done when: an empty submit shows "Name is required", and a filled one shows "Saved: ...".
- [ ] 6. Write `NOTES.md` (with quiz answers) + commit.

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

Docs:
- https://nextjs.org/docs/app/getting-started/caching
- https://nextjs.org/docs/app/api-reference/functions/cacheLife

- [ ] 1. On the lesson 10 page, show the current time, rendered on the server. Open the page.
  - Done when: the dev overlay shows a "blocking-prerender-current-time" insight. Read its fix cards.
- [ ] 2. Fix it so the time is fresh on every reload.
  - Done when: the time changes on every reload, and the insight is gone.
- [ ] 3. Add a second clock next to it that is cached for a few minutes.
  - Done when: the first clock changes on every reload, but the second one stays the same (reload a few times within one minute).
- [ ] 4. Make a data function that fetches the blog posts and is cached for hours. It also returns the time it actually fetched. Show that time and 5 titles on the page.
  - Done when: the fetched time stays the same across reloads.
- [ ] 5. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. The fresh clock vs the cached clock: who sees which time? (See "Random values and timestamps" in the docs.)
>
> Q2. What do `stale`, `revalidate`, and `expire` mean in `cacheLife('minutes')`? Which profile is used if you don't call `cacheLife` at all?
>
> Q3. Step 3 is "UI-level" caching and step 4 is "data-level" caching. When would you pick each one?

<details>
<summary>Hints (open only when stuck)</summary>

**Step 1**
- `new Date().toLocaleTimeString()` inside a server component.

**Step 2**
- Make the clock component `async` and call `await connection()` (from `next/server`) as its first line.
- Wrap the clock in `<Suspense>` in the page.

**Step 3**
- A second clock component with `'use cache'` and `cacheLife('minutes')` (from `next/cache`) at the top of its body.
- Cached components must be `async`.
- Saving the file resets the cache in dev. Reload without editing.

**Step 4**
- A `data.ts` with `getPosts()`: `'use cache'`, `cacheLife('hours')`, fetch, and `return { posts, fetchedAt: new Date().toLocaleTimeString() }`.

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
