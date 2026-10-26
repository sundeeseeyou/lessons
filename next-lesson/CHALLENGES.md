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
- [ ] 6. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. Why did the `let show` version do nothing? (The docs give two reasons.)
>
> Q2. In step 5, why didn't the list update on "Add"? And why did it suddenly update when you typed?

---

## 07 — useEffect and useRef (client hooks 2)

Docs:
- https://react.dev/learn/synchronizing-with-effects
- https://react.dev/learn/manipulating-the-dom-with-refs

- [ ] 1. Create `07-effect-and-ref/focus-input.tsx`: an input + a "Focus" button. Use `useRef<HTMLInputElement>(null)`, put `ref={inputRef}` on the input, and call `inputRef.current?.focus()` on click. Render it in `07-effect-and-ref/page.tsx`.
  - Done when: clicking the button puts the cursor in the input.
  - Hint: `?.` is there because `current` is `null` until React attaches the input.
- [ ] 2. Create `07-effect-and-ref/title-counter.tsx`: a counter button with `useState`, plus ``useEffect(() => { document.title = `Clicked ${count} times` }, [count])``.
  - Done when: the browser tab title changes when you click.
- [ ] 3. Add `console.log("effect ran")` inside that effect. Try 3 versions of the dependency array, clicking a few times each: no array, `[]`, `[count]`. End with `[count]`.
  - Hint: seeing the log twice on page load is normal in dev (Strict Mode).
- [ ] 4. Create `07-effect-and-ref/timer.tsx`: a `seconds` state that goes up every second. In `useEffect` with `[]`: `const id = setInterval(() => setSeconds((s) => s + 1), 1000)` and `return () => clearInterval(id)`.
  - Done when: it counts +1 every second.
  - Hint: use `(s) => s + 1`, not `seconds + 1`. With `[]`, the effect only ever sees the first value of `seconds`.
- [ ] 5. Delete the `return () => clearInterval(id)` line and reload the page. Watch the speed. Put the line back.
- [ ] 6. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. When does the effect run with no array, with `[]`, and with `[count]`?
>
> Q2. In step 5, why did the timer speed up without the cleanup? What does the cleanup function do?

---

## 08 — Search Params and useRouter

Docs:
- https://nextjs.org/docs/app/api-reference/functions/use-search-params
- https://nextjs.org/docs/app/api-reference/functions/use-router
- https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional

- [ ] 1. Create `08-search-params/sort-buttons.tsx` (`'use client'`) with two buttons, "A–Z" and "Z–A". On click: `router.push(pathname + "?sort=asc")` (or `desc`). Get `router` from `useRouter()` and `pathname` from `usePathname()`. Render it in `08-search-params/page.tsx`.
  - Done when: clicking changes the URL.
- [ ] 2. Create `08-search-params/current-sort.tsx` (`'use client'`) that reads `useSearchParams().get("sort")` and shows `Sort: asc` (or `Sort: none`). In the page, wrap `<CurrentSort />` in `<Suspense>`.
  - Done when: the text follows the URL when you click.
- [ ] 3. Create `08-search-params/post-list.tsx`: an `async` component that gets the page's `searchParams` as a prop, awaits it, fetches `https://api.vercel.app/blog`, and shows 10 titles sorted by `sort`.
  - In the page: `export default function Page(props: PageProps<"/08-search-params">)` and render `<Suspense fallback={<p>Loading...</p>}><PostList searchParams={props.searchParams} /></Suspense>`.
  - Done when: "A–Z" and "Z–A" reorder the list.
  - Hint: type the prop like the docs do: `{ searchParams }: Pick<PageProps<"/08-search-params">, "searchParams">`.
  - Hint: sort a copy: `[...posts].sort((a, b) => a.title.localeCompare(b.title))`. Use `.reverse()` for Z–A.
- [ ] 4. Click A–Z, Z–A, A–Z, then press the browser's Back button a few times. Then change `router.push` to `router.replace` and do it again.
- [ ] 5. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. `useSearchParams()` vs the page's `searchParams` prop: which one works in a Server Component, and which one in a Client Component?
>
> Q2. In step 4, what changed about the Back button after you switched from `push` to `replace`?
>
> Q3. Why do the docs recommend wrapping a component that uses `useSearchParams` in `<Suspense>`?

---

## 09 — Error Handling

Docs: https://nextjs.org/docs/app/getting-started/error-handling

- [ ] 1. Create `09-error-handling/page.tsx` with links to `post`, `crash`, and `form` (pages you'll make below). Then create `src/app/not-found.tsx` (the root one) and visit `/does-not-exist`.
  - Done when: `/does-not-exist` shows your own 404.
- [ ] 2. Create `09-error-handling/post/page.tsx`: import `posts` from `@/data/post`, find the post whose `heading` is `"nope"`, and call `notFound()` (from `next/navigation`) if there's none. Add `09-error-handling/post/not-found.tsx` with different text from the root one.
  - Done when: `/09-error-handling/post` shows the lesson's 404, not the root one. Then change `"nope"` to `"hello"` and the post shows.
- [ ] 3. Create `09-error-handling/crash/bomb.tsx` (`'use client'`): an "Explode" button that sets `explode` to `true`, and `if (explode) throw new Error("Boom")` before the `return`. Render it in `crash/page.tsx`. Add `crash/error.tsx` (`'use client'`) that shows the message and a "Try again" button.
  - Done when: "Explode" shows your error UI, and "Try again" brings the bomb back.
  - Hint: the props are `{ error, retry }: { error: unknown; retry: () => void }`. It's `retry`, not `reset` (older tutorials use `reset`).
  - Hint: `error` is `unknown`. Show it with `error instanceof Error ? error.message : String(error)`.
  - Hint: in dev, Next.js shows its own red error overlay first. Close it to see your `error.tsx`.
- [ ] 4. In `bomb.tsx`, add a second button: `onClick={() => { throw new Error("Click boom") }}`. Click it.
- [ ] 5. Create `09-error-handling/form/actions.ts` (`'use server'`) with `saveName(prevState: { message: string }, formData: FormData)`. If the name is empty, return `{ message: "Name is required" }`, otherwise ``{ message: `Saved: ${name}` }``. Create `form/name-form.tsx` (`'use client'`) that uses `const [state, formAction, pending] = useActionState(saveName, { message: "" })`, puts `action={formAction}` on the form, shows `state.message`, and disables the button while `pending`. Render it in `form/page.tsx`.
  - Done when: an empty submit shows "Name is required", and a filled one shows "Saved: ...".
  - Hint: `useActionState` comes from `react`.
  - Hint: don't add `required` to the input, or the browser blocks the empty submit before it reaches your action.
  - Hint: with `useActionState`, the action gets `prevState` first and `formData` second.
- [ ] 6. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. In step 2, which `not-found.tsx` was shown, and why that one?
>
> Q2. In step 4, why didn't `error.tsx` catch the error from `onClick`?
>
> Q3. The docs split errors into "expected errors" and "uncaught exceptions". Which one was step 3, which one was step 5, and how is each handled?

---

## 10 — Caching

Docs:
- https://nextjs.org/docs/app/getting-started/caching
- https://nextjs.org/docs/app/api-reference/functions/cacheLife

- [ ] 1. In `10-caching/page.tsx`, make a server component `Now` that renders `new Date().toLocaleTimeString()`. Render it and open the page.
  - Done when: the dev overlay shows a "blocking-prerender-current-time" insight. Read its fix cards.
- [ ] 2. Fix it the first way: make `Now` `async`, add `await connection()` (from `next/server`) as its first line, and wrap `<Now />` in `<Suspense>`. Reload the page a few times.
  - Done when: the time changes on every reload, and the insight is gone.
- [ ] 3. Fix it the second way: make a component `CachedNow` with `'use cache'` and `cacheLife('minutes')` (from `next/cache`) at the top, showing the same time. Render it next to `<Now />`. Reload a few times within one minute.
  - Done when: `Now` changes on every reload, but `CachedNow` stays the same.
  - Hint: cached components must be `async`.
  - Hint: saving the file resets the cache in dev. Reload without editing.
- [ ] 4. Create `10-caching/data.ts` with `getPosts()`: `'use cache'`, `cacheLife('hours')`, fetch `https://api.vercel.app/blog`, and return `{ posts, fetchedAt: new Date().toLocaleTimeString() }`. Show `fetchedAt` and 5 titles in the page.
  - Done when: `fetchedAt` stays the same across reloads.
- [ ] 5. Write `NOTES.md` (with quiz answers) + commit.

**Quiz**

> Q1. `connection()` + `<Suspense>` vs `'use cache'`: who sees which time? (See "Random values and timestamps" in the docs.)
>
> Q2. What do `stale`, `revalidate`, and `expire` mean in `cacheLife('minutes')`? Which profile is used if you don't call `cacheLife` at all?
>
> Q3. Step 3 is "UI-level" caching and step 4 is "data-level" caching. When would you pick each one?

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
