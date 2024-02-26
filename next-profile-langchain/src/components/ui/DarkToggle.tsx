"use client";
import { Moon, MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Sun
        size={22}
        className="absolute rotate-90 scale-0 text-yellow-700 transition-all duration-500 dark:rotate-0 dark:scale-100"
      />
      <MoonStar
        size={22}
        className="text-bg-blue-500 rotate-0 scale-100 transition-all duration-500 dark:rotate-90 dark:scale-0"
      />
    </button>
  );
}
