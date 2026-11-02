"use server";

import { revalidatePath } from "next/cache";

const nameList = [];

export async function addName(formData: FormData) {
  const data = formData.get("fullname") as string;
  if (data === "" ? "Name is required" : `Saved: ${data}`) {
    nameList.push(data);
  }
  console.log(data);

  revalidatePath("/09-error-handling/");
}
