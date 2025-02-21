"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="header">
      <button
        className="btn btn-label btn-large"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {resolvedTheme === "light"
          ? "Current Mode: Light Mode ☀️"
          : "Current Mode: Dark Mode 🌙"}
      </button>
    </header>
  );
}
