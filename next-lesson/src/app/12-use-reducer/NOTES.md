# Lesson 11 - useContext

## Experience:

- useContext adalah salah satu fitur dari react yang intinya sebagai solusi agar tidak terjadi yang namanya propdrilling
- Jika tanpa useContext, kita harus menggunakan useState pada setiap perubahan yang terjadi di client.
  <!-- FIX: with or without context there is still exactly ONE useState (in ThemeProvider). Context doesn't replace useState,
       it only delivers its value. Without context you'd keep the one useState and pass its value down as props. -->
- Tanpa useContext, useState wajib mentransfer props dari 1 tempat ke yang lain.
  <!-- MORE PRECISE: not useState, YOU would pass the value as a prop through every level (prop drilling).
       And in your tree it wouldn't even work: Header and the page are siblings, and a layout can't pass props into {children}.
       So the problem was not "too much typing", it was "props can't reach". That's the real Q1 answer. -->
  <!-- TYPO: "propdrilling" -> "prop drilling", "dibanyak" -> "di banyak", "mengaktifan" -> "mengaktifkan", "tidka" -> "tidak". -->
- Contoh penggunaan useContext paling mudah ada fitur toggle theme. Dengan 1 klik, semua perubahan bisa terjadi dibanyak tempat.

## Implementation:

- Penggunaan useContext seperti yang sudah dijelaskan cocok untuk penggunaan toggle theme, ganti bahasa juga mungkin?
- useContext untuk theme bisa diganti dengan next-theme
  <!-- FIX: the package is `next-themes` (with an s). And it doesn't replace useContext, it IS useContext inside:
       its ThemeProvider = your ThemeProvider, its useTheme() = your useContext(ThemeContext). -->
- `const value = useContext(SomeContext)` adalah cara menggunakan useContext, pastikan juga kamu mengaktifan `"use client"` dan juga `import { useContext } from "react";`
  <!-- INCOMPLETE: that's only the READ part. Write down all three, this is the thing to remember from this lesson:
       1. createContext(default)            -> the board            (ThemeContext.tsx)
       2. <ThemeContext value={...}>children -> pin a value, "provider" (ThemeProvider.tsx, holds the useState)
       3. useContext(ThemeContext)           -> read it              (ThemeLabel, ThemeToggle)
       Also the bug you hit: TWO providers = two separate boards. The reader always takes the NEAREST one above it. -->

## Blockers:

- Beside toggle theme, saya tidka tahu apalagi implementasi yang bisa dipakai menggunakan useContext
  <!-- ANSWER: anything that many far-apart components need to read, and that is NOT owned by one page:
       - logged-in user (name, avatar in header, "my orders" on a page, "edit" button only for admins)
       - language / locale (your own "ganti bahasa" guess is right)
       - shopping cart badge in the header + cart page (lesson 12 keeps it in one component; a real shop puts it in context)
       - toast / notification: any component calls showToast("Saved!"), one component at the root renders it
       - modal open/close, sidebar collapsed, multi-step form data shared across steps
       Rule of thumb: used in 2+ places that aren't parent/child -> context. Used in one subtree -> plain props. -->

## Quiz Answers:

1. Karena useContext menghemat penulisan dan juga menghindari terjadinya propdrilling, karena pertukaran props yang berkali-kali.
   <!-- HALF RIGHT. "Less typing" is a bonus, not the reason. The reason: props only flow parent -> child.
        Header and the lesson page are siblings, and the root layout can't pass props into {children}.
        So there is NO prop path from the toggle to the page at all. Context is the only way without props. -->
2. Dikarenakan provider ada interaksi client secara langsung, yaitu client menekan toggle theme. Sedangkan root layout tidak serta merta terjadi interaksi antar client dengan server
   <!-- WRONG reason. The provider is a client component because it uses HOOKS (useState, useEffect), not because
        someone clicks it (the click happens in ThemeToggle, a different component).
        Why it still works inside a server layout: a server component MAY render a client component and hand it
        server-rendered children. Root layout does <ThemeProvider>{children}</ThemeProvider>: only ThemeProvider
        itself runs in the browser, the pages passed through {children} stay server components.
        Same as lesson 03: the server page rendered <Counter />, and the page stayed a server component. -->
3. Dikarenakan localStorage ketika membaca data dari browser, terdapat waktu jeda sedikit saat mengambilnya, maka dari itu terjadi flash sesaat. Masalah ini diselesaikan dengan library seperti next-theme yang mana hal ini lebih umum diimplementasikan ketimbang hanya menggunakan useContext
   <!-- WRONG reason. Reading localStorage is instant (synchronous). The gap is somewhere else:
        1. Server sends HTML with theme "light" (the server has no localStorage, useState starts at "light").
        2. The browser PAINTS that HTML. Light.
        3. Only then useEffect runs (effects always run AFTER paint), reads "dark", setTheme, re-render. Dark.
        The flash is the time between 2 and 3.
        next-themes fixes it by injecting a tiny <script> in <head> that adds the "dark" class BEFORE the first paint. -->

## References:

- https://react.dev/reference/react/useContext
- https://vercel.com/kb/guide/react-context-state-management-nextjs
