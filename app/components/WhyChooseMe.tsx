"use client"

import { Brain, Code2, Zap } from "lucide-react"
import ShadowCard from "./ShadowCard"
import InnerShadowCard from "./InnerShadowEffect"

export default function WhyTrustSection() {
    return (
        <section id="about" className="w-full py-32 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Top Text */}
                <div className="max-w-2xl mb-10 2xl:mb-16">
                    <p className="text-sm text-muted-foreground mb-3">
                        About Me
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Why work with me
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                        Three reasons to choose me: deep AI/ML expertise,
                        production-ready code, and fast, reliable delivery.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-10">

                    {/* Card 1 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="flex items-start gap-4">

                            <InnerShadowCard className="p-3">
                                <Brain size={20} />
                            </InnerShadowCard>

                            <div>
                                <h3 className="font-semibold text-lg mb-3">
                                    Deep ML/AI Expertise
                                </h3>

                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    Hands-on experience with PyTorch, TensorFlow, and
                                    HuggingFace Transformers. From training computer vision
                                    models to building RAG pipelines and LLM-powered agents —
                                    I understand the full AI stack.
                                </p>
                            </div>

                        </div>
                    </ShadowCard>

                    {/* Card 2 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="flex items-start gap-4">

                            <InnerShadowCard className="p-3">
                                <Code2 size={20} />
                            </InnerShadowCard>

                            <div>
                                <h3 className="font-semibold text-lg mb-3">
                                    Production-Grade Code
                                </h3>

                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    Clean, modular, and scalable architecture.
                                    Every solution I build is deployed with FastAPI, Docker,
                                    and CI/CD pipelines — ready for real-world usage,
                                    not just demos.
                                </p>
                            </div>

                        </div>
                    </ShadowCard>

                    {/* Card 3 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="flex items-start gap-4">

                            <InnerShadowCard className="p-3">
                                <Zap size={20} />
                            </InnerShadowCard>

                            <div>
                                <h3 className="font-semibold text-lg mb-3">
                                    Fast & Reliable
                                </h3>

                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    Clear communication, structured milestones, and
                                    rapid iteration. I reduce inference latency by up to 30%
                                    and deliver solutions on schedule with measurable results.
                                </p>
                            </div>

                        </div>
                    </ShadowCard>

                </div>

                {/* CTA */}
                <div className="flex justify-end mt-10 2xl:mt-16">
                    <a href="#projects">
                        <ShadowCard
                            variant="button"
                            className="px-6 py-3 rounded-full cursor-pointer text-sm font-medium hover:scale-105 transition-transform"
                        >
                            See my projects →
                        </ShadowCard>
                    </a>
                </div>

            </div>
        </section>
    )
}