// Lesson 03: Union & literal types 🟢 basic
// Run from the typescript-project folder:
//   node --watch 03-basic-union-literal-types/practice.ts
//
// Read part 1–3, run the file to see the example work, then do part 4.
// Red underline in VS Code = a type error. Node still runs the file, so check both.

// ═══════════════════════════ 1. WHAT IT IS ═══════════════════════════
// UNION  = "this OR that". Read `|` as "or".
//   let id: string | number;      → id can be a string OR a number
//   id = 42;       ✅
//   id = "abc";    ✅
//   id = true;     ❌ boolean is not in the list
//
// LITERAL TYPE = one exact value used as a type.
//   let x: "draft";               → x can ONLY be the text "draft", nothing else
//
// Together they make a list of allowed values (the most used combo):
//   type Status = "draft" | "published";
//   let s: Status = "draft";      ✅
//   s = "Draft";                  ❌ capital D: not in the list
//   s = "deleted";                ❌ not in the list
//   VS Code also autocompletes the allowed values: type `s = "` and look.
//
// You already met one in lesson 02: `status?: string` is really `string | undefined`.
//
// TRAP: let vs const
//   const a = "draft";   → hover: type is "draft"  (a const never changes, so TS keeps the exact value)
//   let b = "draft";     → hover: type is string   (a let may change later, so TS widens it)
//   So a `let` without a type can't go where a Status is expected. Example 5 shows it.
//
// The data in this file: every Post / ButtonConfig is an OBJECT. There are no arrays this lesson.

// ═══════════════════════════ 2. REAL-WORLD USE ═══════════════════════════
// - CMS post status:    "draft" | "published" | "archived"
// - Button variants:    variant: "primary" | "secondary" | "danger"   (every UI library does this)
// - User roles:         "admin" | "editor" | "viewer"
// - HTTP methods:       "GET" | "POST" | "PUT" | "DELETE"
// - IDs from a DB/API:  id: string | number
// The win: a typo like "pubished" is a red underline NOW, not a bug in production.

// ═══════════════════════════ 3. EXAMPLE: a button config ═══════════════════════════
// This runs. Look at the "ex" lines in the output.

// ex1: a literal union type + a variable that uses it.
type Variant = "primary" | "secondary" | "danger";
let mainVariant: Variant = "primary";
// mainVariant = "blue";   ← remove the // : red underline, "blue" is not a Variant
console.log("ex1:", mainVariant);

// ex2: a function that takes a literal union.
function isLoud(variant: Variant): boolean {
  return variant === "primary" || variant === "danger";
}
console.log("ex2:", isLoud("danger"), isLoud("secondary"));
// isLoud("red");   ← remove the // : red underline

// ex3: a union of two basic types. A template string works with both, no checking needed.
function badgeText(count: string | number): string {
  return `(${count})`;
}
console.log("ex3:", badgeText(5), badgeText("99+"));

// ex4: unions inside an object type + destructuring from lesson 02.
type Size = "sm" | "md" | "lg";
type ButtonConfig = {
  label: string;
  variant: Variant;
  size?: Size; // optional → Size | undefined
};

const saveButton: ButtonConfig = { label: "Save", variant: "primary" };

function buttonClass({ variant, size = "md" }: ButtonConfig): string {
  return `btn btn-${variant} btn-${size}`;
}
console.log("ex4:", buttonClass(saveButton));

// ex5: the let trap.
let picked = "danger"; // hover: string (not "danger")
// isLoud(picked);     ← remove the // : string is not assignable to Variant
// Fix A: give the let a type.
let pickedFixed: Variant = "danger";
// Fix B: use const if it never changes.
const pickedConst = "danger"; // hover: "danger"
console.log("ex5:", picked, isLoud(pickedFixed), isLoud(pickedConst));

// ═══════════════════════════ 4. CHALLENGE: CMS posts with status and roles ═══════════════════════════
// Same moves as the example, for a blog CMS. Write each answer under its number.

console.log("\n------------------ Challenge answers ------------------\n");

// 1. Make `type PostStatus` = "draft", "published" or "archived".
//    Make `let currentStatus` with that type, set to "draft", and log it.   (like ex1)
//    Then try to set it to "deleted" and see the red underline. Comment that line out again.
// Expected: 1: draft

// 2. Make `type Role` = "admin", "editor" or "viewer".
//    Write `canPublish(role)` → true for admin and editor, false for viewer.   (like ex2)
//    Log it for "editor" and "viewer".
// Expected: 2: true false

// 3. Write `postUrl(id)`: id can be a number OR a string (some posts use a slug).
//    It returns "/posts/" + the id.   (like ex3)
//    Log it for 42 and "hello-world".
// Expected: 3: /posts/42 /posts/hello-world

// 4. Make `type Post` with: id (number or string), title (string), status (PostStatus),
//    and an optional `editedBy` (Role).   (like ex4: ButtonConfig)
//    Make one post: id 1, title "Hello World", status "draft", no editedBy.
//    Write `postLabel(post)` with destructuring in the parameter (lesson 02),
//    editedBy defaults to "admin" → "Hello World [draft] by admin".
// Expected: 4: Hello World [draft] by admin

// 5. The let trap. Make `let nextStatus = "published"` with NO type, then pass it to a
//    function that wants a PostStatus. Hover the red underline.
//    Fix it both ways from ex5 and log the two fixed values.
//    Tip: a function to pass it to: one line, `function show(s: PostStatus) { return s; }`
// Expected: 5: published published

// 6. No code: in NOTES.md, answer the quiz at the bottom of the hints.

// ═══════════════════════════ 5. HINTS (scroll down only when stuck) ═══════════════════════════
//
//
//
//
//
//
//
//
//
//
// 1. type Name = "a" | "b" | "c";      let x: Name = "a";
//
// 2. Same shape as isLoud: (role: Role): boolean  and  role === "..." || role === "..."
//
// 3. Same shape as badgeText: (id: string | number): string  and a template string `/posts/${...}`
//
// 4. Object type: like ButtonConfig. The union goes right after the colon:  id: number | string;
//    The optional one:  editedBy?: Role;
//    Function: like buttonClass, with three fields:  ({ title, status, editedBy = "admin" }: Post)
//
// 5. let x = "published";  →  hover x: string. That's the problem.
//    Fix A: let x: PostStatus = "published";
//    Fix B: const x = "published";
//    Use different names for the two fixes, or they clash.
//
// NOTES.md: like lesson 01 (Experience / Blockers / References), and answer:
//   Q1. Why does `const s = "draft"` get the type "draft", but `let s = "draft"` gets string?
//   Q2. What does `editedBy?: Role` mean as a union? (hint: lesson 02's `status?: string`)
//   Q3. In ex3, why does badgeText work for both a string and a number without any if/else?
