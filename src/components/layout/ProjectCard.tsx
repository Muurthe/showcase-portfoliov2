// src/components/work/ProjectCard.tsx
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href: string; // /projects/slug
};

export default function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-[rgb(var(--text))]">{title}</h3>
      <p className="mt-4 leading-relaxed text-white/80">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {tags.map((t) => (
          <span
            key={t}
            className="
              rounded-sm border border-white/10
              bg-white/5
              px-4 py-2 text-sm text-white/80
            "
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4">
        <Link
          href={href}
          className="
            inline-flex items-center justify-center
            rounded-sm border-2 border-[rgb(var(--accent))]
            px-5 py-3 font-semibold text-[rgb(var(--accent))]
            transition
            hover:bg-[rgb(var(--accent))] hover:text-[rgb(var(--bg))]
          "
        >
          Learn more
        </Link>

        
      </div>
    </div>
  );
}

