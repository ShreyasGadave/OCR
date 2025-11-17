import { Navbar } from "@/components/Navbar";

export default function ({ children }: { children: React.ReactNode }) {
  return <main> <Navbar/> {children}</main>;
}
