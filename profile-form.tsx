"use client";

import { trpc } from "@/trpc/react";
import { useState } from "react";

export default function ProfileForm() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("")

  const submit = trpc.shreya.submitProfile.useMutation();
  
  return (
    <div className="space-y-4">
      <input
        className="border p-2"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-2"
        placeholder="Enter skill"
        value={email}
        type="text"
        onChange={(e) => setemail((e.target.value))}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={() => submit.mutate({ name,email })}
      >
        Submit
      </button>

      {submit.isSuccess && <p>{submit.data.message}</p>}
    </div>
  );
}
