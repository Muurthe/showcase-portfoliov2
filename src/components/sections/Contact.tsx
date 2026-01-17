import Link from "next/link";

export default function Contact() {
    return (
        <div className="mx-auto w-full max-w-5xl px-6 py-32">
            <div className="max-w-4xl">
                <div className="text-4xl font-extrabold leading-[0.95] text-[rgb(var(--text))]">
                    Get in touch
                </div>

                <p className="mt-10 max-w-2xl leading-[1.35] text-[rgb(var(--text))]">
                    Whether you have a project idea or just want to connect, feel free to reach out. I&apos;m currently looking for a front-end internship starting in September.
                </p>
                <div className="mt-14">
                    {/* contact button */}
                    <Link
                        href="mailto:mirtheverdurmen@hotmail.com"
                        aria-label="Email"
                        className="
                        rounded-xl border-2 border-[rgb(var(--accent))]
                        px-5 py-2 font-semibold text-[rgb(var(--accent))]
                        transition
                        hover:bg-[rgb(var(--accent))] hover:text-[rgb(var(--bg))]
                        "
                    >
                        Say Hello
                    </Link>
                </div>
            </div>
        </div>
    );
}