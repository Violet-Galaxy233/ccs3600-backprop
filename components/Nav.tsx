"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const ITEMS = [
  { href: "/", key: "home" },
  { href: "/lecture", key: "lecture" },
  { href: "/video", key: "video" },
  { href: "/quiz", key: "quiz" },
  { href: "/resources", key: "resources" },
  { href: "/report", key: "report" },
  { href: "/prompts", key: "prompts" },
  { href: "/making-of", key: "makingOf" },
] as const;

export default function Nav({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center gap-4 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="shrink-0 text-base font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="gradient-text">{tc("brand")}</span>
          <span className="ml-2 hidden text-xs font-medium text-fg-muted sm:inline">
            {tc("courseCode")}
          </span>
        </Link>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {ITEMS.map((it) => (
            <li key={it.key}>
              <Link
                href={it.href}
                className={`rounded-lg px-3 py-2 text-sm transition-colors hover:bg-panel ${
                  isActive(it.href)
                    ? "text-cyan font-medium"
                    : "text-fg-muted"
                }`}
              >
                {t(it.key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto lg:ml-2">
          <LanguageSwitcher locale={locale} />
        </div>

        <button
          type="button"
          className="rounded-lg border border-border p-2 lg:hidden"
          aria-expanded={open}
          aria-label={open ? tc("closeMenu") : tc("openMenu")}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="block text-lg leading-none">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-border px-5 py-2 lg:hidden">
          {ITEMS.map((it) => (
            <li key={it.key}>
              <Link
                href={it.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm ${
                  isActive(it.href)
                    ? "bg-panel text-cyan font-medium"
                    : "text-fg-muted"
                }`}
              >
                {t(it.key)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
