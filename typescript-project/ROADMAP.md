# TypeScript Roadmap

Levels are mixed on purpose: hard lessons sit between easier ones, so you get
quick wins between the tough challenges. Every lesson only needs the lessons
before it.

Levels: 🟢 basic · 🟡 intermediate · 🔴 advance

## Essential

| # | Level | Topic | What you learn | Done |
|---|-------|-------|----------------|------|
| 01 | 🟢 basic | Spread & rest | `...` on arrays, objects, and function params | [x] |
| 02 | 🟢 basic | Destructuring with types | Typed object/array destructuring, default values, destructuring in params | [ ] |
| 03 | 🟢 basic | Union & literal types | `string \| number`, `"admin" \| "user"` | [ ] |
| 04 | 🟡 intermediate | Narrowing | `typeof`, `in`, `instanceof`, truthiness checks | [ ] |
| 05 | 🟢 basic | `type` vs `interface` | Optional `?`, `readonly`, extending | [ ] |
| 06 | 🟡 intermediate | Discriminated unions | `{ kind: "a" } \| { kind: "b" }` + `switch` | [ ] |
| 07 | 🟢 basic | Function types | Typing params and returns, optional params, callback types | [ ] |
| 08 | 🟡 intermediate | Generics | `<T>` on functions and types | [ ] |
| 09 | 🟢 basic | Tuples & readonly arrays | `[string, number]`, `readonly T[]` | [ ] |
| 10 | 🟡 intermediate | `keyof`, `typeof`, indexed access | `keyof User`, `typeof config`, `User["name"]` | [ ] |
| 11 | 🔴 advance | Generic constraints | `T extends ...`, `K extends keyof T` | [ ] |
| 12 | 🟢 basic | `unknown`, `any`, `never` | Safe `catch`, exhaustive checks | [ ] |
| 13 | 🟡 intermediate | Utility types | `Partial`, `Pick`, `Omit`, `Record`, `ReturnType` | [ ] |
| 14 | 🟡 intermediate | `as const` & `satisfies` | Literal configs that stay type-checked | [ ] |
| 15 | 🔴 advance | Mapped types | `{ [K in keyof T]: ... }`, modifiers `-?` / `readonly` | [ ] |
| 16 | 🟢 basic | Async & Promise types | `Promise<T>`, typing `async` functions and `fetch` results | [ ] |
| 17 | 🟡 intermediate | Custom type guards | `x is T`, `asserts x is T` | [ ] |
| 18 | 🔴 advance | Conditional types & `infer` | `T extends U ? X : Y`, `infer R` | [ ] |
| 19 | 🟡 intermediate | Runtime validation with Zod | Schema → type with `z.infer`, validating API/form data | [ ] |

## Optional

| # | Level | Topic | What you learn | Done |
|---|-------|-------|----------------|------|
| 20 | 🟢 basic | Enums vs unions | When to use `enum` and when to use a literal union | [ ] |
| 21 | 🟡 intermediate | Classes & modifiers | `public`, `private`, `protected`, `implements` | [ ] |
| 22 | 🔴 advance | Template literal types | `` `on${Capitalize<string>}` `` | [ ] |
| 23 | 🟡 intermediate | Function overloads | Multiple call signatures | [ ] |
| 24 | 🔴 advance | Branded types | `string & { __brand: "UserId" }` | [ ] |
| 25 | 🟡 intermediate | `tsconfig` & strict mode | `strict`, `noUncheckedIndexedAccess`, paths | [ ] |
| 26 | 🔴 advance | Declaration files | `.d.ts`, `declare module`, typing a JS library | [ ] |
