# Lesson 13 - Custom Hooks

## Experience:

- this is one of the easiest hook to me to implement
- This hook merely like "Constructor Function" in javascript where you can create custom function that consist of other functiuon. This hook also does the similar. by creating new hooks using other hooks / logic.
- This is definitely will be beneficial for the project especially if we have the same logic to some component. Instead of duplicated syntax, we can write less with custom code use.

## Implementation:

- you can easily create custom hooks by preparing a .ts file and make sure to make sure your function name "use"
- then you can export the function to be used by other component

## Blockers:

- I must check the other hook being used and combined as a custom hooks, since i only check useState and also useEffect

## Quiz Answers:

1. if the badge and the button dont use custom hook, they will have exact same code on each tsx file.
2. to differentiate between hooks or regular function.

## References:

- https://react.dev/learn/reusing-logic-with-custom-hooks
- https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine
