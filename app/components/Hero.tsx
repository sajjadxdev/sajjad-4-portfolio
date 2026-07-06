"use client"

import ShadowCard from "./ShadowCard"
import ShadowText from "./ShadowText"
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    Globe,
    ArrowRight
} from "lucide-react"

export default function HeroSection() {
    return (
        <section id="hello" className="relative min-h-screen flex items-center bg-background px-6 mt-20 lg:mt-0">

            {/* CONTAINER */}
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-4 2xl:space-y-8">

                    <p className="text-primary font-semibold text-sm 2xl:text-lg m-0 tracking-wide uppercase">
                        AI & ML Developer in Peshawar • ML Engineer
                    </p>

                    <ShadowText className="text-[#aaa] font-extrabold text-[13vw] sm:text-6xl 2xl:text-8xl leading-[50px] sm:leading-[80px] 2xl:leading-tight tracking-tight">
                        HELLO <br />
                        I&apos;M SAJJAD <br />
                        AHMAD
                    </ShadowText>

                    <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
                        <span className="font-semibold text-foreground">Top AI & ML Developer in Peshawar </span>
                        with hands-on experience designing, training, and deploying
                        <span className="font-semibold text-foreground"> production-grade AI systems</span>.
                        Specializing in NLP, LLMs, RAG pipelines, and computer vision solutions.
                    </p>

                    <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                        <Globe size={16} className="text-primary" />
                        Based in Peshawar, Pakistan • Available for Remote & Local Projects
                    </div>

                </div>

                {/* RIGHT STACK CARD */}
                <div className="relative">

                    <ShadowCard className="p-10 rounded-4xl space-y-4 2xl:space-y-8">

                        <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground">
                                Tech Stack
                            </p>
                        </div>

                        {/* ML & AI */}
                        <div className="space-y-4">
                            <h3 className="font-semibold">Machine Learning & AI</h3>
                            <div className="flex flex-wrap gap-3">
                                {["PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace"].map((item) => (
                                    <ShadowCard variant="button"
                                        key={item}
                                        className="px-4 py-2 rounded-full text-sm"
                                    >
                                        {item}
                                    </ShadowCard>
                                ))}
                            </div>
                        </div>

                        {/* NLP & LLMs */}
                        <div className="space-y-4">
                            <h3 className="font-semibold">NLP & LLMs</h3>
                            <div className="flex flex-wrap gap-3">
                                {["LangChain", "LlamaIndex", "SpaCy", "RAG Pipelines"].map((item) => (
                                    <ShadowCard variant="button"
                                        key={item}
                                        className="px-4 py-2 rounded-full text-sm"
                                    >
                                        {item}
                                    </ShadowCard>
                                ))}
                            </div>
                        </div>

                        {/* Backend & Deployment */}
                        <div className="space-y-4">
                            <h3 className="font-semibold">Backend & Deployment</h3>
                            <div className="flex flex-wrap gap-3">
                                {["Python", "FastAPI", "Docker", "AWS", "REST APIs"].map(
                                    (item) => (
                                        <ShadowCard variant="button"
                                            key={item}
                                            className="px-4 py-2 rounded-full text-sm"
                                        >
                                            {item}
                                        </ShadowCard>
                                    )
                                )}
                            </div>
                        </div>

                    </ShadowCard>

                    <div className="mt-10 flex justify-center sm:justify-start items-center">
                        <div className="flex gap-5">
                            {[
                                { Icon: Github, href: "https://github.com/sajjadxdev", label: "GitHub" },
                                { Icon: Linkedin, href: "https://linkedin.com/in/sajjadxdev", label: "LinkedIn" },
                                { Icon: Mail, href: "mailto:sajjadxdev@gmail.com", label: "Email" },
                                { Icon: Phone, href: "tel:+923166400174", label: "Phone" },
                            ].map(({ Icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                    <ShadowCard variant="button"
                                        className="p-3 rounded-full cursor-pointer hover:scale-105 transition-transform"
                                    >
                                        <Icon size={18} />
                                    </ShadowCard>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}