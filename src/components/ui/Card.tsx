import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
    return (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 shadow-sm">
            {children}
        </div>
    );
}
