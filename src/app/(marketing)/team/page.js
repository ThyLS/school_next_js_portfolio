export default function TeamPage() {
  const team = [
    {
      name: "Rethy",
      role: "Developer",
      bio: "Builds fast, clean web applications with React, Next.js, and modern tooling.",
    },
    {
      name: "Solech",
      role: "Media",
      bio: "Crafts engaging media content and motion graphics for digital platforms.",
    },
    {
      name: "Tree",
      role: "Photographer",
      bio: "Captures stories through photography — portraits, events, and visual storytelling.",
    },
  ];

  return (
    <div>
      <h1>Our Team</h1>
      <p>A three-person crew covering development, media, and photography.</p>
      <div className="product-grid">
        {team.map((m) => (
          <div key={m.name} className="card">
            <strong>{m.name}</strong>
            <div style={{ marginTop: 4, fontStyle: "italic" }}>{m.role}</div>
            <div style={{ marginTop: 8 }}>{m.bio}</div>
          </div>
        ))}
      </div>
    </div>
  );
}