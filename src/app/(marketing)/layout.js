import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import SiteHeader from "./site-header";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: {
    default: "RST Crew — Developer Portfolio",
    template: "%s · RST Crew",
  },
  description:
    "RST Crew — a three-person team covering development, media, and photography. Building fast, clean web experiences.",
};

const footerNav = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/team", label: "team" },
  { href: "/contact", label: "contact" },
];

const footerContacts = [
  { label: "rethy", email: "thyls89@gmail.com" },
  { label: "solech", email: "solechlang@gmail.com" },
  { label: "tree", email: "tree@gmail.com" },
];

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <div className="site-root">
          <SiteHeader />
          <main className="container">{children}</main>
          <footer>
            <div className="container">
              <div className="footer-grid">
                {/* Brand */}
                <div className="footer-col footer-brand">
                  <div className="footer-logo">
                    <span className="path">~/</span>
                    <span className="tilde">RST-</span>
                    CREW
                  </div>
                  <p className="footer-tagline">
                    A three-person crew covering development, media, and
                    photography. We ship fast, clean web experiences and tell
                    stories through code, motion, and light.
                  </p>
                  <div className="footer-status">
                    <span className="status-dot" aria-hidden="true" />
                    <span>all systems operational</span>
                  </div>
                </div>

                {/* Navigate */}
                <div className="footer-col">
                  <div className="footer-heading">navigate</div>
                  <ul className="footer-links">
                    {footerNav.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>
                          <span className="footer-slash">/</span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="footer-col">
                  <div className="footer-heading">contact</div>
                  <ul className="footer-links">
                    {footerContacts.map((c) => (
                      <li key={c.email}>
                        <a href={`mailto:${c.email}`}>
                          <span className="footer-slash">@</span>
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social */}
                <div className="footer-col">
                  <div className="footer-heading">elsewhere</div>
                  <ul className="footer-links">
                    <li>
                      <a
                        href="https://github.com/ThyLS"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="footer-slash">↗</span>
                        github
                      </a>
                    </li>
                    <li>
                      <a href="mailto:thyls89@gmail.com">
                        <span className="footer-slash">↗</span>
                        email
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-bottom">
                <span>
                  <span className="accent-text">~/rst-crew</span> ©{" "}
                  {new Date().getFullYear()}
                </span>
                <span className="footer-built">
                  built with <span className="accent-text">Next.js</span> ·
                  development · media · photography
                </span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}