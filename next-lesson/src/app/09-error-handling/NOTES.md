# Lesson 09 - Error Handling

## Experience:

- In this chapter, I learn about error handling. Turns out, some error are technically created. We can create a handling for error, so we can tell the system what to do if it got error.
- In this lesson, it's divided into 3 materials, crash, form and post
  - Crash, we're handling a problem when crash happen.
  - Form, this working as validation like zod
    <!-- CLARIFY: useActionState is not a validator. YOU wrote the check (data === "") in the server action.
         useActionState only runs the action and hands back what it returned (state) + whether it's still running (pending).
         Zod would replace your `data === ""` line, not useActionState. -->
  - Post, this is mostly for handling 404. so when you enter undefined page/missing page, we can handle these error with 404 redirection
    <!-- FIX: not a redirection. The URL stays /09-error-handling/post. notFound() just swaps WHAT is rendered
         for the nearest not-found.tsx. Check the address bar: it never changes. -->
    <!-- FIX: "Post, this is mostly for handling 404" - not-found.tsx is for a MISSING THING (a post that doesn't exist, a user id that doesn't exist, etc.), not only missing pages. -->
    <!-- TYPO (English): "some error are" -> "some errors are"; "if it got error" -> "if it gets an error". -->

## Implementation:

- To handle crash, you can use error.tsx, the error.tsx is predefined page in next js, it will be default error of the closest page
  <!-- MORE PRECISE: error.tsx covers the FOLDER it sits in (and everything below it), not just one page.
       Yours is in crash/, so it only catches crashes inside crash/. A crash in post/ would look for a different error.tsx higher up. -->
  <!-- TYPO: "predefined page" -> "predefined file name" (same idea as not-found.tsx, loading.tsx, layout.tsx). -->
- You can initiate error.tsx like this

```
export default function ErrorPage({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {}

```

- To create custom form verification, you can use useActionState
  <!-- FIX: it's useActionState (from "react"). There is no useActionForm. -->

- To handle 404, you can setup not-found.tsx

## Blockers:

- Claude gimme challenge that I barely touch it, I hope claude can gimme example or template for each case
  <!-- NOTED. From lesson 10 on: each step's Hints block will carry a short starter snippet per new concept, not just pointers. -->
- I am not quite sure how props work in error.tsx, the other two make sense
  <!-- ANSWER: you never render <ErrorPage error={...} retry={...} /> yourself. Next.js does.
       Flow: bomb.tsx throws -> Next.js catches it -> Next.js renders YOUR error.tsx and passes in:
         error = the thing that was thrown (your `new Error("Boom")`)
         retry = a function Next.js made; calling it re-renders the crashed part from scratch (explode state back to false)
       Analogy: a fire alarm. You don't pull it; the smoke (the throw) triggers it. The alarm panel (error.tsx)
       is handed WHICH sensor fired (error) and a reset button (retry). -->

## Quiz Answers:

- A1: the page that shows will be not-found.tsx, because its predefined page
  <!-- INCOMPLETE: there are TWO not-found.tsx files (src/app/not-found.tsx and 09-error-handling/post/not-found.tsx).
       The question asks WHICH one and WHY THAT ONE.
       Answer: the one in post/, because notFound() uses the NEAREST not-found.tsx going up from where it was called.
       post/page.tsx called it -> post/not-found.tsx is closest -> that one wins. The site-wide one only shows
       when there is no closer one (e.g. /does-not-exist). -->
- A2: THe click wont show because it's not trigger the errot.tsx, you can see error on browser, but not making the page crash
  <!-- RIGHT observation, missing the WHY: error.tsx only catches errors thrown DURING RENDER (while React is building the UI).
       An onClick runs AFTER render, as a normal browser event, so React never sees it. It goes to the console only.
       Same for errors inside setTimeout, fetch().then(), etc. -->
- A3: Number 3 is uncaught exception, because the error happen because of something not right. While number 5 is an expected errors, you already setup some logic what'll happen if errors occur.
  <!-- CORRECT split. Sharper on "how is each handled":
       - Uncaught exception (step 3): THROWN. Nobody planned it. Next.js catches it with error.tsx and shows a fallback UI.
       - Expected error (step 5): RETURNED as a value ({ message: "Name is required" }), never thrown.
         Your code shows it like any other data (state.message). No error.tsx involved.
       Rule of thumb: if you can predict it (empty input, wrong password), return it. If you can't, let it throw. -->

## References:

- https://react.dev/reference/react/useActionState
- https://nextjs.org/docs/app/getting-started/error-handling
