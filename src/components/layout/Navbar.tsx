import Link from "next/link";
import Container from "./Container";

const navItems = [
    { href: "/work", label: "My Work" },
    { href: "/about", label: "About me" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
            <Container>
                <div className="flex h-14 items-center justify-between">
                    <Link href="/" className="font-semibold tracking-tight">
                        YourName
                    </Link>

                    <nav className="flex items-center gap-6 text-sm text-neutral-300">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="transition hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </Container>
        </header>
    );
}
