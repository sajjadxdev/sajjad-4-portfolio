"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ShadowCard from "./ShadowCard"

export default function TechStackSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const el = containerRef.current
            if (!el) return

            const totalWidth = el.scrollWidth / 2

            gsap.to(el, {
                x: -totalWidth,
                duration: 30,
                ease: "none",
                repeat: -1,
            })
        })

        return () => ctx.revert()
    }, [])

    const techStack = [
        { name: "Python", emoji: "🐍" },
        { name: "PyTorch", emoji: "🔥" },
        { name: "TensorFlow", emoji: "🧠" },
        { name: "HuggingFace", emoji: "🤗" },
        { name: "LangChain", emoji: "🔗" },
        { name: "LlamaIndex", emoji: "🦙" },
        { name: "FastAPI", emoji: "⚡" },
        { name: "Docker", emoji: "🐳" },
        { name: "Scikit-learn", emoji: "📊" },
        { name: "SpaCy", emoji: "💬" },
        { name: "YOLO", emoji: "👁️" },
        { name: "OpenCV", emoji: "📷" },
        { name: "AWS", emoji: "☁️" },
        { name: "Git", emoji: "🔀" },
        { name: "NumPy", emoji: "🔢" },
        { name: "Pandas", emoji: "🐼" },
    ]

    return (
        <section id="skills" className="w-full py-32 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 text-center mb-20">
                <p className="text-sm text-muted-foreground mb-3 uppercase tracking-widest">
                    Skills & Tools
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                    Technologies I use to build AI solutions
                </h2>

                {/* Skill Categories */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-12 mb-16">
                    <SkillCategory
                        title="Programming"
                        skills={["Python (Primary)", "C++"]}
                    />
                    <SkillCategory
                        title="Machine Learning"
                        skills={["Scikit-learn", "TensorFlow", "PyTorch", "Deep Learning"]}
                    />
                    <SkillCategory
                        title="NLP & LLMs"
                        skills={["HuggingFace Transformers", "SpaCy", "LangChain", "LlamaIndex"]}
                    />
                    <SkillCategory
                        title="Agentic AI"
                        skills={["LangChain Agents", "RAG Pipelines", "Prompt Engineering"]}
                    />
                    <SkillCategory
                        title="Deployment"
                        skills={["FastAPI", "Docker", "REST APIs", "AWS (Basic)"]}
                    />
                    <SkillCategory
                        title="Data & Evaluation"
                        skills={["Pandas", "NumPy", "Cross Validation", "Hyperparameter Tuning"]}
                    />
                </div>
            </div>

            {/* Marquee */}
            <div className="relative">
                <div
                    ref={containerRef}
                    className="flex gap-6 w-max"
                >
                    {[...techStack, ...techStack].map((tech, i) => (
                        <ShadowCard
                            key={i}
                            className="px-6 py-4 rounded-2xl flex items-center gap-3 shrink-0"
                        >
                            <span className="text-2xl">{tech.emoji}</span>
                            <span className="text-sm font-medium whitespace-nowrap">{tech.name}</span>
                        </ShadowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
    return (
        <ShadowCard className="p-6 rounded-2xl">
            <h3 className="font-semibold text-sm mb-3">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </ShadowCard>
    )
}