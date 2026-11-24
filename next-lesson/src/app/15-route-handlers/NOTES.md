# Lesson 15 - Route Handlers

## Experience:

- 

## Implementation:

### The POST flow (works the same in any backend: Next, Express, Laravel, Go)

**take → check → reject (400) / save → reply**

| Step | What | In code |
|---|---|---|
| 1. Take | read what the client sent | `const body = await request.json()` → `const item = body.item` |
| 2. Check | is it valid? | `if (!item \|\| item.trim() === "")` |
| 3. Reject | not valid → stop here | `return Response.json({ error: "..." }, { status: 400 })` |
| 4. Save | valid → store it | `todos.push(item)` |
| 5. Reply | send the result back | `return Response.json({ todos })` |

- Steps 2–3 always come **before** step 4. Never trust client input: anyone (Bruno, Postman, a phone app) can send anything.
- `GET` is simpler: nothing to take or check, just reply with the data.

Terms to search for:
- **Request lifecycle**: parse → validate → process → respond
- **Input validation**: the "check" step
- **Never trust client input**: the reason behind the check
- **Fail fast / early return**: `return` the 400 as soon as something is wrong

### Why no `revalidatePath` here?

Short answer: **who draws the list decides how it gets updated.**

**Lesson 05 (server draws the list)**
- The server cooks the page and sends it ready-made, like a printed menu.
- After adding a todo, the printed menu is old. `revalidatePath` = "print a new menu".

**Lesson 15 (browser draws the list)**
- The list lives in `useState` inside a client component, like a whiteboard in your own hands.
- `POST /api/todos` already answers with the new list.
- So you just write it on the whiteboard yourself: `setTodos(data.todos)`. React redraws it. No reprint needed.

| | Lesson 05 | Lesson 15 |
|---|---|---|
| Who draws the list | server component | client component |
| Where the list lives | on the server, inside the HTML | in `useState` in the browser |
| How it updates | `revalidatePath` → server redraws the page | `setTodos(data.todos)` → React redraws |

Rule of thumb:
- Data shown by a **server component** → use `revalidatePath` after changing it.
- Data shown by a **client component** with `useState` → just call the setter with the new data.

### Why not `String(body.item)`?

- `String(undefined)` turns "nothing" into the text `"undefined"`, and that text is not empty, so it passes the check and lands in the list.
- Use `body.item` as it is. If the key is missing or wrong, it stays `undefined`, `!item` is `true`, and the client gets a 400.

## Blockers:

- 

## Quiz Answers:

A1. 
A2. 
A3. 

## References:

https://nextjs.org/docs/app/getting-started/route-handlers
https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
