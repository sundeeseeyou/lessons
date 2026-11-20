# Lesson 13 - Custom Hooks

## Experience:

- this is one of the easiest hook to me to implement
- This hook merely like "Constructor Function" in javascript where you can create custom function that consist of other functiuon. This hook also does the similar. by creating new hooks using other hooks / logic.
  <!-- Claude: "Constructor function" isn't quite the right comparison. A constructor is called with `new` to create objects. A custom hook is closer to a plain helper function: it wraps a few hook calls (useState, useEffect, ...) so you can reuse them. Suggestion: "A custom hook is like a helper function that bundles other hooks so several components can reuse the same logic." -->
- This is definitely will be beneficial for the project especially if we have the same logic to some component. Instead of duplicated syntax, we can write less with custom code use.

## Implementation:

- you can easily create custom hooks by preparing a .ts file and make sure to make sure your function name "use"
  <!-- Claude: missing words: "make sure your function name STARTS WITH `use`" (e.g. useOnlineStatus). Also, .ts vs .tsx: use .ts when the file has no JSX (a hook returns a value), .tsx when it returns JSX (a component). Your hook file has no "use client" because it runs inside client components, which is correct. -->
- then you can export the function to be used by other component

## Blockers:

- I must check the other hook being used and combined as a custom hooks, since i only check useState and also useEffect
  <!-- Claude: answered: a custom hook can call ANY hook: useState, useEffect, useRef, useContext, useReducer, even other custom hooks. Examples: useTheme() wrapping useContext(ThemeContext) from lesson 11, useCart() wrapping the useReducer from lesson 12, useClickOutside() using useRef + useEffect. You can move this into "Implementation" as a learned point. -->

## Quiz Answers:

1. if the badge and the button dont use custom hook, they will have exact same code on each tsx file. so each component have their own useState x useEffect
  <!-- Claude: closer, but this still describes the version WITHOUT the hook. The question is about the version WITH the hook: both call useOnlineStatus(). Do they share one isOnline value, or does each get its own?
       Answer: each gets its own. A custom hook shares LOGIC, not STATE. Every call to useOnlineStatus() runs its own useState and its own useEffect, so the badge and the button each hold a separate `online` state and each add their own listeners. Their values only look the same because both listen to the same browser events.
       Analogy: same recipe, two separate pots. If you need ONE shared value, that's useContext (lesson 11).
       Suggestion: "Each has its own. Custom hooks share logic, not state: every call gets its own useState and useEffect." -->
2. to differentiate between hooks or regular function.
  <!-- Claude: right direction, but add WHY they need to be told apart. Hooks follow the Rules of Hooks: only call them at the top level of a component or another hook, never inside if, loops, or regular functions. The `use` prefix tells React and the linter "this function calls hooks", so the linter can check those rules inside it and wherever it's called. Without `use`, the linter can't warn you if you call it in the wrong place.
       Suggestion: "So React and the linter know it calls hooks and can enforce the Rules of Hooks (top level only, not inside if/loops)." -->

## References:

- https://react.dev/learn/reusing-logic-with-custom-hooks
- https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine
