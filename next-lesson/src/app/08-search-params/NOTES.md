# Lesson 08 - Search Params and useRouter

## Experience:

- In a nutshell, learn how to sort data alphabetically using hooks like useSearchParams, useRouter, usePathname and others
- props can be use directly without mentioning "props", instead make it destructure
- PageProps typegen be used also in this lesson
- This class is hellish. Cant concentrate, too many new thing that i need to grasp, I am afraid i wont remember anything, but again implementation is the key. the more you code, the more you bode (well)
- function dalam router yaitu push dan replace. router.push let us to push a certain value to the address bar endpoint, with history recorded. While router.replace, almost do the same, but it's always clean (no history) idk
- to sort list alphabetically , you can do it by doing sort() and localCompare, to make it backward, just add reverse() in the end of code

## Implementation:

- useSearchParams, useRouter and usePathname are all hooks in client side, to use them must declare "use client"
- I always thought props is always inside-out, turns out it's vice versa, you can use props to do outside-inside
- Suspense be used for any component that might take time to load

## Blockers:

- this class idea is very benefitting but it's just too fast, the new module being introduce

## Quiz Answers:

1. useSearchParams() is client side, while searchParams props work in server component as promise
2. I dont really see the differences?
3. Because useSearchParams is hooks that take time to load?

## References:

- https://react.dev/learn/synchronizing-with-effects
- https://react.dev/learn/manipulating-the-dom-with-refs
- https://santrikoding.com/belajar-react-dasar-10-useeffect

          // <button>
          //   key={index}
          //   type="button"
          //   onClick={() => router.push(path + "?sort=" + x.value)}
          //   className={`bg-black px-6 text-white py-2 rounded-md hover:cursor-pointer hover:opacity-50`}
          // >
          //   {x.label}
          // </button>
