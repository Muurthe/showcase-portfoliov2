import Link from "next/link";

export default function Hero() {
    return (
        <div className="mx-auto w-full max-w-5xl px-6">
            <div className="flex min-h-[90vh] items-center">
                <div className="max-w-4xl">
                    <div className="text-5xl leading-[1.1] text-[rgb(var(--text))]">
                        {/* Eerste regel */}
                        My name is
                    </div>
                    <div className="mt-6 text-7xl font-extrabold leading-[0.95] tracking-[-0.02em] text-[rgb(var(--muted))]">
                        {/* tweede regel */}
                        Mirthe Verdurmen
                    </div>
                    <div className="mt-6 text-5xl leading-[1.1] text-[rgb(var(--text))]">
                        {/* derde regel */}
                        A frontend developer
                    </div>
                    <div className="mt-14">
                        {/* contact button */}
                        <Link
                            href="#contact"
                            className="
                            inline-flex items-center justify-center
                            rounded-xl border-2 border-[rgb(var(--accent))]
                            px-4 py-4 text-[20px] font-semibold text-[rgb(var(--accent))]
                            transition
                            hover:bg-[rgb(var(--accent))] hover:text-[rgb(var(--bg))]
                            "
                            >
                            Contact me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}