import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
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
            <div className="container footer-inner">
              <span>
                <span className="accent-text">~/rst-crew</span> ©{" "}
                {new Date().getFullYear()}
              </span>
              <span>development · media · photography</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}