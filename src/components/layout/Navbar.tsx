"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const base = pathname === "/" ? "" : "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isExpanded = !isScrolled || isHovered;

    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const sections = ["about", "work", "contact"];

        const onScroll = () => {
            const scrollY = window.scrollY + 120; // offset voor navbar

            for (const section of sections) {
                const el = document.getElementById(section);
                if (!el) continue;

                const top = el.offsetTop;
                const height = el.offsetHeight;

                if (scrollY >= top && scrollY < top + height) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        onScroll(); // init
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinkClass = (section: string) => `
    relative transition-all duration-300 ease-out
    text-white/90
    ${isExpanded ? "text-sm px-4 py-2" : "text-xs px-3 py-1.5"}
    ${activeSection === section ? "text-white" : ""}
    `;

    return (
        <nav
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
      fixed top-0 left-0 z-50 w-full
      backdrop-blur-md
      transition-all duration-300 ease-out
      ${isExpanded ? "h-20" : "h-14"}
    `}
        >
            <div
                className={`
        mx-auto flex w-full max-w-5xl items-center
        transition-all duration-300 ease-out
        ${isExpanded ? "h-20 px-2" : "h-14 px-2"}
      `}
            >
                {/* Logo links */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.svg"
                        alt="Mirthe logo"
                        width={isExpanded ? 80 : 64}
                        height={isExpanded ? 60 : 48}
                        className="transition-all duration-300 ease-out"
                    />
                </Link>

                {/* andere items rechts */}
                <div
                    className={`
                    ml-auto flex items-center transition-all duration-300 ease-out
                    ${isExpanded ? "gap-8" : "gap-4"}
                    `}
                >
                    {/* Link style: kleiner bij scroll */}
                    <Link
                        href={`${base}#about`}
                        className={navLinkClass("about")}
                    >
                        About
                        <span
                            className={`
                            absolute left-1/2 -bottom-1 h-0.5 w-0 -translate-x-1/2
                            bg-[rgb(var(--accent))]
                            transition-all duration-300
                            ${activeSection === "about" ? "w-6" : ""}
                            `}
                        />
                    </Link>

                    <Link
                        href={`${base}#work`}
                        className={navLinkClass("work")}
                    >
                        Work
                        <span
                            className={`
                            absolute left-1/2 -bottom-1 h-0.5 w-0 -translate-x-1/2
                            bg-[rgb(var(--accent))]
                            transition-all duration-300
                            ${activeSection === "work" ? "w-6" : ""}
                            `}
                        />
                    </Link>

                    <Link
                        href={`${base}#contact`}
                        className={navLinkClass("contact")}
                    >
                        Contact
                        <span
                            className={`
                            absolute left-1/2 -bottom-1 h-0.5 w-0 -translate-x-1/2
                            bg-[rgb(var(--accent))]
                            transition-all duration-300
                            ${activeSection === "contact" ? "w-6" : ""}
                            `}
                        />
                    </Link>

                    {/* Resume button: ook mee schalen */}
                    <a
                        href="/Resume.pdf"
                        download
                        className={`
                        border-2 border-[rgb(var(--accent))]
                        font-semibold transition-all duration-300 ease-out
                        hover:bg-[rgb(var(--accent))] hover:text-[rgb(var(--bg))]
                        ${isExpanded ? "text-sm px-5 py-2 rounded-xl" : "text-xs px-4 py-1.5 rounded-lg"}
                        `}
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );

}
