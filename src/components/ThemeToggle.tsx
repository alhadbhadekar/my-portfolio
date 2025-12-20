"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme | null) ?? "dark";
    setThemeState(saved);
    setTheme(saved);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    setTheme(next);
  };

  return (
    <button className="btn" onClick={toggle} type="button" aria-label="Toggle theme">
      {theme === "dark" ? "🌙" : "☀️"} <span className="small">{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
