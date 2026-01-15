import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string; 
  imageAlt: string;
  slug: string; // /projects/[slug]
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: "Cardan",
    description:
      "Interactive web application translating Cardan’s five physical experience stations designed to raise awareness of disabilities into an accessible digital experience.",
    tags: ["Next.js"],
    imageSrc: "/cardan.png",
    imageAlt: "Cardan project screenshot",
    slug: "cardan",
    githubUrl: "https://github.com/jarvin-s/cardan",
    liveUrl: "https://cardan-groep-1.vercel.app/nl",
  },
  {
    title: "Roomfolio",
    description:
      "Interactive 3D roomfolio that functions as an online portfolio, allowing users to navigate a virtual room and interact with objects showcasing my web projects.",
    tags: ["Blender", "Three.js"],
    imageSrc: "/roomfolio.png",
    imageAlt: "Roomfolio project screenshot",
    slug: "roomfolio",
    githubUrl: "https://github.com/Muurthe/Roomfolio",
    liveUrl: "https://i562854.hera.fontysict.net/Roomfolio/",
  },
];

function IconGithub(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.75 5.6.75 12c0 5.2 3.44 9.6 8.2 11.16.6.12.82-.27.82-.58v-2.1c-3.34.75-4.04-1.46-4.04-1.46-.54-1.42-1.33-1.8-1.33-1.8-1.1-.78.08-.76.08-.76 1.2.09 1.84 1.27 1.84 1.27 1.08 1.9 2.84 1.35 3.54 1.03.11-.8.42-1.35.76-1.66-2.66-.31-5.46-1.37-5.46-6.1 0-1.35.47-2.45 1.24-3.31-.12-.31-.54-1.57.12-3.27 0 0 1.01-.33 3.3 1.26.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.59 3.3-1.26 3.3-1.26.66 1.7.24 2.96.12 3.27.77.86 1.24 1.96 1.24 3.31 0 4.74-2.8 5.78-5.47 6.09.43.38.82 1.12.82 2.27v3.37c0 .31.22.7.82.58C19.81 21.6 23.25 17.2 23.25 12 23.25 5.6 18.27.5 12 .5Z"
      />
    </svg>
  );
}

function IconExternal(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path
        fill="currentColor"
        d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h7v2H7v10h10v-5h2v7H5V5Z"
      />
    </svg>
  );
}

export default function Work() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-28">
      <h2 className="text-[72px] font-extrabold leading-[0.95] text-[rgb(var(--text))]">
        Selected work
      </h2>

      <div className="mt-20 space-y-28">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="grid items-start gap-14 md:grid-cols-[420px_1fr]"
          >
            {/* Left column */}
            <div>
              <h3 className="text-[56px] font-extrabold leading-[0.95] text-[rgb(var(--text))]">
                {p.title}
              </h3>

              {/* Description block */}
              <div className="mt-6 w-full max-w-90 rounded-sm bg-[rgb(var(--surface))] p-6 text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <p className="text-[14px] leading-relaxed">{p.description}</p>
              </div>

              {/* Tags bottom-left like in screenshot */}
              <div className="mt-8 flex flex-wrap gap-10 text-[14px] font-semibold text-white/90">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="relative">
              {/* Offset block behind image */}
              <div className="absolute bottom-20 left-5 h-[80%] w-full rounded-sm bg-[rgb(var(--surface))]" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-sm border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
                <Image
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  priority={p.slug === "cardan"}
                />
              </div>

              {/* Bottom-right actions */}
              <div className="mt-2 flex items-center justify-end gap-4">
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/90 hover:text-white transition"
                    aria-label="Open GitHub repository"
                    title="GitHub"
                  >
                    <IconGithub className="h-6 w-6" />
                  </a>
                )}

                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/90 hover:text-white transition"
                    aria-label="Open live project"
                    title="Live"
                  >
                    <IconExternal className="h-6 w-6" />
                  </a>
                )}
              </div>

              {/* Learn more button bottom-right */}
              <div className="mt-4 flex justify-end">
                <Link
                  href={`/projects/${p.slug}`}
                  className="
                    inline-flex items-center justify-center
                    rounded-xl border-2 border-[rgb(var(--surface))]
                    px-6 py-3 font-semibold text-[rgb(var(--surface))]
                    transition
                    hover:bg-[rgb(var(--surface))] hover:text-[rgb(var(--bg))]
                  "
                >
                  Learn more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
