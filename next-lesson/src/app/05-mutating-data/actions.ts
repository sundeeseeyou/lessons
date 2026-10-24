// - Belum di-export. Page tidak akan bisa meng-import addTodo.
// - Belum async. Di file "use server", semua function yang di-export wajib async. Kalau tidak, Next.js akan error.
// - Nama parameter FormData. Nama itu bentrok dengan nama tipenya sendiri (FormData: FormData). Pakai huruf kecil: formData.
// - Hasil get("title") dibuang. Hasilnya tidak disimpan ke variabel dan tidak di-push. todos dari ./todos juga belum di-import.
// - revalidatePath belum ada. Function ini di-import dari "next/cache".

"use server";

import { todos } from "./todos";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
  const data = formData.get("title") as string;
  todos.push(data);
  revalidatePath("/05-mutating-data");
}
