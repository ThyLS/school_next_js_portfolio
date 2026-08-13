import Link from "next/link";
import projects from "../../../data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <p>Selected work from our crew — developer builds, media projects, and photo stories.</p>
      <div className="product-grid">
        {projects.map((p) => (
          <Link key={p.id} className="card" href={p.href} target="_blank">
            <strong>{p.title}</strong>
            <div style={{ marginTop: 8 }}>{p.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}