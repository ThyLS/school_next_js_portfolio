const projects = [
  {
    id: "p1",
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    description:
      "Production-grade portfolio site built with Next.js — server components, dynamic routing, and a custom design system.",
    href: "/projects/portfolio-platform",
    path: "rst-crew/portfolio-platform",
    language: "JavaScript",
    langColor: "#f1e05a",
    branch: "main",
    owner: "Rethy",
    role: "Developer",
    year: "2026",
    stack: ["Next.js", "React", "CSS"],
    summary:
      "A full portfolio platform for the RST Crew — designed, built, and deployed from scratch. Focused on performance, accessibility, and a distinctive visual identity.",
    media: [],
  },
  {
    id: "p2",
    slug: "motion-reel",
    title: "Motion Reel 2026",
    description:
      "A curated showreel of motion graphics, kinetic type, and short-form video pieces crafted for digital platforms.",
    href: "/projects/motion-reel",
    path: "solech/motion-reel",
    language: "After Effects",
    langColor: "#9999ff",
    branch: "media",
    owner: "Solech",
    role: "Media",
    year: "2026",
    stack: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
    summary:
      "A showreel of motion design work — kinetic typography, logo animations, and short-form video content built for social and web platforms.",
    media: [
      {
        type: "video",
        src: "/media/motion-reel-1.mp4",
        title: "Showreel — Main Cut",
      },
      {
        type: "video",
        src: "/media/motion-reel-2.mp4",
        title: "Kinetic Type Study",
      },
    ],
  },
  {
    id: "p3",
    slug: "portrait-series",
    title: "Portrait & Event Series",
    description:
      "A visual story told through portraits and event photography — light, expression, and real moments.",
    href: "/projects/portrait-series",
    path: "tree/portrait-series",
    language: "Lightroom",
    langColor: "#31a8ff",
    branch: "photo",
    owner: "Tree",
    role: "Photographer",
    year: "2026",
    stack: ["Lightroom", "Photoshop", "Fujifilm X-T5"],
    summary:
      "A photography series capturing portraits and events — natural light, candid moments, and the stories people carry.",
    media: [
      {
        type: "image",
        src: "/media/portrait-1.jpg",
        title: "Portrait — Golden Hour",
      },
      {
        type: "image",
        src: "/media/portrait-2.jpg",
        title: "Event — Stage Light",
      },
      {
        type: "image",
        src: "/media/portrait-3.jpg",
        title: "Portrait — Studio",
      },
    ],
  },
];

export default projects;