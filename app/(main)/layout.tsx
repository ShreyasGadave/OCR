import { Navbar } from "@/components/Navbar";

export default function ({ children }: { children: React.ReactNode }) {
  return <main className="px-8"> <Navbar/> {children}</main>;
}
