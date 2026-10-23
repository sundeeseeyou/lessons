# Lesson 02 — Linking and Navigating

## Experience:

- Studied about the use of usePathname() hooks.
- Studied about UX to highlight an active link
- Learned about the difference between Next Link with Anchor `<a>`
  - To answer Question 3, the reason why Link keeps the input text showing because it's an SSR process and heavy caching by NEXT.js (?) the Anchor `<a>` will by default open the link by loading the page, even though it is on the same page (need reload to work)
    <!-- CORRECTION: it's not SSR or caching.
         <Link> = client-side navigation. Next.js only swaps the page part; the layout is NOT re-rendered, so the input (which lives in the layout) keeps its text.
         <a> = the browser does a full page reload. Everything is rebuilt from zero, layout included, so the input text is gone.
         Short version: with <Link> the layout stays alive, with <a> it gets destroyed. -->
- I also just realize that you can use login on tailwind / css inside className. To show the page URL that active you can use usePathname along with if condition literals
  <!-- TYPO: "login" → "logic". "if condition literals" is called a ternary operator: condition ? a : b -->

```
<Link key={item.href} href={item.href} className={pathname === item.href ? "font-bold" : ""}>Text </Link>
```

## Implementation:

To activate hooks usePathname() you have to import using this
`import { usePathname } from "next/navigation" `

Beside that, this hooks is for client side rendering, so the use of `use client` is necessary.

## Blockers:

The use of usePathname should not located in Layout.tsx, so I need to improvise to create component first under Breadcrumbs.tsx and later imported to Layout.tsx, so not directly usePathname there because it's client side

<!-- CORRECTION: usePathname CAN be used directly in layout.tsx, as long as that file has "use client" at the top.
     Splitting it into its own component (what you did) is also correct, and cleaner: the layout stays a server component and only the links ship to the browser.
     Suggested rewrite: "It can go straight in layout.tsx with 'use client', but I moved it into its own component so the layout stays a server component." -->

## References:

https://nextjs.org/docs/app/getting-started/linking-and-navigating
