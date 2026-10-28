// Spread & Rest practice, round 2
// Run from the Typescript-project folder:
//   node --watch 01-spread-rest/practice-2.ts
//   (or: bun --watch 01-spread-rest/practice-2.ts)
//
// Replace each `null` with your answer and compare with "Expected".
// Compare the VALUES, not the line breaks: Node/Bun may print long arrays on several lines.

export {}; // makes this file its own module, so names here don't clash with practice.ts

// ─────────────────────────────── SPREAD ───────────────────────────────

// 10. Remove the duplicates from `tags`.
//     A Set keeps only unique values, but it's not an array. Spread it back into one.
const tags = ["react", "next", "react", "ts", "next"];
const uniqueTags = [...new Set(tags)];

console.log("10:", uniqueTags);
// Expected: 10: [ 'react', 'next', 'ts' ]

// 11. The user moved to Jakarta. Make a NEW profile with city "Jakarta". Keep the zip!
//     Trap: { ...profile, address: { city: "Jakarta" } } loses the zip. Spread twice.
const profile = { name: "Sandi", address: { city: "Bandung", zip: "40111" } };
const moved = { ...profile, address: { ...profile.address, city: "Jakarta" } };

console.log("11:", moved, profile.address.city);
// Expected: 11: { name: 'Sandi', address: { city: 'Jakarta', zip: '40111' } } Bandung

// 12. Mark the todo with id 2 as done. Return a NEW array, don't touch `todos`.
//     This is how you update one item in a React list.
//     Hint: .map() + a ternary: same id → { ...todo, done: true }, otherwise → todo
const todos = [
  { id: 1, text: "buy milk", done: false },
  { id: 2, text: "learn rest", done: false },
];
const updatedTodos = null;
console.log("12:", updatedTodos, todos[1].done);
// Expected: 12: [ { id: 1, text: 'buy milk', done: false }, { id: 2, text: 'learn rest', done: true } ] false

// ──────────────────────────────── REST ────────────────────────────────

// 13. greetAll takes ONE greeting, then ANY number of names.
//     Return one string per name: "Hi, Sandi!".
//     Hint: rest must be the LAST parameter. Then .map() + a template literal.
function greetAll(greeting: string) {
  return null;
}
console.log("13:", greetAll("Hi", "Sandi", "Budi", "Ani"));
// Expected: 13: [ 'Hi, Sandi!', 'Hi, Budi!', 'Hi, Ani!' ]

// 14. A post came from the database. Make `editable` = only the fields a user may edit
//     in a form: drop BOTH `id` and `createdAt` in one line.
const post = { id: 7, createdAt: "2026-10-28", title: "Hello", body: "World" };
const editable = null;
console.log("14:", editable);
// Expected: 14: { title: 'Hello', body: 'World' }
