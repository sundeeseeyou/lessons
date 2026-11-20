# Lesson 12 - useReducer

## Experience:

- useReducer digunakan sebagai alternative penggunaan useState jika logic nya terlalu rumit.
- Hooks ini sama seperti hook lient yang berjalan di sisi client.
  <!-- TYPO: "lient" -> "client". -->

## Implementation:

- Cara penggunaan useReducer bisa seperti ini

```
import { useReducer } from "react";

const [state, dispatch] = useReducer(reducer, initialArg, init?);

//gunakan juga switch() untuk menentukan output sesuai dengan case, pastikan diberi break agar tidak terjadi looping dan juga default dalam switch sebagai fallback.
// diperlukan juga untuk memanggil dispatch
```

  <!-- FIX: switch bukan looping, jadi tidak ada risiko looping. Di dalam reducer, setiap case biasanya langsung `return stateBaru;` sehingga `break` tidak diperlukan karena return langsung menyelesaikan fungsi. `default` case memang wajib/sangat disarankan mengembalikan current state sebagai fallback jika action tidak dikenali. -->

- pastikan initiate type terutama dalam epnggunaan typescript
  <!-- TYPO: "epnggunaan" -> "penggunaan". -->
- Pisahkan type ke dalam file src/types jika type itu digunakan di lebih dari 1 tempat

## Blockers:

- Karena syntaxnya yang cukup panjang, sulit untuk implement tanpa liat contekan

## Quiz Answers:

1. useReducer itu semacam hooks untuk mengatasi logic yang lebih kompleks dari useState yang umumnya cuman 1 perubahan per render. Dispatch itu semacam setXXX di useState, yang intinya bisa diassign value kedalamnya
   <!-- FIX & CLARIFICATION:
        1. "useState umumnya cuman 1 perubahan per render": useState juga bisa banyak perubahan, bedanya logika perubahannya tersebar di mana-mana (di tiap tombol/handler).
        2. Reducer: fungsi murni (state, action) => newState. Reducer yang memegang semua logika "bagaimana state berubah" di satu tempat terpusat.
        3. Dispatch: TIDAK meng-assign value langsung seperti setState(val). Dispatch mengirim nota/instruksi ("action" seperti `{ type: "add", payload }`). Komponen hanya bilang "tolong lakukan aksi X", lalu reducer yang memutuskan wujud akhir state-nya. -->
2. Saya pilih useReducer kalau sudah cukup kompleks logika yang dibutuhkan, bukan kaya toggle on off, useReducer bisa dipakai untuk bikin kalkulator mini yang mana tiap button operator berfungsi menambah, kurang, bagi, kali dlll
   <!-- ACCURATE, TAPI PERLU DILENGKAPI:
        Contoh kalkulator / keranjang belanja sudah pas. Kriteria utama memilih useReducer dari docs:
        1. Banyak aksi berbeda memodifikasi state yang sama (add, remove, clear, toggle).
        2. State baru bergantung pada state sebelumnya atau banyak state saling terkait (items, qty, total).
        3. Ingin memisahkan logika kalkulasi bisnis dari komponen UI agar lebih mudah di-test dan rapi. -->

## References:

- https://react.dev/reference/react/useReducer
