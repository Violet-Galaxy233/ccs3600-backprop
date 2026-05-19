import Link from "next/link";
import "./globals.css";

// Global fallback for requests that never reach the [locale] segment.
// It must render its own <html>/<body> because there is no root layout.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col items-center justify-center gap-4 text-center">
        <p className="text-6xl font-extrabold gradient-text">404</p>
        <h1 className="text-2xl font-bold">Page not found</h1>
        <Link
          href="/en"
          className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white"
        >
          Go to home
        </Link>
      </body>
    </html>
  );
}
