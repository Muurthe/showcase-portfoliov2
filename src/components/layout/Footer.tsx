import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import MailIcon from "@/components/icons/MailIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";


export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-16 bg-[rgb(var(--surface))]">
            <Container>
                <div className="py-14">
                    <div className="grid gap-25 md:grid-cols-3">
                        <div className="max-w-md">
                            <Link href="/" className="flex items-center">
                                {<Image src="/logo.svg" alt="Mirthe logo" width={80} height={60} />}
                            </Link>

                            <p className="mt-6 text-sm leading-6 text-[rgb(var(--text))]">
                                Designed in{" "}
                                <span className="font-medium text-[rgb(var(--text))]">Figma</span>{" "}
                                and coded in{" "}
                                <span className="font-medium text-[rgb(var(--text))]">
                                    Visual Studio Code
                                </span>
                                . Built with{" "}
                                <span className="font-medium text-[rgb(var(--text))]">Next.js</span>{" "}
                                and{" "}
                                <span className="font-medium text-[rgb(var(--text))]">
                                    Tailwind CSS
                                </span>
                                .
                            </p>

                            <p className="mt-6 text-sm leading-6 text-[rgb(var(--text))] opacity-80">
                                Currently seeking a front-end internship starting September.
                            </p>
                        </div>

                        {/* Middle: Navigation */}
                        <div className="ml-6">
                            <p className="text-sm font-medium tracking-wide text-[rgb(var(--accent))]">
                                Navigation
                            </p>

                            <nav className="mt-4 flex flex-col gap-2 text-[rgb(var(--text))]">
                                <Link href="#home" className="w-fit opacity-80 hover:opacity-100">
                                    Home
                                </Link>
                                <Link href="#about" className="w-fit opacity-80 hover:opacity-100">
                                    About
                                </Link>
                                <Link
                                    href="#work"
                                    className="w-fit opacity-80 hover:opacity-100"
                                >
                                    Selected work
                                </Link>
                                <Link
                                    href="#contact"
                                    className="w-fit opacity-80 hover:opacity-100"
                                >
                                    Contact
                                </Link>

                                {/* Resume: either PDF or /resume page */}
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-fit opacity-80 hover:opacity-100"
                                >
                                    Resume
                                </a>
                            </nav>
                        </div>

                        {/* Right: Get in touch */}
                        <div>
                            <p className="text-sm font-medium tracking-wide text-[rgb(var(--accent))]">
                                Get in touch
                            </p>

                            <div className="mt-5 flex items-center gap-6">
                                <a
                                    href="mailto:mirtheverdurmen@hotmail.com"
                                    aria-label="Email"

                                >
                                    <MailIcon className="h-9 w-9 " />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/mirthe-verdurmen-0975323a3/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                    className="opacity-90 transition hover:opacity-100"
                                >
                                    <LinkedinIcon className="h-9 w-9 " />
                                </a>

                                <a
                                    href="https://github.com/Muurthe"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className="opacity-90 transition hover:opacity-100"
                                >
                                    <GithubIcon className="h-9 w-9 " />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom line */}
                    <div className="mt-12 border-t border-[rgb(var(--accent))]/40 pt-6">
                        <p className="text-sm text-[rgb(var(--text))] opacity-80">
                            © {year} Mirthe Verdurmen
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

