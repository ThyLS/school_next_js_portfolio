import Link from "next/link";

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">ruth-solech-tree / crew</p>
        <h1 className="hero-title">
          We build for the <span className="accent-line">open web.</span>
        </h1>
        <p>
          RST Crew is a three-person team covering <strong>development</strong>,{" "}
          <strong>media</strong>, and <strong>photography</strong>. We ship
          fast, clean web experiences and tell stories through code, motion,
          and light.
        </p>
        <p className="note">{"// frontend · media · visual storytelling"}</p>
        <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/projects">
            /projects
          </Link>
          <Link className="btn btn-outline" href="/team">
            /team
          </Link>
        </div>
      </div>

      <div className="terminal" aria-label="RST Crew terminal session">
        <div className="terminal-bar">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="title">~/rst-crew — zsh</span>
        </div>
        <div className="terminal-body">
          <div>
            <span className="prompt">❯</span> cat crew.json
          </div>
          <div className="out">{`{`}</div>
          <div className="out">
            &nbsp;&nbsp;{"\"crew\": [\"rethy\", \"solech\", \"tree\"],"}
          </div>
          <div className="out">
            &nbsp;&nbsp;{"\"stack\": [\"next.js\", \"react\", \"web\"],"}
          </div>
          <div className="out">
            &nbsp;&nbsp;{"\"ship\": \"fast & clean\""}
          </div>
          <div className="out">{`}`}</div>
          <div>
            <span className="prompt">❯</span> ./build && deploy
          </div>
          <div className="out">
            <span className="dim">OK</span> · build complete in 3.2s
          </div>
          <div className="out">
            <span className="dim">OK</span> · deployed to production{" "}
            <span className="out-prompt">
              ✦
            </span>
          </div>
          <div>
            <span className="prompt">❯</span> <span className="terminal-cursor" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}