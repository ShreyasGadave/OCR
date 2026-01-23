"use client";

import { trpc } from "@/trpc/react";
import { useState } from "react";

export default function ProfileForm() {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState(0);
  const [age, setage] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const submit = trpc.User.submit.useMutation();
  
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
        value={skill}
        type="number"
        onChange={(e) => setSkill(Number(e.target.value))}
      />

      <input
        className="border p-2"
        placeholder="Enter skill"
        value={age}
        type="number"
        onChange={(e) => setage(Number(e.target.value))}
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
        Active User
      </label>

      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={() => submit.mutate({ name, skill, age,isActive })}
      >
        Submit
      </button>

      {submit.isSuccess && <p>{submit.data.message}</p>}
    </div>
  );
}
