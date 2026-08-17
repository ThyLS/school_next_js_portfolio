export const metadata = {
  title: "About",
};

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "CSS",
  "TypeScript",
  "Node.js",
];

export default function AboutPage() {
  return (
    <div>
      <div className="page-head">
        <p className="eyebrow">whoami</p>
        <h1>About</h1>
      </div>

      <section className="about-section">
        <h2>Developer. Builder. Problem-solver.</h2>
        <p>
          {"I'm a developer focused on creating clear and useful web experiences. I enjoy building small projects, learning new technologies, and contributing to open source."}
        </p>
        <p>
          My work lives at the intersection of code and craft — shipping
          interfaces that feel fast, look intentional, and hold up under real
          use.
        </p>
        <hr className="hr-rule" />

        <h2>Stack & Skills</h2>
        <div className="chip-row">
          {skills.map((s) => (
            <span key={s} className="chip">
              <span className="hash">#</span>
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}