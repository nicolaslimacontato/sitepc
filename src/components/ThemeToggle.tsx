"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative">
      <div className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-full p-1">
        <button
          onClick={() => setTheme("light")}
          className={`p-2 rounded-full transition-all ${
            theme === "light"
              ? "bg-white text-yellow-600 shadow-md"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          }`}
          title="Modo Claro"
        >
          <span className="text-lg">☀️</span>
        </button>

        <button
          onClick={() => setTheme("system")}
          className={`p-2 rounded-full transition-all ${
            theme === "system"
              ? "bg-white text-blue-600 shadow-md"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          }`}
          title="Seguir Sistema"
        >
          <span className="text-lg">💻</span>
        </button>

        <button
          onClick={() => setTheme("dark")}
          className={`p-2 rounded-full transition-all ${
            theme === "dark"
              ? "bg-gray-800 text-blue-400 shadow-md"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          }`}
          title="Modo Escuro"
        >
          <span className="text-lg">🌙</span>
        </button>
      </div>
    </div>
  );
}
