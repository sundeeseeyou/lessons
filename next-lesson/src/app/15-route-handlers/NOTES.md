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
