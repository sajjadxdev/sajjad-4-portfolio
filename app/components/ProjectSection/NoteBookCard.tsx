import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

type Project = {
    icon: React.ReactNode;
    image: string;
    title: string;
    description: string;
    stack: string[];
    highlights: string[];
    github: string;
    accent?: string;
};

type Props = {
    project: Project;
    index: number;
    isMobile?: boolean;
};

export default function NotebookGlassCard({ project, index, isMobile }: Props) {
    const accent = project.accent || "rgba(139,92,246,0.5)";

    return (
        <div
            className={`notebook-card ${isMobile ? "mobile-card" : "absolute inset-x-0 top-0"} w-full will-change-transform`}
            style={{ zIndex: isMobile ? 1 : 10 - index }}
        >
            <div
                className="relative rounded-[20px] sm:rounded-[28px] lg:rounded-[36px] border border-border overflow-hidden shadow-2xl bg-card"
            >
                {/* Accent glow */}
                <div
                    className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[100px] opacity-20 pointer-events-none"
                    style={{ background: accent }}
                />
                <div
                    className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-[80px] opacity-15 pointer-events-none"
                    style={{ background: accent }}
                />

                {/* Glass highlight */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.04),transparent_50%)] pointer-events-none" />

                <div className={`relative flex flex-col ${isMobile ? "" : "lg:grid lg:grid-cols-2"} gap-5 sm:gap-6 lg:gap-10 items-center p-5 sm:p-8 lg:p-12`}>

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:order-1 flex flex-col justify-center">

                        {/* Icon + Title */}
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div
                                className="p-2.5 sm:p-3 rounded-xl border border-border"
                                style={{ background: accent.replace("0.5", "0.1") }}
                            >
                                {project.icon}
                            </div>

                            <h3 className="font-bold leading-[1.15] text-lg sm:text-xl lg:text-[clamp(1.4rem,3vw,2.4rem)] text-foreground">
                                {project.title}
                            </h3>
                        </div>

                        {/* Stack */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-medium border border-border"
                                    style={{
                                        background: accent.replace("0.5", "0.08"),
                                        color: accent.replace("0.5", "1"),
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-[13px] sm:text-sm lg:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                            {project.description}
                        </p>

                        {/* Highlights */}
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1 sm:space-y-1.5 mb-4 sm:mb-5">
                            {project.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span
                                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                        style={{ background: accent.replace("0.5", "0.7") }}
                                    />
                                    {h}
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <Link
                            href={project.github}
                            target="_blank"
                            className="group inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                            style={{ color: accent.replace("0.5", "0.9") }}
                        >
                            <Github className="h-4 w-4" />
                            View on GitHub
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className={`relative w-full ${isMobile ? "" : "lg:order-2"}`}>
                        <div className="relative w-full h-[180px] sm:h-[240px] lg:h-[300px] 2xl:h-[380px] rounded-xl lg:rounded-2xl overflow-hidden border border-border">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                priority={index === 0}
                            />
                            {/* Image overlay gradient */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: `linear-gradient(135deg, ${accent.replace("0.5", "0.12")} 0%, transparent 60%)`,
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}