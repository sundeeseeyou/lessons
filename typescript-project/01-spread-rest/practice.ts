// Spread & Rest practice
// Run from the Typescript-project folder:
//   node 01-spread-rest/practice.ts
//   (or: bun 01-spread-rest/practice.ts)
//
// Replace each `null` with your answer, run, and compare with "Expected".
// Rule of thumb:  SPREAD = pour out (giving)   REST = collect leftovers (receiving)

const fruits = ["apple", "banana"];
const veggies = ["carrot", "spinach"];
const user = { name: "Sandi", age: 30, password: "secret123" };
const defaults = { theme: "light", lang: "en", fontSize: 14 };

// ─────────────────────────────── SPREAD ───────────────────────────────

// 1. Make a NEW array: fruits + "mango" at the end. Don't touch `fruits`.
//    (this is exactly your setItems([...items, list]))
const moreFruits = [...fruits, "mango"];
console.log("1:", moreFruits, fruits);
// Expected: 1: [ 'apple', 'banana', 'mango' ] [ 'apple', 'banana' ]

// 2. Merge fruits and veggies into one array.
const groceries = [...fruits, ...veggies];
console.log("2:", groceries);
// Expected: 2: [ 'apple', 'banana', 'carrot', 'spinach' ]

// 3. Make a NEW user with age 31. Keep everything else. Don't touch `user`.
//    (this is how you update an object in React state)
const olderUser = { ...user, age: 31 };
console.log("3:", olderUser, user.age);
// Expected: 3: { name: 'Sandi', age: 31, password: 'secret123' } 30

// 4. Settings = defaults, but the user picked theme "dark".
//    Try it twice: put the override AFTER the spread, then BEFORE it. What changes?
const settings = { ...defaults, theme: "dark" };

//if the spread is on the right, it got error, while if the spread on the left, it's fine
console.log("4:", settings);
// Expected: 4: { theme: 'dark', lang: 'en', fontSize: 14 }

// 5. Find the biggest number with Math.max. Math.max wants (5, 9, 2), not [5, 9, 2].
const scores = [5, 9, 2];
const best = Math.max(...scores);
console.log("5:", best);
// Expected: 5: 9

// ──────────────────────────────── REST ────────────────────────────────

// 6. Take the first fruit of `groceries` into `first`, the rest into `others`.
//    (one line: const [ ... ] = groceries)
const [first, ...others] = groceries;
console.log("6:", first, others);
// Expected: 6: apple [ 'banana', 'carrot', 'spinach' ]

// 7. Make `safeUser` = user WITHOUT password. Real use: never send passwords to the client.
//    (one line: const { password, ... } = user)
const { password, ...safeUser } = user;
console.log("7:", safeUser);

// Expected: 7: { name: 'Sandi', age: 30 }

// 8. Write sum() so it accepts ANY number of arguments.
function sum(...nums: number[]) {
  console.log(nums);

  // return nums.reduce((total, n) => total + n, 0);

  let total = 0;
  for (const n of nums) {
    total = total + n;
  }

  return total;
}
console.log("8:", sum(1, 2), sum(1, 2, 3, 4));
// Expected: 8: 3 10
// Hint: rest params give you an array, then use .reduce((total, n) => total + n, 0)

// ──────────────────────────────── MIX ─────────────────────────────────

// 9. React-style: a component takes `label`, and passes every other prop to <button>.
//    Here we fake it: pull out `label` with REST, then build a new object with SPREAD.
const props = { label: "Save", type: "submit", disabled: false };
const { label, ...info } = props;
const buttonProps = { ...info, className: "btn" }; // = { ...everything except label, className: "btn" }
console.log("9:", label, buttonProps);
// Expected: 9: Save { type: 'submit', disabled: false, className: 'btn' }

//example of reduce

const test: number[] = [2, 2, 2, 3];

const result = test.reduce((test, n) => test * n);

console.log(result);
