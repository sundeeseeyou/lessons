# Lesson 08 - Search Params and useRouter

## Experience:

- In a nutshell, learn how to sort data alphabetically using hooks like useSearchParams, useRouter, usePathname and others
- props can be use directly without mentioning "props", instead make it destructure
- PageProps typegen be used also in this lesson
- This class is hellish. Cant concentrate, too many new thing that i need to grasp, I am afraid i wont remember anything, but again implementation is the key. the more you code, the more you bode (well)
- function dalam router yaitu push dan replace. router.push let us to push a certain value to the address bar endpoint, with history recorded. While router.replace, almost do the same, but it's always clean (no history) idk
  <!-- CORRECTION: replace doesn't wipe the history. It overwrites only the CURRENT entry.
       Analogy: browser history = a stack of notebook pages.
       - push    = write on a NEW page. Back goes to the previous sort.
       - replace = erase the CURRENT page and write over it. Back skips the sort changes
                   and goes to the page you were on before (e.g. home). -->
- to sort list alphabetically , you can do it by doing sort() and localCompare, to make it backward, just add reverse() in the end of code
  <!-- FIX: it's localeCompare (with an "e"). And copy first: [...posts].sort(...), because .sort() changes the original array. -->

## Implementation:

- useSearchParams, useRouter and usePathname are all hooks in client side, to use them must declare "use client"
- I always thought props is always inside-out, turns out it's vice versa, you can use props to do outside-inside
  <!-- CLARIFY: props always flow ONE way: from parent down to child (page → PostList).
       Analogy: a parent hands a letter to a child. The child can read it, but can't hand a letter back up through props. -->
- Suspense be used for any component that might take time to load
  <!-- MORE PRECISE: Suspense wraps a component that has to WAIT for something before it can show:
       an async server component (await fetch / await searchParams), or a client component using useSearchParams. -->

## Blockers:

- this class idea is very benefitting but it's just too fast, the new module being introduce

## Quiz Answers:

1. useSearchParams() is client side, while searchParams props work in server component as promise
2. I dont really see the differences?
   <!-- ANSWER: (your select still uses router.push, so you probably never tried replace)
        Test: open home, go to lesson 08, pick A-Z, Z-A, A-Z, then press Back.
        - push:    Back walks through A-Z → Z-A → A-Z → home. Every sort is a history page.
        - replace: Back goes straight to home. The sorts kept overwriting the same page. -->
3. Because useSearchParams is hooks that take time to load?
   <!-- CORRECTION: it's not about speed. When Next.js pre-builds the page (prerender), there is no URL yet,
        so it can't know ?sort. A component that reads the URL with useSearchParams has to wait for the browser.
        Suspense marks "this part waits, render the rest now".
        Analogy: a printed invitation with a blank "Dear ____". The card is printed in advance;
        only the blank gets filled in later. Without Suspense, the whole card waits. -->

## References:

- https://react.dev/learn/synchronizing-with-effects
- https://react.dev/learn/manipulating-the-dom-with-refs
- https://santrikoding.com/belajar-react-dasar-10-useeffect
<!-- FIX: these 3 links are from lesson 07. Lesson 08 links:
     https://nextjs.org/docs/app/api-reference/functions/use-search-params
     https://nextjs.org/docs/app/api-reference/functions/use-router
     https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional -->

          // <button>
          //   key={index}
          //   type="button"
          //   onClick={() => router.push(path + "?sort=" + x.value)}
          //   className={`bg-black px-6 text-white py-2 rounded-md hover:cursor-pointer hover:opacity-50`}
          // >
          //   {x.label}
          // </button>
