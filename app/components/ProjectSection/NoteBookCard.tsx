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
};

type Props = {
    project: Project;
    index: number;
};

export default function NotebookGlassCard({ project, index }: Props) {
    return (
        <div
            className="notebook-card absolute inset-x-0 top-0 w-full will-change-transform"
            style={{ zIndex: 10 - index }}
        >
            <div className="relative min-h-[60vh] sm:min-h-[65vh] lg:h-[70vh] rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-primary/30 bg-primary/10 backdrop-blur-2xl overflow-hidden p-6 sm:p-10 lg:p-14 shadow-2xl">

                {/* Glass highlight */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_60%)] opacity-60 pointer-events-none" />

                <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-10 items-center h-full">

                    {/* 🔥 LEFT CONTENT */}
                    <div className="w-full lg:order-1">

                        {/* Icon + Title */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                                {project.icon}
                            </div>

                            <h3 className="font-semibold leading-[1.2] text-[clamp(1.5rem,4vw,3rem)]">
                                {project.title}
                            </h3>
                        </div>

                        {/* Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.stack.map((tech) => (
                                <span key={tech} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-foreground/60 leading-relaxed text-[clamp(0.875rem,1.2vw,1.1rem)] mb-4 line-clamp-3">
                            {project.description}
                        </p>

                        {/* Highlights */}
                        <ul className="text-sm text-muted-foreground space-y-1.5 mb-5">
                            {project.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground shrink-0" />
                                    {h}
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <Link
                            href={project.github}
                            target="_blank"
                            className="group inline-flex items-center text-primary transition-all duration-300"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            View on GitHub
                        </Link>
                    </div>

                    {/* 🔥 RIGHT IMAGE */}
                    <div className="relative w-full lg:order-2 lg:mx-auto">
                        <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[320px] 2xl:h-[420px] rounded-2xl lg:rounded-3xl overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                priority={index === 0}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}