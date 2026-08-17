"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/team", label: "team" },
  { href: "/contact", label: "contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header>
      <div className="container site-header">
        <Link href="/" className="brand">
          <span className="path">~/</span>
          <span className="tilde">RST-</span>
          CREW
          <span className="cursor" aria-hidden="true" />
        </Link>
        <div className="header-right">
          <nav>
            {links.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="slash">/</span>
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}