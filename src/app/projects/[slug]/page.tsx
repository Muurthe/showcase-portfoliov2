// src/app/projects/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  introLabel: string;
  heroImages: { src: string; alt: string; className?: string }[];
  about: string;
  problem: string;
  solution: string;
  techStack: string[];
  techNote?: string;
  showcaseTitle: string;
  showcaseText: string;
  showcaseEmbedUrl?: string; // YouTube embed url
  reflection: string;
  githubUrl?: string;
  liveUrl?: string;
};

const PROJECTS: Project[] = [
  {
    slug: "cardan",
    title: "Cardan",
    subtitle: "experience square",
    introLabel: "Project",
    heroImages: [
      {
        src: "/projects/cardan/hero-desktop.png",
        alt: "Cardan desktop screenshot",
        className: "col-span-2",
      },
      {
        src: "/projects/cardan/hero-mobile.png",
        alt: "Cardan mobile screenshot",
        className: "col-span-1",
      },
    ],
    about:
      "Cardan (also known as Cardan Technobility) is a specialized knowledge and training center focused on digital accessibility. They help organizations meet WCAG 2.2 and European accessibility regulations.",
    problem:
      "Cardan wanted to create awareness in an impactful way by letting companies experience accessibility barriers. The challenge was translating a physical experience setup into a digital solution that still feels clear and interactive.",
    solution:
      "We designed and developed a digital experience that supports the physical setup and improves understanding of accessibility challenges. The solution includes multiple experience stations and clear interactions that guide visitors through the content.",
    techStack: ["Next.js", "TypeScript", "CSS", "Framer Motion"],
    techNote:
      "This was my first time working with this stack, which made the project both challenging and educational.",
    showcaseTitle: "Showcase",
    showcaseText:
      "The video below shows how users navigate through the stations and experience different accessibility scenarios.",
    // Tip: Use an embed link like: https://www.youtube.com/embed/VIDEO_ID
    showcaseEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reflection:
      "I learned how important clarity and structure are in accessibility-focused interfaces. I improved my component organization, learned to make interactions more purposeful, and gained confidence working with motion and layout.",
    githubUrl: "https://github.com/yourname/cardan",
    liveUrl: "https://example.com",
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

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20">
      <h2 className="text-[32px] font-extrabold text-[rgb(var(--text))]">
        {title}
      </h2>
      <div className="mt-6 text-white/80 leading-relaxed">{children}</div>
    </section>
  );
}

export default function ProjectDetailPage ({
  params,
}: {
  params: { slug: string };
}) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="pt-20">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        {/* Top header */}
        <p className="text-white/50">{project.introLabel}</p>

        <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-2">
          <h1 className="text-[64px] font-extrabold leading-[0.95] text-[rgb(var(--text))]">
            {project.title}
          </h1>
          <p className="text-[22px] font-semibold text-white/80">
            {project.subtitle}
          </p>
        </div>

        {/* Hero images */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* big image */}
          <div className="md:col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src={project.heroImages[0].src}
              alt={project.heroImages[0].alt}
              width={1400}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {/* small image */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src={project.heroImages[1].src}
              alt={project.heroImages[1].alt}
              width={700}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* About / Problem / Solution */}
        <Section title="About Cardan">
          <p>{project.about}</p>
        </Section>

        <Section title="Problem">
          <p>{project.problem}</p>
        </Section>

        <Section title="Solution">
          <p>{project.solution}</p>
        </Section>

        {/* Tech stack + small note */}
        <Section title="Tech stack">
          <ul className="list-disc pl-5 space-y-2">
            {project.techStack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          {project.techNote && (
            <p className="mt-6 text-white/60 text-sm">{project.techNote}</p>
          )}
        </Section>

        {/* Showcase */}
        <Section title={project.showcaseTitle}>
          <p>{project.showcaseText}</p>

          {project.showcaseEmbedUrl && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={project.showcaseEmbedUrl}
                  title="Project showcase video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* icons row like your screenshot */}
          <div className="mt-6 flex items-center gap-4 text-white/90">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="GitHub"
                title="GitHub"
              >
                <IconGithub className="h-6 w-6" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="Live"
                title="Live"
              >
                <IconExternal className="h-6 w-6" />
              </a>
            )}
          </div>
        </Section>

        {/* Reflection */}
        <Section title="Reflection">
          <p>{project.reflection}</p>
        </Section>

        {/* Bottom action */}
        <div className="mt-20">
          <Link
            href="/#work"
            className="text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white"
          >
            ← Back to selected work
          </Link>
        </div>
      </div>
    </main>
  );
}
