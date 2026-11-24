# Next.js Roadmap

Every 15 lessons end with a **Capstone**: one small real project that uses only
what you learned so far. Finish the capstone before starting the next phase, so
nothing gets forgotten.

Levels are mixed on purpose: hard lessons sit between easier ones, so you get
quick wins between the tough challenges. Every lesson only needs the lessons
before it.

Levels: 🟢 basic · 🟡 intermediate · 🔴 advance

## What to do first

1. **Capstone 1** (below). You finished 00–15, so build it now.
2. Then start lesson 16.
3. Each lesson still follows `CHALLENGES.md`: steps → `NOTES.md` → commit.

Capstones live in their own folder, `Lessons/capstone/`. Each capstone is its
own Next.js project, and the steps are in `Lessons/capstone/CHALLENGES.md`.

```
Lessons/
├─ next-lesson/        ← lessons 00–45
└─ capstone/
   ├─ CHALLENGES.md    ← capstone steps
   ├─ 01-mini-shop/
   ├─ 02-blog/
   └─ 03-agency-starter/
```

Capstone rule: **look, close, type it yourself.** You may open old lessons,
docs, or ask. Don't paste whole files. When you reopen a lesson, write its
number in `NOTES.md`: that list shows what to review.

---

## Phase 1 — Next.js basics (00–15)

| #   | Level           | Topic                          | What you learn                                     | Done |
| --- | --------------- | ------------------------------ | -------------------------------------------------- | ---- |
| 00  | 🟢 basic        | Home menu                      | `<Link>` list                                      | [x]  |
| 01  | 🟢 basic        | Layouts and pages              | `layout.tsx`, `[slug]`, `await params`             | [x]  |
| 02  | 🟢 basic        | Linking and navigating         | `<Link>` vs `<a>`, `usePathname`                   | [x]  |
| 03  | 🟡 intermediate | Server and client components   | `"use client"`, where code runs                    | [x]  |
| 04  | 🟢 basic        | Fetching data                  | `await fetch` in a server component                | [x]  |
| 05  | 🟡 intermediate | Mutating data                  | Server actions, `revalidatePath`                   | [x]  |
| 06  | 🟢 basic        | useState                       | Controlled inputs, state                           | [x]  |
| 07  | 🟡 intermediate | useEffect and useRef           | Side effects, DOM refs                             | [x]  |
| 08  | 🟡 intermediate | Search params and useRouter    | `?q=` in the URL, `router.push`                    | [x]  |
| 09  | 🟡 intermediate | Error handling                 | `error.tsx`, `not-found.tsx`                       | [x]  |
| 10  | 🔴 advance      | Caching                        | Static vs dynamic, `connection()`                  | [x]  |
| 11  | 🟡 intermediate | useContext                     | Dark mode for the whole site                       | [x]  |
| 12  | 🔴 advance      | useReducer                     | Shopping cart actions                              | [x]  |
| 13  | 🟡 intermediate | Custom hooks                   | Online / offline badge                             | [x]  |
| 14  | 🟢 basic        | Metadata                       | `<title>`, share previews                          | [x]  |
| 15  | 🟡 intermediate | Route handlers                 | `route.ts`, GET / POST, status 400                 | [x]  |

### 🏁 Capstone 1 — Mini Shop

A small shop with no database. Products live in a TS array.

Folder: a new Next.js project `Lessons/capstone/01-mini-shop/`.

Must use: `[slug]` page, server component data, search params, `useReducer` +
`useContext` cart, dark mode, `error.tsx` / `not-found.tsx`, metadata, and a
route handler.

- [ ] 1. Product list page that reads from a `products` array (name, slug, price, image).
- [ ] 2. Product detail page `capstone-01/[slug]`. Unknown slug shows your `not-found`.
- [ ] 3. Search box that filters the list with `?q=` in the URL.
- [ ] 4. Cart (add, remove, change amount) with `useReducer`, shared with `useContext`. A cart badge in the header shows the total items.
- [ ] 5. Dark mode switch in the layout.
- [ ] 6. Each product page has its own `<title>` and share preview.
- [ ] 7. `GET /api/products` returns the products as JSON.
- [ ] 8. Write `NOTES.md`: what was hard, and which lesson you had to reopen + commit.

Full steps: `Lessons/capstone/CHALLENGES.md`.

---

## Phase 2 — Real app foundations (16–30)

| #   | Level           | Topic                       | What you learn                                                   | Done |
| --- | --------------- | --------------------------- | ---------------------------------------------------------------- | ---- |
| 16  | 🟢 basic        | Zod                         | Schema instead of `if (!text...)`, `safeParse`, `z.infer`        | [ ]  |
| 17  | 🟢 basic        | Environment variables       | `.env`, `.env.local`, `process.env`, never commit secrets        | [ ]  |
| 18  | 🟡 intermediate | Forms with server actions   | `useActionState`, Zod errors per field                           | [ ]  |
| 19  | 🟡 intermediate | Prisma setup                | SQLite, `schema.prisma`, migrate, `findMany`                     | [ ]  |
| 20  | 🟡 intermediate | Prisma CRUD                 | Create / update / delete from server actions                     | [ ]  |
| 21  | 🔴 advance      | Prisma relations            | User → Posts, `include`, and the SQL Prisma writes for you       | [ ]  |
| 22  | 🟢 basic        | Cookies                     | `cookies()` read / set / delete                                  | [ ]  |
| 23  | 🔴 advance      | Session vs JWT              | DB session vs signed token, make a JWT by hand with `jose`       | [ ]  |
| 24  | 🟡 intermediate | Auth library                | Better Auth (or Auth.js): sign up, log in, log out with Prisma   | [ ]  |
| 25  | 🟡 intermediate | Login with Google           | OAuth flow, Google client ID / secret                            | [ ]  |
| 26  | 🔴 advance      | Protecting routes           | `proxy.ts` (was `middleware.ts`), server checks, API 401         | [ ]  |
| 27  | 🟢 basic        | next-themes                 | `useTheme`, no flash on load. Compare with lesson 11             | [ ]  |
| 28  | 🟡 intermediate | Roles                       | Admin vs user, hide pages and block actions                      | [ ]  |
| 29  | 🟢 basic        | Zustand                     | Global store with no Provider. Compare with lessons 11–12        | [ ]  |
| 30  | 🔴 advance      | File upload                 | Image upload, size / type checks, save the file path in the DB   | [ ]  |

### 🏁 Capstone 2 — Blog with admin

A blog where only the admin can write. Real database, real login.

Folder: a new Next.js project `Lessons/capstone/02-blog/`.

- [ ] 1. Prisma models: `User`, `Post` (title, slug, content, cover image, published).
- [ ] 2. Login with Google. Your account is admin, everyone else is a normal user.
- [ ] 3. `/admin` is protected. Only admin can open it.
- [ ] 4. Admin can create, edit, delete posts. Forms are checked with Zod, errors show per field.
- [ ] 5. Cover image upload.
- [ ] 6. Public `/blog` list and `/blog/[slug]` page with metadata. Drafts are hidden.
- [ ] 7. Dark mode with next-themes.
- [ ] 8. Write `NOTES.md` + commit.

---

## Phase 3 — Agency toolkit (31–45)

| #   | Level           | Topic                     | What you learn                                             | Done |
| --- | --------------- | ------------------------- | ---------------------------------------------------------- | ---- |
| 31  | 🟢 basic        | shadcn/ui                 | Ready-made components on Tailwind, copy-in not install     | [ ]  |
| 32  | 🟡 intermediate | react-hook-form + Zod     | Big client forms, same schema on client and server         | [ ]  |
| 33  | 🟡 intermediate | next-intl setup           | Messages in `id.json` / `en.json`, `useTranslations`       | [ ]  |
| 34  | 🔴 advance      | next-intl routing         | `/id/...` and `/en/...`, language switcher                 | [ ]  |
| 35  | 🟢 basic        | SEO files                 | `sitemap.xml`, `robots.txt`, Open Graph image              | [ ]  |
| 36  | 🟡 intermediate | Pagination and search     | `skip` / `take`, search in Prisma, page in the URL         | [ ]  |
| 37  | 🟢 basic        | Sending email             | Contact form → email with Resend                           | [ ]  |
| 38  | 🔴 advance      | Rich text editor          | Tiptap, save as JSON, render safely                        | [ ]  |
| 39  | 🟢 basic        | `next/image`              | Sizes, lazy loading, remote images                         | [ ]  |
| 40  | 🔴 advance      | Caching DB data           | `"use cache"`, cache tags, update after a change           | [ ]  |
| 41  | 🟡 intermediate | Unit tests                | Vitest for Zod schemas and helpers                         | [ ]  |
| 42  | 🟡 intermediate | E2E tests                 | Playwright: log in, create a post                          | [ ]  |
| 43  | 🟢 basic        | Security basics           | Rate limit a form, security headers, never trust input     | [ ]  |
| 44  | 🔴 advance      | Postgres + deploy         | SQLite → Postgres, deploy to Vercel, env vars online       | [ ]  |
| 45  | 🟢 basic        | Logs and errors online    | Read deploy logs, catch errors in production               | [ ]  |

### 🏁 Capstone 3 — Agency starter (your boilerplate v1)

A mini CMS for a client company site. This becomes the start of your own
agency boilerplate.

Folder: a new Next.js project `Lessons/capstone/03-agency-starter/`.

- [ ] 1. Admin login (Google + email). Roles: admin, editor.
- [ ] 2. Admin edits pages and posts with the rich text editor.
- [ ] 3. Two languages (ID / EN) for every public page.
- [ ] 4. Contact form that sends an email, with rate limiting.
- [ ] 5. `sitemap.xml`, `robots.txt`, metadata on every page.
- [ ] 6. One Playwright test: admin logs in and publishes a post.
- [ ] 7. Deployed online with Postgres.
- [ ] 8. Write `README.md`: how to start a new client site from this project + commit.

---

## Optional (pick after Phase 3)

| Topic              | What you learn                                         | Done |
| ------------------ | ------------------------------------------------------ | ---- |
| Drizzle ORM        | Same as Prisma, but closer to SQL                      | [ ]  |
| Payments           | Midtrans or Stripe checkout, webhooks                  | [ ]  |
| TanStack Query     | Client-side fetching with cache and refetch            | [ ]  |
| Realtime           | WebSockets or server-sent events, live updates         | [ ]  |
| PUT / PATCH / DELETE API | Full REST API with route handlers, bearer tokens | [ ]  |
