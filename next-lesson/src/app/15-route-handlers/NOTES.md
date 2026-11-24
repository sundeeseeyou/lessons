# Lesson 15 - Route Handlers

## Experience:

- Penggunaan routes.ts didalam api/ folder bertujuan untuk mengaktifkan semacam backend dari dalam project next.js agar dapat diakses dari external menggunakan API.
- API yang disupport salah satunya dalam bentuk json
- Dengan fitur ini kamu bisa mengurangi penggunaan API dari backend cross framework

## Implementation:

- pastikan didalam project terdapat app/api/
- Nama folder dalam app/api juga penting karena akan menjadi title endpointnya jika terdapat route.ts
- Berikut hal-hal yang perlu diperhatian saat mengaktifkan route handler

```
import { connection } from "next/server"

//untuk melakukan await connection();
//selain itu pastikan juga untuk melakuan async function pada GET maupu POST dll.
```

- di next js, bisa pakai NextResponse ataupun bawaan HTTP Websocket Respose, dua-duanya dapat digunakan untuk membnerikan repsons dalam json, hanya NextResponse datang dengan bebrapa kelebihan seperti cookies dll.

### The POST flow (works the same in any backend: Next, Express, Laravel, Go)

**take → check → reject (400) / save → reply**

| Step      | What                      | In code                                                        |
| --------- | ------------------------- | -------------------------------------------------------------- |
| 1. Take   | read what the client sent | `const body = await request.json()` → `const item = body.item` |
| 2. Check  | is it valid?              | `if (!item \|\| item.trim() === "")`                           |
| 3. Reject | not valid → stop here     | `return Response.json({ error: "..." }, { status: 400 })`      |
| 4. Save   | valid → store it          | `todos.push(item)`                                             |
| 5. Reply  | send the result back      | `return Response.json({ todos })`                              |

- Steps 2–3 always come **before** step 4. Never trust client input: anyone (Bruno, Postman, a phone app) can send anything.
- `GET` is simpler: nothing to take or check, just reply with the data.

Terms to search for:

- **Request lifecycle**: parse → validate → process → respond
- **Input validation**: the "check" step
- **Never trust client input**: the reason behind the check
- **Fail fast / early return**: `return` the 400 as soon as something is wrong

### Why no `revalidatePath` here?

Short answer: **who draws the list decides how it gets updated.**

**Lesson 05 (server draws the list)**

- The server cooks the page and sends it ready-made, like a printed menu.
- After adding a todo, the printed menu is old. `revalidatePath` = "print a new menu".

**Lesson 15 (browser draws the list)**

- The list lives in `useState` inside a client component, like a whiteboard in your own hands.
- `POST /api/todos` already answers with the new list.
- So you just write it on the whiteboard yourself: `setTodos(data.todos)`. React redraws it. No reprint needed.

|                      | Lesson 05                                  | Lesson 15                              |
| -------------------- | ------------------------------------------ | -------------------------------------- |
| Who draws the list   | server component                           | client component                       |
| Where the list lives | on the server, inside the HTML             | in `useState` in the browser           |
| How it updates       | `revalidatePath` → server redraws the page | `setTodos(data.todos)` → React redraws |

Rule of thumb:

- Data shown by a **server component** → use `revalidatePath` after changing it.
- Data shown by a **client component** with `useState` → just call the setter with the new data.

### Why not `String(body.item)`?

- `String(undefined)` turns "nothing" into the text `"undefined"`, and that text is not empty, so it passes the check and lands in the list.
- Use `body.item` as it is. If the key is missing or wrong, it stays `undefined`, `!item` is `true`, and the client gets a 400.

## Blockers:

- Perlu belajar lebih lagi, bukan hanya get dan post, tapi put, patch, delete dll.
- Harus banyak-banyak belajar perihal API, websocket, disertai bearer token dll

## Quiz Answers:

A1. Lesson - 005 fokus memanfaatkan fungsi form, dan data disimpan di array kosong. Memerlukan form. Sedangkan API fokus memanfaatkan cara kerja api dan route.ts yang dapat melakukan get dan juga post

<!--
JAWABAN BENAR A1:
- Server action (lesson 05): dipakai kalau yang mengirim data adalah form di dalam app Next.js kita sendiri.
  Praktis, tidak perlu bikin URL, dan setelah data berubah bisa langsung `revalidatePath`.
- Route handler / API (lesson 15): dipakai kalau yang butuh data adalah pihak LUAR atau yang bukan form.
  Contoh: Postman, mobile app (Flutter), app lain, webhook, atau client component yang fetch sendiri.
  Punya URL tetap + method HTTP (GET/POST/dst) + status code (200/400).
- Singkatnya: "form di app sendiri" -> server action. "Client luar / butuh URL publik" -> API.
-->

A2. karena route.ts itu wajib ada di folder api, yang mana bisa dibilang sisi backend sedangkan sisi page.tsx bisa terlihat oleh klien

<!--
JAWABAN BENAR A2:
- `route.ts` TIDAK wajib di folder `api/`. Folder `api/` cuma kebiasaan/konvensi. route.ts boleh di folder mana saja di dalam `app/`.
- Alasan sebenarnya tidak bisa satu folder: `page.tsx` dan `route.ts` sama-sama mengklaim URL yang SAMA.
  `page.tsx` menjawab dengan UI (HTML), `route.ts` menjawab dengan data (JSON).
  Next tidak tahu harus kirim yang mana, jadi dilarang (error konflik).
- Makanya route handler ditaruh di `app/api/...` supaya URL-nya tidak bentrok dengan page.
-->

A3. Karena hanya dengan connection() API dari eksternal bisa menampilkan respons. Sesuai aturan pemilik aplikasi

<!--
JAWABAN BENAR A3:
- `connection()` BUKAN soal izin akses dari luar.
- Fungsinya memberi tahu Next: "jangan jalankan ini saat build / jangan di-cache, jalankan SETIAP ada request".
- Tanpa itu, GET yang tidak membaca request bisa dianggap statis: hasilnya dibuat sekali saat build,
  jadi todo baru yang ditambah lewat POST tidak muncul di GET (list-nya "beku").
- Dengan `await connection()`, `todos` dibaca ulang tiap request, jadi selalu terbaru.
-->

<!--
FIX KECIL (tabel di atas): di kode sebenarnya state-nya bernama `item` / `setItem`, bukan `todos` / `setTodos`.
Kodenya: `setItem(data.todos)`. Konsepnya sama. Kalau mau rapi, rename state `item` -> `todos` di ItemList.tsx.
-->



## References:

https://nextjs.org/docs/app/getting-started/route-handlers
https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
