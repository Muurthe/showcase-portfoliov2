import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "ghost";
};

export default function Button({ children, href, variant = "primary" }: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition";
    const variants = {
        primary: "bg-white text-neutral-950 hover:bg-neutral-200",
        ghost: "border border-neutral-800 text-neutral-200 hover:bg-neutral-900",
    };

    const className = `${base} ${variants[variant]}`;

    if (href) return <Link href={href} className={className}>{children}</Link>;
    return <button className={className}>{children}</button>;
}
