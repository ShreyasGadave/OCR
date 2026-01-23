"use client";

import { trpc } from "@/trpc/react";

export default function ClientGreetings() {
  const [res] = trpc.hello.useSuspenseQuery({ text: "Shreyas Gadave" });
  return <div>{res.greeting}</div>;
}
