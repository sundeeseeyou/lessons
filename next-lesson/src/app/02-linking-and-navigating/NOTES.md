# Lesson 02 — Linking and Navigating

## Experience:

- Studied about the use of usePathname() hooks.
- Studied about UX to highlight an active link
- Learned about the difference between Next Link with Anchor `<a>`
  - To answer Question 3, the reason why Link keeps the input text showing because it's an SSR process and heavy caching by NEXT.js (?) the Anchor `<a>` will by default open the link by loading the page, even though it is on the same page (need reload to work)
- I also just realize that you can use login on tailwind / css inside className. To show the page URL that active you can use usePathname along with if condition literals

```
<Link key={item.href} href={item.href} className={pathname === item.href ? "font-bold" : ""}>Text </Link>
```

## Implementation:

To activate hooks usePathname() you have to import using this
`import { usePathname } from "next/navigation" `

Beside that, this hooks is for client side rendering, so the use of `use client` is necessary.

## Blockers:

The use of usePathname should not located in Layout.tsx, so I need to improvise to create component first under Breadcrumbs.tsx and later imported to Layout.tsx, so not directly usePathname there because it's client side

## References:

https://nextjs.org/docs/app/getting-started/linking-and-navigating
