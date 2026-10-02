"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

const themeInitScript = `try{if(localStorage.getItem("${STORAGE_KEY}")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`;

/**
 * Applies a saved dark preference before first paint, so it never flashes
 * light. Light is the default. Render once, in the root layout's <head>.
 *
 * The browser runs the server-rendered copy. React never executes scripts it
 * renders on the client and warns when it creates one, so the client copy is
 * an inert data block (`type="text/plain"`).
 */
export function ThemeScript() {
  const isServer = typeof window === "undefined";
  return (
    <script
      type={isServer ? undefined : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: themeInitScript }}
    />
  );
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function setTheme(theme: Theme) {
  if (theme === "dark") document.documentElement.dataset.theme = "dark";
  else delete document.documentElement.dataset.theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage unavailable (e.g. private mode); the choice lasts for this page only.
  }
}

export function ThemeToggle() {
  // Server render assumes light; the client snapshot takes over after hydration.
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as const);
  const next = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <Button
      variant="ghost"
      size="sm"
      className="size-8 px-0 text-muted hover:text-foreground"
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      onClick={() => setTheme(next)}
    >
      <Icon aria-hidden />
    </Button>
  );
}
