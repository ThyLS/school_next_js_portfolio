import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <div className="hero container">
        <h1>Rethy · Solech · Tree</h1>
        <p>
          A three-person crew: <strong>Rethy</strong> (developer),{" "}
          <strong>Solech</strong> (media), and <strong>Tree</strong>{" "}
          (photographer). We create web experiences, media content, and visual
          stories.
        </p>
        <div style={{ marginTop: 18 }}>
          <Link className="nav-link" href="/projects">See our work</Link>
          <Link className="nav-link" href="/contact" style={{ marginLeft: 8 }}>Contact</Link>
        </div>
      </div>
    </section>
  );
}