"use server";

import { todos } from "./todos";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
  const data = formData.get("title") as string;
  todos.push(data);
  revalidatePath("/05-mutating-data");
}
