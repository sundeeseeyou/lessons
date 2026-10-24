# Next.js Challenges (00–05)

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
- [ ] 5. Write `NOTES.md` (with quiz answer) + commit.

**Quiz**

> Q1. In step 4, without `revalidatePath`, what happened after you added a todo?

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
