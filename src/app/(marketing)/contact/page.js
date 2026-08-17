export const metadata = {
  title: "Contact",
};

const contacts = [
  {
    name: "Rethy",
    role: "Developer",
    email: "thyls89@gmail.com",
  },
  {
    name: "Solech",
    role: "Media",
    email: "solechlang@gmail.com",
  },
  {
    name: "Tree",
    role: "Photographer",
    email: "tree@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <div>
      <div className="page-head">
        <p className="eyebrow">./contact</p>
        <h1>Contact</h1>
        <p>
          Open to project work, collaborations, and conversations. Reach out to
          any of us — we usually reply within a day.
        </p>
      </div>

      <div className="contact-actions">
        <a className="btn btn-primary" href="mailto:thyls89@gmail.com">
          → email us
        </a>
        <a
          className="btn btn-outline"
          href="https://github.com/ThyLS"
          target="_blank"
          rel="noopener noreferrer"
        >
          → github
        </a>
      </div>

      <div className="contact-card" aria-label="Contact information">
        {contacts.map((c) => (
          <div key={c.email}>
            <div>
              <span className="prompt">❯</span> {c.name}{" "}
              <span className="dim">({c.role})</span>
            </div>
            <div>
              &nbsp;&nbsp;
              <a href={`mailto:${c.email}`}>{c.email}</a>
            </div>
          </div>
        ))}
        <div>
          <span className="prompt">❯</span> response time
        </div>
        <div className="out">&nbsp;&nbsp;~24h</div>
      </div>
    </div>
  );
}