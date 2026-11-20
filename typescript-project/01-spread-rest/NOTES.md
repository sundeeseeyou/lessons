# 01-Spread-Rest Lesson

## Experience:

### The idea: a bag of candy

Both use the same `...` sign. The only difference is the direction.

|               | Spread                                           | Rest                                     |
| ------------- | ------------------------------------------------ | ---------------------------------------- |
| Picture it as | **Pouring candy OUT** of a bag                   | **Putting the leftover candy IN** a bag  |
| What it does  | Takes things out, one by one, into something new | Collects whatever is left into one group |
| In one word   | Giving                                           | Receiving                                |

### How to tell them apart (ONLY REST THAT ARE IN DESTRUCTURE)

| Look at...    | Spread                                      | Rest                                           |
| ------------- | ------------------------------------------- | ---------------------------------------------- |
| Side of `=`   | **Right** side (making something new)       | **Left** side (catching what's left)           |
| In a function | When you **call** it: `Math.max(...scores)` | When you **write** it: `function sum(...nums)` |

### Examples (from practice.ts)

|          | Spread                                         | Rest                                          |
| -------- | ---------------------------------------------- | --------------------------------------------- |
| Array    | `const moreFruits = [...fruits, "mango"]` (#1) | `const [first, ...others] = groceries` (#6)   |
| Object   | `const olderUser = { ...user, age: 31 }` (#3)  | `const { password, ...safeUser } = user` (#7) |
| Function | `Math.max(...scores)` (#5)                     | `function sum(...nums: number[])` (#8)        |

### Rules

| Rule               | Spread                                                       | Rest                                                               |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------ |
| Where can it go?   | Anywhere: start, middle, end `[0, ...a, 99]`                 | **Only at the end** `[first, ...others]` ✅ `[...others, last]` ❌ |
| How many?          | As many as you want `[...fruits, ...veggies]`                | **Only one**                                                       |
| Does order matter? | Yes, the last one wins `{ ...defaults, theme: "dark" }` (#4) | No, it just takes the leftovers                                    |

Why rest must be last and only one: it catches the _leftovers_, and leftovers are always at the end, in one group.

### Where can rest be used? Only 2 places

Rest only **receives / unpacks**, so it only lives on the receiving side:

| Place | Example | Why it's "receiving" |
| ----- | ------- | -------------------- |
| Destructuring (left of `=`) | `const { password, ...safeUser } = user` | the value on the right gets unpacked into the left |
| Function parameters (when you write the function) | `function sum(...nums: number[])` | the arguments passed in get unpacked into the parameters |

Anywhere else, `...` is **spread**.

Function parameters are secretly destructuring too. Calling `sum(1, 2, 3)` works like:

```ts
const [...nums] = [1, 2, 3];
```

Both in one line, still easy to tell apart:

```ts
const [first, ...others] = [...fruits, ...veggies];
//          ↑ rest (left)       ↑ spread (right)
```

### Array or object?

Both work with arrays AND objects:

|        | Array                                     | Object                                      |
| ------ | ----------------------------------------- | ------------------------------------------- |
| Spread | `[...fruits, "mango"]` ✅                 | `{ ...user, age: 31 }` ✅                   |
| Rest   | `const [first, ...others] = groceries` ✅ | `const { password, ...safeUser } = user` ✅ |

But there are limits on **where you can pour**:

| Pour this... | ...into an array `[...x]` | ...into an object `{ ...x }` | ...into a function call `fn(...x)` |
| ------------ | ------------------------- | ---------------------------- | ---------------------------------- |
| An array     | ✅                        | ✅ (weird, rarely used)      | ✅                                 |
| An object    | ❌ error                  | ✅                           | ❌ error                           |

Why: an array has an order (1st, 2nd, 3rd), so it can be poured out one by one anywhere. An object is name → value pairs with no order, so it can only go into another object.

And one more:

| Rest used in...                                  | It gives you        |
| ------------------------------------------------ | ------------------- |
| Array destructuring `[first, ...others]`         | an **array**        |
| Object destructuring `{ password, ...safeUser }` | an **object**       |
| Function parameters `function sum(...nums)`      | always an **array** |

### Trap: spread only copies the first layer

| Code                                                               | Result                                             |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| `{ ...profile, address: { city: "Jakarta" } }`                     | ❌ `zip` is lost: the whole `address` got replaced |
| `{ ...profile, address: { ...profile.address, city: "Jakarta" } }` | ✅ `zip` is kept: `address` is spread too (#11)    |

Spread copies the outer object, but an object _inside_ it is not copied, it's still the same one. So for nested objects, spread each layer you change.

### Quick memory trick

> `...` that **makes** something new = **spread**
> `...` that **catches** what's left = **rest**

## Blockers:

## References:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
