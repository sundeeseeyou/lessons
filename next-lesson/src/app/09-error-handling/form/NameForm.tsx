"use client";
import { useActionState, startTransition, act } from "react";
import { addName } from "./actions";

export default function NameForm() {
  const [state, action, pending] = useActionState(addName, { message: "" });
  return (
    <>
      <form
        action={action}
        method="post"
        className="flex flex-col justify-start items-start gap-2 px-6 py-4 bg-gray-200"
      >
        <label htmlFor="fullname">Fullname</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="E.g. John Doe"
          className="bg-white px-2 py-1 border rounded-sm"
        />
        <button
          type="submit"
          disabled={pending}
          className="bg-black rounded-sm mt-4 text-white px-3 py-1"
        >
          {pending ? "Saving ..." : "Post"}
        </button>
        <p>{state.message}</p>
      </form>
    </>
  );
}
