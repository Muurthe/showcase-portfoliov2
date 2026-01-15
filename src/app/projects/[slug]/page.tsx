import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GithubIcon from "@/components/icons/GithubIcon";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  subdiscription: string;
  introLabel: string;
  heroImages: { src: string; alt: string; className?: string }[];
  about: string;
  problem: string;
  solution: string;
  techStack: string[];
  techNote?: string;
  showcaseTitle: string;
  showcaseText: string;
  showcaseVideoSrc?: string;
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
    subdiscription: "A digital accessibility experience to raise awareness through interaction",
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
    showcaseVideoSrc: "/projects/cardan/showcase.mp4",

    reflection:
      "I learned how important clarity and structure are in accessibility-focused interfaces. I improved my component organization, learned to make interactions more purposeful, and gained confidence working with motion and layout.",
    githubUrl: "https://github.com/yourname/cardan",
    liveUrl: "https://example.com",
  },
];



function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-30">
      <h2 className="text-5xl font-extrabold text-[rgb(var(--text))]">
        {title}
      </h2>
      <div className="text-lg mt-6 max-w-prose text-white/80 leading-relaxed">
        {children}
      </div>

    </section>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="pt-20">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        {/* Top header */}
        <p className="text-3xl text-[rgb(var(--muted))]">{project.introLabel}</p>

        <div className="mt-1 flex flex-wrap items-end gap-x-4 gap-y-2">
          <h1 className="text-9xl font-extrabold leading-[0.95] text-[rgb(var(--text))]">
            {project.title}
          </h1>
          <p className="text-4xl text-[rgb(var(--text))]">
            {project.subtitle}
          </p>
          <p className="text-lg w-full text-[rgb(var(--text))] mt-2">{project.subdiscription}</p>
        </div>

        {/* Hero images */}
        <div className="relative mt-10 mb-50">
          <div className="relative z-10 overflow-hidden">
            <Image
              src="/projects/cardan/hero-desktop.png"
              alt="Desktop view"
              width={1200}
              height={900}
              className="w-230 h-auto object-cover"
              priority
            />
          </div>

          <div
            className="
            absolute
            left-210
            top-20
            z-20
            w-60
            overflow-hidden
            "
          >
            <Image
              src="/projects/cardan/hero-mobile.png"
              alt="Mobile view"
              width={400}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <Section title="About Cardan">
          <p>{project.about}</p>
        </Section>

        <Section title="Problem">
          <p>{project.problem}</p>
        </Section>

        <Section title="Solution">
          <p>{project.solution}</p>
        </Section>

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

        <Section title={project.showcaseTitle}>
          <p>{project.showcaseText}</p>

          {project.showcaseVideoSrc && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <video
                src={project.showcaseVideoSrc}
                className="aspect-video w-full"
                controls
                muted
                playsInline
                preload="metadata"
              />
            </div>
          )}



          <div className="mt-6 flex items-center gap-4 text-white/90">
            {project.githubUrl && (
              <a
                href="https://github.com/jarvin-s/cardan"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="GitHub"
                title="GitHub"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href="https://cardan-groep-1.vercel.app/nl"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="Live"
                title="Live"
              >
                <ExternalLinkIcon className="h-6 w-6" />
              </a>
            )}
          </div>
        </Section>

        <Section title="Reflection">
          <p>{project.reflection}</p>
        </Section>

        <div className="mt-20">
          <Link
            href="/#work"
            className="text-[rgb(var(--text))] underline decoration-white/30 underline-offset-4 hover:text-white"
          >
            ← Back to selected work
          </Link>
        </div>
      </div>
    </main>
  );
}
