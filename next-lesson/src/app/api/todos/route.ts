import { connection } from "next/server";

export const todos: string[] = [];
// FIX: hapus `export`. route.ts hanya boleh meng-export GET/POST/PUT/dst (dan config route),
// kalau tidak `next build` bisa error. Tidak ada file lain yang meng-import `todos`, jadi aman.
// const todos: string[] = [];

export async function GET() {
  await connection();
  return Response.json({ todos });
}

export async function POST(request: Request) {
  const body = await request.json();
  const item = body.item;

  if (!item || item.trim() === "") {
    return Response.json({ error: "Cannot be empty" }, { status: 400 });
  }

  todos.push(item);
  return Response.json({ todos });
}
