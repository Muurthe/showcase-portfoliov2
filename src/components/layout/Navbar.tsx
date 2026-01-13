"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const base = pathname === "/" ? "" : "/";

    return (
        <nav
            className="
        fixed top-0 left-0 z-50 w-full
        bg-[rgb(var(--bg))]
        shadow-[0_3px_10px_rgba(0,0,0,0.35)]
        "
        >
            <div className="mx-auto flex h-20 w-full max-w-6xl items-center px-2">
                {/* Logo links */}
                <Link href="/" className="flex items-center">
                    {<Image src="/logo.svg" alt="Mirthe logo" width={80} height={60} />}
                </Link>

                {/* andere items rechts */}
                <div className="ml-auto flex items-center gap-10">
                    <Link
                        href={`${base}#about`}
                        className="text-white/90 transition hover:text-white"
                    >
                        About
                    </Link>

                    <Link
                        href={`${base}#work`}
                        className="text-white/90 transition hover:text-white"
                    >
                        Work
                    </Link>

                    <Link
                        href={`${base}#contact`}
                        className="text-white/90 transition hover:text-white"
                    >
                        Contact
                    </Link>

                    <a
                        href="/Resume.pdf"
                        download
                        className="
                        rounded-xl border-2 border-[rgb(var(--accent))]
                        px-5 py-2 font-semibold text-[rgb(var(--accent))]
                        transition
                        hover:bg-[rgb(var(--accent))] hover:text-[rgb(var(--bg))]
                        "
                    >
                        Resume
                    </a>
                </div>
            </div>

        </nav>
    );
}
