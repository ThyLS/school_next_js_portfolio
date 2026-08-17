import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "../../../../data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const hasMedia = project.media && project.media.length > 0;

  return (
    <div>
      <div className="page-head">
        <p className="eyebrow">
          <Link href="/projects" className="back-link">
            ← /projects
          </Link>
          <span className="eyebrow-sep">/</span>
          {project.path}
        </p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </div>

      {/* Meta row */}
      <div className="project-meta">
        <div className="meta-item">
          <span className="meta-label">owner</span>
          <span className="meta-value">{project.owner}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">role</span>
          <span className="meta-value">{project.role}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">year</span>
          <span className="meta-value">{project.year}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">branch</span>
          <span className="meta-value meta-mint">{project.branch}</span>
        </div>
      </div>

      {/* Stack chips */}
      <div className="chip-row">
        {project.stack.map((s) => (
          <span key={s} className="chip">
            <span className="hash">#</span>
            {s}
          </span>
        ))}
      </div>

      <hr className="hr-rule" />

      {/* Media gallery */}
      <h2>Gallery</h2>
      {hasMedia ? (
        <div className="media-grid">
          {project.media.map((m, i) => (
            <div key={i} className="media-card">
              {m.placeholder || !m.src ? (
                <div className="media-placeholder">
                  <span className="media-icon" aria-hidden="true">
                    {m.type === "video" ? "▶" : "◻"}
                  </span>
                  <span className="media-label">
                    {m.type === "video" ? "[ video ]" : "[ photo ]"}
                  </span>
                  <span className="media-title">{m.title}</span>
                  <span className="media-note">drop media here</span>
                </div>
              ) : m.type === "video" ? (
                <video
                  className="media-video"
                  src={m.src}
                  controls
                  preload="metadata"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="media-image" src={m.src} alt={m.title} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="media-empty">
          <p>
            This project is code-focused — no media gallery yet. Check back
            soon.
          </p>
        </div>
      )}

      <div style={{ marginTop: 40 }}>
        <Link className="btn btn-outline" href="/projects">
          ← back to projects
        </Link>
      </div>
    </div>
  );
}