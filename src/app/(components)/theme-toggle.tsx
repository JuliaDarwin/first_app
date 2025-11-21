"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default ThemeToggle;