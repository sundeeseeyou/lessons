# Lesson 04 - Fetching Data

## Experience:

- Learn how fetching in nextjs
- I combine the shorthand that i get from page generate-static-params
- Learn how to create Type for json that are array by assignin key value pair based on their object composition
- Suspense used for any data that show data from external source, whether export, db or API. Suspense tell the browser to load everything first, but still give time to load the SUspense component later
- Suspense component have attribute fallback that can be filled with component that will be shown if there is data being loaded in the background
- Suspense should be placed on the parent page of component that being loaded (this component should also be separated)
- Closest suspense to a "slow data", that one that will be executed
- Turns out, loading.tsx will create Suspense in the background
- Back button can be created 3 ways, exact address, with dots (.) or using client side `useRouter`
- Turns out async / await pair only work in server-side
- If you need a client side hooks along with server side function/logic, always separate the client side into a component

## Implementation:

- The use of async must be awaited.
- API called can be checked by put the variable that assigned to it getting "console.log"
- The Type assignment of JSON, can be done selectively. Pick any key that suit your needs

## Blockers:

- To understand the use of hooks, useRouter seem easy to understand

## References:

- https://nextjs.org/docs/app/getting-started/fetching-data
- https://nextjs.org/docs/app/api-reference/functions/generate-static-params
