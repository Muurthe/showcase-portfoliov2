import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/components/icons/GithubIcon";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";

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
    tags: ["Next.js", "TypeScript", "CSS", "Framer Motion"],
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
                <p className="leading-relaxed">{p.description}</p>
              </div>

              {/* Tags bottom-left like in screenshot */}
              <div className="mt-8 flex flex-wrap gap-10 text-[14px] font-semibold text-white/90">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="relative pb-10">
              {/* Image */}
              <div className="relative rounded-sm border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
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
              <div className="mt-6 flex items-center justify-end gap-4">
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open GitHub repository"
                    title="GitHub"
                    className="opacity-80 transition hover:opacity-100"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                )}

                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open live project"
                    title="Live"
                    className="opacity-80 transition hover:opacity-100"
                  >
                    <ExternalLinkIcon className="h-3 w-3" />
                  </a>
                )}
              </div>

              {/* Learn more — ONLY for Cardan */}
              {p.slug === "cardan" && (
                <div className="mt-4 flex justify-end">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="
                      inline-flex items-center justify-center
                      rounded-xl border-2 border-[rgb(var(--accent))]
                      px-6 py-3 font-semibold text-[rgb(var(--accent))]
                      transition
                      hover:bg-[rgb(var(--accent))] hover:text-[rgb(var(--bg))]
                    "
                  >
                    Learn more
                  </Link>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
