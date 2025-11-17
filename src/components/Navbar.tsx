"use client";

import { Moon, Sun, Bell } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Policies", href: "/policies" },
    { label: "Documents", href: "/documents" },
    { label: "Reminders", href: "/reminders" },
    { label: "Clients", href: "/clients" },
    { label: "Agents", href: "/agents" },
  ];

  return (
    <nav className="w-full flex items-center justify-between  my-6  dark:bg-black  transition-colors">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo2.svg"
          alt="logo"
          width={120} // MUST MATCH FINAL DISPLAY SIZE
          height={120}
          loading="eager" // Fixes LCP warning
          priority // Optional → further optimizes
        />
      </div>
      <ul className="flex gap-6 text-gray-600 dark:text-gray-400 font-medium">
        {links.map((item) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`text-sm transition font-medium hover:text-black dark:hover:text-white cursor-pointer 
               ${isActive ? "underline underline-offset-4 text-black dark:text-white" : ""}

              `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Right Section */}
      <div className="flex items-center gap-1">
        {/* Theme Toggle */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="p-2 border rounded-xl dark:border-gray-700"
        >
          <Moon
            size={18}
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:scale-100 dark:rotate-0"
          />
          <Sun
            size={18}
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0 dark:-rotate-90"
          />

          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Notifications */}
        <button className="p-2 border rounded-xl dark:border-gray-700 dark:bg-gray-800">
          <Bell size={18} className="dark:text-gray-300" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user"
            className="w-9 h-9 border rounded-xl dark:border-gray-600"
          />
          <div className="leading-tight">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Anna D.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Manager</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
