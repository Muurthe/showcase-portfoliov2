export default function Badge({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-300">
            {label}
        </span>
    );
}
