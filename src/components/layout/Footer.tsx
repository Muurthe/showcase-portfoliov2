import Container from "./Container";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-neutral-800">
            <Container>
                <div className="flex flex-col gap-2 py-10 text-sm text-neutral-400">
                    <p>© {new Date().getFullYear()} Mirthe Verdurmen</p>
                    <p className="text-neutral-500">
                        Designed in <span className="font-medium text-neutral-200">Figma</span> and coded in{" "}
                        <span className="font-medium text-neutral-200">Visual Studio Code</span>.
                        <br />
                        Built with{" "}
                        <span className="font-medium text-neutral-200">Next.js</span> and{" "}
                        <span className="font-medium text-neutral-200">Tailwind CSS</span>.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
