import Link from "next/link";
import "../globals.css";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div>
          <header>
            <div className="container site-header">
              <div className="brand">
                <Link href="/">RST Crew</Link>
              </div>
              <nav>
                <Link className="nav-link" href="/">Home</Link>
                <Link className="nav-link" href="/projects">Projects</Link>
                <Link className="nav-link" href="/team">Team</Link>
                <Link className="nav-link" href="/contact">Contact</Link>
              </nav>
            </div>
          </header>
          <main className="container">{children}</main>
          <footer>
            <div className="container">© {new Date().getFullYear()} RST Crew</div>
          </footer>
        </div>
      </body>
    </html>
  );
}