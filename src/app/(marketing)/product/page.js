import Link from "next/link";
import projects from "../../../data/projects";

export const metadata = {
  title: "Product",
};

const langColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572a5",
  Go: "#00add8",
};

export default function ProductPage() {
  return (
    <div>
      <div className="page-head">
        <p className="eyebrow">./products</p>
        <h1>Products</h1>
        <p>
          {"Things we've shipped — built to be used, not just shown."}
        </p>
      </div>

      <div className="grid">
        {projects.map((p) => {
          const langColor = langColors[p.language] ?? "#8b949e";
          return (
            <Link
              key={p.id}
              className="repo-card"
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <div className="repo-path">
                <span className="branch">⎇</span> {p.path}
              </div>
              <h3>{p.title}</h3>
              <div className="repo-desc">{p.description}</div>
              <div className="repo-meta">
                <span>
                  <span
                    className="lang-dot"
                    style={{ backgroundColor: langColor }}
                    aria-hidden="true"
                  />
                  {p.language}
                </span>
                <span>branch: {p.branch}</span>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}