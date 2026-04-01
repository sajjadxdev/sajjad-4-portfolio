"use client"

import ShadowCard from "./ShadowCard"
import InnerShadowCard from "./InnerShadowEffect"
import {
    Briefcase,
    GraduationCap
} from "lucide-react"

const experiences = [
    {
        title: "Machine Learning Engineer",
        company: "Apptex Software Solution",
        period: "Aug 2025 – Present",
        type: "work",
        highlights: [
            "Designed & fine-tuned YOLO/CNN models for traffic light detection (84% accuracy)",
            "Processed 10K+ labeled image samples for model training",
            "Reduced inference latency by 30% through model quantization",
            "Built end-to-end ML pipelines: data ingestion → production inference",
            "Deployed models as scalable REST APIs with FastAPI + Docker"
        ],
    },
    {
        title: "Machine Learning Trainee",
        company: "ML1 (Machine Learning 1 Pvt Ltd)",
        period: "April 2025 – June 2025",
        type: "work",
        highlights: [
            "Intensive training in supervised & unsupervised ML techniques",
            "Built computer vision models for license plate detection (CNN + YOLO)",
            "Applied cross-validation & hyperparameter tuning"
        ],
    },
    {
        title: "Chatbot Developer (LLM & NLP)",
        company: "INNOVATION.TECH",
        period: "Jan 2025 – April 2025",
        type: "work",
        highlights: [
            "Designed LLM-based conversational systems with prompt engineering",
            "Built intelligent chatbot pipelines using LangChain",
            "Integrated chatbot APIs using FastAPI"
        ],
    },
    {
        title: "AI/ML Intern",
        company: "Bave Technologies (Remote)",
        period: "Aug 2024 – Sept 2024",
        type: "work",
        highlights: [
            "Developed supervised ML models using real-world datasets",
            "Conducted EDA, handled missing values, engineered features",
            "Supported CI/CD workflows for ML services"
        ],
    },
    {
        title: "BS Computer Science",
        company: "FATA University",
        period: "2020 – 2024",
        type: "education",
        highlights: [
            "CGPA: 3.64 / 4.00",
            "Coursework: Machine Learning, AI, Statistics, Data Structures, Algorithms"
        ],
    },
]

export default function ExperienceSection() {
    return (
        <section id="experience" className="w-full py-32 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="max-w-2xl mb-10 2xl:mb-20">
                    <p className="text-sm text-muted-foreground mb-3">
                        Career
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Experience & Education
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                        My journey from CS student to production ML engineer —
                        each role building deeper expertise in AI systems.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative sm:pl-16">
                                {/* Timeline Dot */}
                                <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-muted-foreground/30 border-2 border-background hidden sm:block" />

                                <ShadowCard className="p-8 rounded-3xl">
                                    <div className="flex items-start gap-4 mb-4">
                                        <InnerShadowCard className="p-3 rounded-xl shrink-0">
                                            {exp.type === "education" ? (
                                                <GraduationCap size={20} />
                                            ) : (
                                                <Briefcase size={20} />
                                            )}
                                        </InnerShadowCard>

                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg">
                                                {exp.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm">
                                                {exp.company}
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {exp.period}
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="text-sm text-muted-foreground space-y-1.5 ml-0 sm:ml-[52px]">
                                        {exp.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-foreground mt-1.5 w-1 h-1 rounded-full bg-foreground shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </ShadowCard>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}