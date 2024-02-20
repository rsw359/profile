"use client";
import { Moon, MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Sun
        size={22}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <MoonStar
        size={22}
        className="rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"
      />
    </button>
  );
}
