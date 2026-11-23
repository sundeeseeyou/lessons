import { connection } from "next/server";

export const todos: string[] = ["Indonesia", "Malaysia", "Cambodia"];

export async function GET() {
  await connection();
  return Response.json({ todos });
}

export async function POST(request: Request) {
  const body = await request.json();
  const item = body.item;
  console.log(item);

  if (!item || item.trim() === "") {
    return Response.json({ error: "Cannot be empty" }, { status: 400 });
  }

  todos.push(item);
  return Response.json({ todos });
}
