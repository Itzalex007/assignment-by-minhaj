"use client"
import { useState } from "react";

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDark);
  };

  return (
    <div className={`min-h-screen ${isDark ? "dark bg-gray-900" : "bg-white"}`}>
      <header className="p-4 bg-gray-200 dark:bg-gray-800 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Multi-Step Form
        </h1>
        <button
          className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
      </header>
      <main className="p-4">{children}</main>
      <footer className="p-4 bg-gray-200 dark:bg-gray-800 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © 2024 Multi-Step Form
        </p>
      </footer>
    </div>
  );
}
