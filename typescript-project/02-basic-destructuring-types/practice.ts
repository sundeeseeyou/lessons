// Lesson 02: Destructuring with types 🟢 basic
// Run from the typescript-project folder:
//   node --watch 02-basic-destructuring-types/practice.ts
//
// Read part 1–3, run the file to see the example work, then do part 4.
// Red underline in VS Code = a type error. Node still runs the file, so check both.

// ═══════════════════════════ 1. WHAT IT IS ═══════════════════════════
// Destructuring = unpack values from an object/array into variables, in one line.
// You write the SHAPE you want on the left of `=`, JavaScript fills it in.
//
// FIRST, LOOK AT THE SOURCE: object or array? The brackets must match it.
//   source is an OBJECT  { title: "Hello" }   → use { }  → picks by NAME      { title }
//   source is an ARRAY   ["ts", "beginner"]   → use [ ]  → picks by POSITION  [first]
//   In the data below: draftPost = object, draftPost.author = object, draftPost.tags = ARRAY.
//   Wrong bracket = no error from Node, just `undefined` (an array has no key called "mainTag").
//
//   { title }             → title = post.title
//   { title: heading }       → heading = post.title   (rename, no `title` variable!)
//   { author: { name } }     → name = post.author.name (nested)
//   { status = "draft" }     → post.status, or "draft" if it's undefined (default)
//   [first, second]          → arr[0], arr[1]
//   [first, ...others]       → first item + the rest (lesson 01)
//
// THE ONE RULE: the colon means two different things.
//   `:` INSIDE the { }  → RENAME (JavaScript)    { title: heading }
//   `:` AFTER the }     → TYPE (TypeScript)      { title }: Post
//
// When do you write the type?
//   const { title } = post            → no. `post` is already a Post, TS knows.
//   function f({ title }: Post) {}    → yes. A parameter has no value yet, TS can't guess.

// ═══════════════════════════ 2. REAL-WORLD USE ═══════════════════════════
// - React props:       function Button({ label, disabled = false }: ButtonProps)
// - API / CMS JSON:    const { data, error } = await res.json()
// - Options + default: function connect({ host = "localhost", port = 5432 }: DbOptions)
// - Hooks:             const [count, setCount] = useState(0)   ← array destructuring

// ═══════════════════════════ 3. EXAMPLE: a product card ═══════════════════════════
// This runs. Look at the "ex" lines in the output.

type Product = {
  name: string;
  price: number;
  discount?: number; // `?` = may be missing → number | undefined
  seller: { name: string; city: string };
  sizes: string[];
};

const keyboard: Product = {
  name: "Mechanical Keyboard",
  price: 500000,
  seller: { name: "Toko Budi", city: "Bandung" },
  sizes: ["full", "tkl", "60%"],
};

const mouse: Product = {
  name: "Wireless Mouse",
  price: 200000,
  discount: 50000,
  seller: { name: "Toko Ani", city: "Jakarta" },
  sizes: ["small"],
};

// ex1: two fields. No type written: keyboard is already a Product.
const { name, price } = keyboard;
console.log("ex1:", name, price);

// ex2: nested + rename. `name` is taken (ex1), so call it sellerName.
const {
  seller: { name: sellerName, city },
} = keyboard;
console.log("ex2:", sellerName, city);

// ex3: default. keyboard has no discount → 0. Hover `discount`: number, not number | undefined.
const { discount = 0 } = keyboard;
console.log("ex3:", discount);

// ex4: array, first + rest.
const [firstSize, ...otherSizes] = keyboard.sizes;
console.log("ex4:", firstSize, otherSizes);

// ex5: everything in the parameter. The type `: Product` goes AFTER the `}`.
//   Without destructuring it would be: product.name, product.seller.name, product.sizes[0], ...
function formatProduct({
  name,
  price,
  discount = 0, // default
  seller: { name: sellerName, city }, // nested + rename
  sizes: [mainSize], // array: first item only
}: Product) {
  return `${name} by ${sellerName} (${city}): Rp${price - discount}, size ${mainSize}`;
}
console.log("ex5:", formatProduct(keyboard));
console.log("ex5:", formatProduct(mouse));

// ═══════════════════════════ 4. CHALLENGE: a blog post from a CMS ═══════════════════════════
// Same moves as the example, on a Post. Write each answer under its number.

type Post = {
  title: string;
  status?: string;
  author: { name: string; email: string };
  tags: string[];
};

const draftPost: Post = {
  title: "Hello World",
  author: { name: "Sandi", email: "sandi@example.com" },
  tags: ["ts", "beginner", "destructuring"],
};

const livePost: Post = {
  title: "Why TypeScript",
  status: "published",
  author: { name: "Budi", email: "budi@example.com" },
  tags: ["ts"],
};

console.log(
  "\n------------------ Challenges Answers------------------------\n",
);
// 1. From draftPost, unpack `title` and `tags` in one line, and log them.   (like ex1)
const { title, tags } = draftPost;
console.log("1:", title, tags);
// Expected: 1: Hello World [ 'ts', 'beginner', 'destructuring' ]

// 2. From draftPost, unpack the author's name as `authorName`.   (like ex2: author → name)
const {
  author: { name: authorName },
} = draftPost;
console.log("2:", authorName);

// Expected: 2: Sandi

// 3. Unpack `status` from BOTH posts, default "draft".   (like ex3)
const { status = "draft" } = draftPost;
const { status: liveStatus = "draft" } = livePost;
console.log("3:", status, liveStatus);
//    Tweak: the second one needs another name, or the two variables clash.
//    Hover both: they must be `string`, not `string | undefined`.
// Expected: 3: draft published

// 4. From draftPost.tags, unpack the first tag as `mainTag`, the rest as `otherTags`.   (like ex4)
const [mainTag, ...otherTags] = draftPost.tags;
console.log("4:", mainTag, otherTags);
// Expected: 4: ts [ 'beginner', 'destructuring' ]

// 5. Write formatPost(post) → "[draft] Hello World by Sandi #ts".   (like ex5)
//    Unpack in the parameter: title, status (default "draft"), the author's name, the first tag.
//    The body is one `return` line, no `post.` anywhere. Call it with both posts.
// Expected:
// 5: [draft] Hello World by Sandi #ts
// 5: [published] Why TypeScript by Budi #ts

// 6. The trap. Write a function that unpacks `title` and puts the type INSIDE the braces:
//    { title: string }. Hover the red underline. What did that `:` really do? How do you fix it?
//    No expected output: write the answer in NOTES.md.

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
// 1. Same as ex1, with title and tags.
//
// 2. const { outer: { inner: newName } } = obj;
//
// 3. draftPost: same as ex3.
//    livePost: rename AND default together, rename first:  const { field: otherName = "fallback" } = obj;
//
// 4. Same as ex4, from draftPost.tags.
//
// 5. Copy the shape of formatProduct. Inside the { }: title, status = ..., author: { name }, tags: [mainTag]
//    then  }: Post
//    `name` doesn't clash with anything inside the function, so no rename needed.
//
// 6. function showTitle({ title: string }) { ... }
//    Look at THE ONE RULE in part 1: inside the { } = rename.
//    Fix: move the type after the }  →  ({ title }: Post)  or  ({ title }: { title: string })
//
// NOTES.md: like lesson 01 (Experience / Blockers / References), and answer:
//   Q1. Why does TS complain about a variable called `string` in step 6?
//   Q2. Why does `const { title } = draftPost` need no type, but formatPost's parameter does?
//   Q3. Why is `status` a plain string after `= "draft"`? Would the default also kick in for `null`?
