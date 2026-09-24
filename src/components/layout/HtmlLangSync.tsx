"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * The root layout's <html lang> is fixed at "en-MY" because Header/Footer and
 * every non-/ms route depend on it. Pages under /ms are genuinely Malay, so
 * this corrects the attribute client-side once the route is known — Google's
 * renderer executes JS before evaluating the page, so this still counts.
 */
export default function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    const onMsPage = pathname === "/ms" || pathname.startsWith("/ms/");
    document.documentElement.lang = onMsPage ? "ms-MY" : "en-MY";
  }, [pathname]);

  return null;
}
