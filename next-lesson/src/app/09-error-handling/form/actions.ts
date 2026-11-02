"use server";

export async function addName(
  prevState: { message: string },
  formData: FormData,
) {
  const data = formData.get("fullname") as string;

  // fake 1s delay so you can see `pending` (remove later)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { message: data === "" ? "Name is required" : `Saved: ${data}` };
}
