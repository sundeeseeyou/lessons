# Lesson 07 - useEffect and useRef

## Experience:

- Learn about useEffect and useRef
- useRef is similar to a selector in css or jquery, but it will automatically trigger something to the target that have attribute ref=""
  <!-- CORRECTION: useRef does NOT trigger anything by itself, and it doesn't "search" like a selector.
       Analogy: you hand the element a walkie-talkie (ref={inputRef}) when it appears.
       Later YOU call it when you need it: inputRef.current?.focus().
       jQuery = searching for someone in a crowd by name. useRef = they already hold your walkie-talkie. -->
- useEffect, as i understand, a sequence of effect that happen after something?
  <!-- CORRECTION: close! useEffect = "AFTER the screen is drawn, do this side job outside React".
       Analogy: a chef (React) plates the food (render). useEffect is the after-plating chores:
       update the tab title, start a timer, listen to the keyboard.
       The dependency array says WHEN to redo the chores. The cleanup says how to tidy up first. -->
- Learn how to use setInterval() and clearInterval()

## Implementation:

- preparation to useRef or useEffect `import { useRef , useEffect } from "react";` both hooks, must use the "use client";
- Syntax of useRef `const ref = useRef<TypeOfComponent>(null)`
  <!-- FIX: it's the type of the HTML ELEMENT, not a component: useRef<HTMLInputElement>, useRef<HTMLDivElement>, useRef<HTMLVideoElement>. -->
- Syntax of useEffect

`useEffect (() => {//logic/args},[])`

- The Array on useEffect can do these
  - Empty array, the effect execute for the first time
  - Array with function inside, will execute everytime changes happen (?)
  <!-- FIX: the array holds VALUES (state, props, variables), e.g. [count]. Runs once at the start,
       then again every time one of those values changes. -->

## Blockers:

- to understand the use of useEffect, i need more practice and challenges along with scenarios
- setInterval and clearInterval also need to be studied more

## Quiz Answers:

1. Berikut jawabannya:
   - Jika tanpa array brackets, kode didalamnya akan loop terus menerus, jarang dilakukan dan berbahaya
   - Jika Array kosong [], kode akan dijalankan di awal saja
   - Jika [variabel/function], maka kode akan dijalankan berulang-ulang selama memenuhi kriteria (?)
   <!-- CORRECTION (analogy: a security guard):
        - No array  = guard checks after EVERY render. Not an endless loop by itself,
                      but it becomes one if the effect sets state (set state → render → effect → set state ...).
        - []        = guard checks ONCE, when the shop opens (component appears).
        - [count]   = guard checks when the shop opens, then again ONLY when `count` changes.
                      Not "while a condition is met", it's "when this value changed since last render". -->

2. Saya tahu kalau tanpa interval, angka yang bertambah 2x lipat. Saya tidak tahu kenapa, bisa tlong koreksi, kasih komentar di sini?
   <!-- ANSWER ("tanpa interval" → you mean "tanpa CLEANUP"):
        In dev, React Strict Mode tests your effect on purpose: run effect → run cleanup → run effect again.
        Analogy: alarm clocks.
        - With cleanup: alarm #1 is set, cleanup turns alarm #1 OFF, alarm #2 is set → 1 alarm ringing → +1/sec.
        - Without cleanup: alarm #1 is set, nobody turns it off, alarm #2 is set → 2 alarms ringing → +2/sec.
        What cleanup does: it tidies up what the effect started (clearInterval stops the alarm)
        before the effect runs again, and when the component disappears.
        Strict Mode doesn't CAUSE the bug, it REVEALS it: in production, without cleanup the timer
        would keep running forever after you leave the page. -->

## References:

- https://react.dev/learn/synchronizing-with-effects
- https://react.dev/learn/manipulating-the-dom-with-refs
- https://santrikoding.com/belajar-react-dasar-10-useeffect
