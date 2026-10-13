# TIL — Today I Learned (Next.js)

A running log of new things. Newest at the top.

---

## 2026-10-13 — `PageProps` / `LayoutProps` (route props helpers)

### What it is

Next.js generates global TypeScript types from your `app/` folders. No import needed.

| Type | Used in |
|---|---|
| `PageProps<"/route">` | `page.tsx` |
| `LayoutProps<"/route">` | `layout.tsx` |
| `RouteContext<"/route">` | `route.ts` (route handlers) |

The string inside `< >` is the route the file belongs to.

```tsx
// src/app/layout.tsx  (root = "/")
export default function RootLayout({ children }: LayoutProps<"/">) {}

// src/app/01-layouts-and-pages/[slug]/page.tsx
export default async function Page({ params }: PageProps<"/01-layouts-and-pages/[slug]">) {
  const { slug } = await params // params: Promise<{ slug: string }>
}
```

### Rules

- The names `PageProps`, `LayoutProps`, `RouteContext` are **fixed**. Next declares them, so you can't invent your own name.
- You can still alias one: `type LessonProps = PageProps<"/01-layouts-and-pages">`.
- The component's function name is free (`RootLayout`, `LessonOne`, anything).
- A typo in the route string is a TypeScript error, because only real routes are allowed.
- The types are generated into `.next/` when you run `pnpm dev`, `pnpm build`, or `next typegen`. If `LayoutProps` "is not found", run `pnpm dev` once.

### Before vs after

```tsx
// Next 13–14: manual, params was a plain object
type Props = { params: { slug: string } }

// Next 15: manual, params became a Promise
type Props = { params: Promise<{ slug: string }> }

// Next 15.5+: generated, always matches your folders
PageProps<"/blog/[slug]">
```

Why it's better: hand-written types go stale. If you rename `[slug]` to `[id]`, a manual type stays wrong without warning, but the generated type updates itself.

### Proof that it's new

1. **Release announcement: Next.js 15.5, published August 18, 2025**
   https://nextjs.org/blog/next-15-5#route-props-helpers
   > "Next.js automatically generates globally available `PageProps`, `LayoutProps`, and `RouteContext` types with full parameter typing and no imports required"

2. **Same release added `next typegen`**
   https://nextjs.org/blog/next-15-5#next-typegen
   Version history in the installed docs (`node_modules/next/dist/docs/01-app/03-api-reference/06-cli/next.md`):
   > `v15.5.0` | Add the `next typegen` command

3. **Current docs (Next 16.4), "Route Props Helpers" section**
   https://nextjs.org/docs/app/getting-started/layouts-and-pages#route-props-helpers
   > "`PageProps`, `LayoutProps` are global helpers — no imports required."

4. **The docs for this project's exact version** are also offline at
   `next-lesson/node_modules/next/dist/docs/` (this project uses Next `16.4.0`).
