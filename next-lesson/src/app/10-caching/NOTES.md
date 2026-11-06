# Lesson 10- Caching

## Experience:

- Caching itu semacam ingatan yang dimiliki sebuah sistem / komputer
- Dengan caching, you dont need to reload the page from the begining every single time
  <!-- CLARIFY: the browser still reloads. What gets skipped is the SERVER's work.
       Without cache: on every visit the server runs the function again (fetch again, render again).
       With cache: the server keeps the result and hands the same one to the next visitor.
       Proof from your own page: "Fetched at" stays the same on reload, so the fetch did not run again. -->
  <!-- TYPO: begining -> beginning. -->
- This make the load faster
- Nextjs well known for its heavily caching system
- Cache can be configure using cacheLife function, that can be set minutely, hourly, dately etc
  <!-- FIX: the preset names are 'seconds', 'minutes', 'hours', 'days', 'weeks', 'max' (plus 'default'). There is no "dately". -->

## Implementation:

- To use caching, you can initiate by doing `import {cacheLife} from "next/cache`
  <!-- FIX: importing cacheLife does not turn caching on. The switch is the directive "use cache",
       written as the FIRST line inside an async function or component.
       cacheLife("minutes") comes right after it and only answers "for how long?".
       No "use cache" = no caching, even with cacheLife imported.
       (The snippet is also missing its closing quote: "next/cache".) -->
- Caching good for landing pages or companyu profile where the changes rarely happen, if the changes dynamically change, better to not use it
  <!-- ADD: you choose per PART, not per page. Your lesson 10 page proves it: one page holds a fresh part
       (FreshClock) and cached parts (CachedClock, getPost) at the same time.
       Real example: a shop page caches the product description but keeps the stock count fresh. -->
  <!-- TYPO: companyu -> company. -->
  <!-- MISSING: half of this lesson is the opposite of caching. Write down what you did in FreshClock:
       `await connection()` (from "next/server") = "don't build this in advance, build it on every visit".
       The page wraps it in <Suspense> so the rest of the page can still be built in advance. -->

## Blockers:

- I dont really understand the different between data caching and component caching?
  <!-- ANSWER: same "use cache", but a different thing gets remembered. Analogy: a warung.
       - Data caching (your getPost in data.ts) = cooked RICE kept in the rice cooker.
         Rice is an ingredient. Any dish can take from the same cooker: nasi goreng, nasi uduk, ...
         In code: any component on any page can call getPost() and gets the same remembered posts.
         One shows 5 titles, another could show all of them. The fetch still ran only once.
       - Component caching (your CachedClock) = a finished, plated DISH kept under the glass.
         Ready to serve instantly, but it is only that one dish. Nobody can take the rice back out of it.
         In code: Next.js remembers the finished output of <CachedClock />. No other component can reuse the time inside it.
       Pick data caching when the same data is needed in more than one place.
       Pick component caching when one whole block looks the same for everybody and lives in one place (a footer, a blog post body). -->
  <!-- TYPO: "the different between" -> "the difference between". -->

## Quiz Answers:

1. Fresh clock will always sync with real time clock, so when you reload, while cached clock will not change when you reload it
   <!-- RIGHT idea. Two sharper points:
        1) The fresh clock is not "synced" and does not tick. It is the time at the moment the server handled YOUR request.
           It only changes when you reload.
        2) The question is about two people. Fresh: each person gets their own time (you 14:00:00, your friend 14:00:30).
           Cached: everybody gets the SAME time, the moment the cache was filled (both see 14:00:00).
           The cache is shared between all visitors, it is not one cache per person. -->
2.
   <!-- HELP (then write your own answer on the line above). cacheLife("minutes") = stale 5 min, revalidate 1 min, expire 1 hour.
        Analogy: a warung with one pot of soup.
        - revalidate (1 min): the pot is older than this -> the next customer STILL gets soup from the old pot right away,
          and the cook starts a new pot in the background. The customer after that gets the new one. Nobody waits.
        - expire (1 hour): nobody came for this long -> the old pot is thrown away. The next customer has to WAIT for a new pot.
        - stale (5 min): this one is on the customer's side (the browser). You took a portion home. For 5 minutes you eat
          from your takeaway and don't go back to the warung at all (no request to the server when you navigate to the page again).
        No cacheLife at all = the "default" preset: stale 5 min, revalidate 15 min, expire never.
        Table: https://nextjs.org/docs/app/api-reference/functions/cacheLife#preset-cache-profiles -->
3.
   <!-- MISSING. The blocker answer above (rice vs plated dish) is the key.
        Question: a second page also needs the blog posts. Which way lets it reuse the cache, and why?
        Then give one case where caching the whole component is the better pick. -->

## References:

- https://nextjs.org/docs/app/api-reference/functions/cacheLife
<!-- ADD: https://nextjs.org/docs/app/getting-started/caching
          https://nextjs.org/docs/app/api-reference/directives/use-cache
          https://nextjs.org/docs/app/api-reference/functions/connection -->
