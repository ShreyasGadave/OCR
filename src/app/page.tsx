"use client";
import { SidebarDemo } from "@/components/demo";
import FileDropzone from "@/components/FileDropzone";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Page() {
  const [fileBox, setFileBox] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent rendering on server → avoid hydration mismatch
    return (
      <Button
        variant="outline"
        size="icon"
        disabled
        aria-label="Toggle theme (loading)"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] opacity-0" />
      </Button>
    );
  }

  return (
    // <div className="p-10">
    //   <button
    //     onClick={() => setFileBox(true)}
    //     className="bg-amber-200 rounded-2xl px-4 py-2 shadow"
    //   >
    //     Upload file
    //   </button>

    //   {/* FileDropzone Modal */}
    //   {fileBox && (
    //     <div
    //       className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center"
    //       onClick={() => setFileBox(false)} // closes on background click
    //     >
    //       {/* Prevent close when clicking inside the box */}
    //       <div
    //         onClick={(e) => e.stopPropagation()}
    //         className="bg-white rounded-xl shadow-lg p-6"
    //       >
    //         <FileDropzone />
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
        )}
      </Button>
      <SidebarDemo />
    </div>
  );
}
