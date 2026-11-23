// src/app/api/likes/route.ts
import { connection } from "next/server";

let likes = 0; // lives in server memory, resets when the dev server restarts

export async function GET() {
  await connection(); // answer fresh every time, don't pre-build
  return Response.json({ likes });
}

export async function POST(request: Request) {
  const body = await request.json(); // read what the client sent
  const amount = Number(body.amount);

  if (!amount || amount < 1) {
    return Response.json(
      { error: "amount must be 1 or more" },
      { status: 400 },
    );
  }

  likes += amount;
  return Response.json({ likes });
}
