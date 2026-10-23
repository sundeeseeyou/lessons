# Lesson 03 - Server and Client Components

## Experience:

- I think these lesson i am quite grasp the idea from the beginning, so nothings new
- reuse the useState
- Error if no use client when you use hooks useState, this is
  <!-- FIX: sentence is cut off after "this is". Finish it, e.g. "this is the error message:" -->

> The Error
> You're importing a module that depends on `useState` into a React Server Component module. This API is only available in Client Components. To fix, mark the file (or its parent) with the `"use client"` directive.

- Answer for No.1 and No.4 they print on terminal. The Page only print once, while counter 4x.
  <!-- CORRECTION (where):
       - "page" runs on the SERVER ONLY. If you also see it in the browser console, it has a grey "Prerender" (or "Server") badge:
         that's just Next.js copying the server log into the browser. The page code did not run in the browser.
       - "counter" runs in BOTH: on the server (to build the first HTML) and in the browser (no badge, Counter.tsx:6).
       - The count is not meaningful: in dev, React Strict Mode renders twice (the grey "counter" from installHook.js),
         and every click calls setCount → re-render → logs again. -->

- Answer for No. 5, the reason why it prints on terminal because console triggers the line in terminal
  <!-- CORRECTION (why): "No. 5" is actually step 4, and this doesn't explain the why yet.
       - Server component (page) = runs only on the server.
       - Client component (Counter) = runs twice: first on the server to make the HTML for the first load,
         then again in the browser to make the button clickable. That second run is called "hydration".
       That's why "counter" shows up in the terminal AND the browser, but "page" only in the terminal. -->

## Implementation:

- not so much, just like I said. I think im good in this.
- useState is used mostly when visitor need to interact with the web

## Blockers:

-

## References:

- https://nextjs.org/docs/app/getting-started/server-and-client-components#examples
- https://nextjs.org/docs/app/getting-started/server-and-client-components#examples
<!-- FIX: same link twice. Keep one, or replace with a link you actually used (e.g. the section that explains hydration). -->
