"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

let cachedTheme = "dark";
const listeners = new Set();

function subscribe(callback) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot() {
  return cachedTheme;
}

function getServerSnapshot() {
  return "dark";
}

function readStoredTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  if (theme === cachedTheme) return;
  cachedTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  listeners.forEach((cb) => cb());
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    applyTheme(readStoredTheme());
  }, []);

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("theme", next);
    applyTheme(next);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span aria-hidden="true">{isDark ? "☀" : "☽"}</span>
    </button>
  );
}