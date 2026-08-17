import Image from "next/image";

export const metadata = {
  title: "Team",
};

const team = [
  {
    name: "Rethy",
    role: "Developer",
    bio: "Builds fast, clean web applications with React, Next.js, and modern tooling.",
    initials: "RT",
    photo: "/team/rethy.png",
  },
  {
    name: "Solech",
    role: "Media",
    bio: "Crafts engaging media content and motion graphics for digital platforms.",
    initials: "SL",
    photo: "/team/solech.png",
  },
  {
    name: "Tree",
    role: "Photographer",
    bio: "Captures stories through photography — portraits, events, and visual storytelling.",
    initials: "TR",
    photo: "/team/tree.png",
  },
];

export default function TeamPage() {
  return (
    <div>
      <div className="page-head">
        <p className="eyebrow">./crew members</p>
        <h1>Our Team</h1>
        <p>
          A three-person crew covering development, media, and photography.
          Hand-picked skills, one shared standard.
        </p>
      </div>

      <div className="grid">
        {team.map((m) => (
          <div key={m.name} className="team-card">
            <div className="team-photo">
              {m.photo ? (
                <Image
                  src={m.photo}
                  alt={`${m.name} — ${m.role}`}
                  className="team-img"
                  width={800}
                  height={600}
                />
              ) : (
                <span className="placeholder" aria-hidden="true">
                  [ photo — {m.initials} ]
                </span>
              )}
            </div>
            <div className="team-info">
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              <div className="team-bio">{m.bio}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}