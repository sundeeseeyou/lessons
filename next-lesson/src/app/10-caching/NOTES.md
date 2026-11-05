# Lesson 10- Caching

## Experience:

- Caching itu semacam ingatan yang dimiliki sebuah sistem / komputer
- Dengan caching, you dont need to reload the page from the begining every single time
- This make the load faster
- Nextjs well known for its heavily caching system
- Cache can be configure using cacheLife function, that can be set minutely, hourly, dately etc

## Implementation:

- To use caching, you can initiate by doing `import {cacheLife} from "next/cache`

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
