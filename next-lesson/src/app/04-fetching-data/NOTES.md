# Lesson 04 - Fetching Data

## Experience:

- Learn how fetching in nextjs
- I combine the shorthand that i get from page generate-static-params
- Learn how to create Type for json that are array by assignin key value pair based on their object composition
- Suspense used for any data that show data from external source, whether export, db or API. Suspense tell the browser to load everything first, but still give time to load the SUspense component later
- Suspense component have attribute fallback that can be filled with component that will be shown if there is data being loaded in the background
- Suspense's fallback will be overriden if in the same folder of page.jsx have loading.tsx (preset name from Next.js). loading.tsx will be the one who shown on the "loading" step
- Async function might match with an await.

## Implementation:

- The use of async must be awaited.
- API called can be checked by put the variable that assigned to it getting "console.log"
- The Type assignment of JSON, can be done selectively. Pick any key that suit your needs

## Blockers:

- I still not that grasp the idea of async await, i knew they must be paired. and I know it's about "doing something simultaneosly"

## References:

- https://nextjs.org/docs/app/getting-started/fetching-data
- https://nextjs.org/docs/app/api-reference/functions/generate-static-params
