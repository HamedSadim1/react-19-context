"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" disabled>
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      className="hover:bg-accent/50 relative h-9 w-9 rounded-full transition-all duration-200"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        className={`h-[1.15rem] w-[1.15rem] transition-all duration-300 ${
          isDark ? "scale-100 rotate-0" : "scale-0 rotate-90"
        }`}
      />
      <Moon
        className={`absolute h-[1.15rem] w-[1.15rem] transition-all duration-300 ${
          isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
