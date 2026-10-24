# Lesson 04 - Fetching Data

## Experience:

- I learn so many thing from this chapters
- form has relation with FormData (you can correct me or complete the statement) that you can use to transfer the form result somewhere
- form's action attribute value of a function that invoke something, in this case the addTodo
- Turns out, any array in ts file, only meant for initial value, you cannot see the changes even you successfully push something to the array, because, the changes only happens in memory
- the `as string` type, is quite refreshment, I knew it before, but forgot at all that I can use it. This lesson just refresh my memory. But now i forgot whats that for? and why is not th same as `const data: string`?
- input can be located inside label that turn into div-ish, you can set any tailwind there. if you do it, you needn't use any htmlFor or id pair

## Implementation:

- `use server` need to be stated at top. Because of prettier, it cannot be stored inside named function (your word)
- I think i can make form better now, it's simpler now. You just need to make sure the result of those form input be stored somewhere

## Blockers:

Is FormData type a preset? or I can change it with other name?

## Quiz Answers:

- the revalidate function is not new to me, but it's kinda clearer now. It's just revalidate the changes you commit. Because without it, the changes cannot be shown to client, but in the background, those push to array still count

## References:

- https://nextjs.org/docs/app/getting-started/mutating-data#forms
- https://nextjs.org/docs/app/getting-started/mutating-data#revalidate-data
