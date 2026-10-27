# Lesson 07 - useEffect and useRef

## Experience:

- Learn about useEffect and useRef
- useRef is similar to a selector in css or jquery, but it will automatically trigger something to the target that have attribute ref=""
- useEffect, as i understand, a sequence of effect that happen after something?
- Learn how to use setInterval() and clearInterval()

## Implementation:

- preparation to useRef or useEffect `import { useRef , useEffect } from "react";` both hooks, must use the "use client";
- Syntax of useRef `const ref = useRef<TypeOfComponent>(null)`
- Syntax of useEffect

`useEffect (() => {//logic/args},[])`

- The Array on useEffect can do these
  - Empty array, the effect execute for the first time
  - Array with function inside, will execute everytime changes happen (?)

## Blockers:

- to understand the use of useEffect, i need more practice and challenges along with scenarios
- setInterval and clearInterval also need to be studied more

## Quiz Answers:

1. Berikut jawabannya:
   - Jika tanpa array brackets, kode didalamnya akan loop terus menerus, jarang dilakukan dan berbahaya
   - Jika Array kosong [], kode akan dijalankan di awal saja
   - Jika [variabel/function], maka kode akan dijalankan berulang-ulang selama memenuhi kriteria (?)

2. Saya tahu kalau tanpa interval, angka yang bertambah 2x lipat. Saya tidak tahu kenapa, bisa tlong koreksi, kasih komentar di sini?

## References:

- https://react.dev/learn/synchronizing-with-effects
- https://react.dev/learn/manipulating-the-dom-with-refs
- https://santrikoding.com/belajar-react-dasar-10-useeffect
