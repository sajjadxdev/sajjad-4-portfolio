"use client"

import { Bot, Cpu, Rocket, Server } from "lucide-react"
import ShadowCard from "./ShadowCard"
import InnerShadowCard from "./InnerShadowEffect"

export default function BenefitsSection() {
    return (
        <section id="benefits" className="w-full py-32 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-2xl mb-10 2xl:mb-20">
                    <p className="text-sm text-muted-foreground mb-3">
                        Benefits
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        What you get when you hire me
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                        Concrete, measurable results for your AI/ML needs.
                        Not just prototypes — production-ready intelligent systems.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Card 1 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="mb-6">
                            <InnerShadowCard className="p-3 w-fit rounded-xl">
                                <Bot size={20} />
                            </InnerShadowCard>
                        </div>

                        <h3 className="font-semibold text-lg mb-4">
                            Custom AI Solutions
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            LLM-powered chatbots, RAG pipelines, and agentic
                            AI workflows tailored to your business logic and data.
                        </p>
                    </ShadowCard>

                    {/* Card 2 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="mb-6">
                            <InnerShadowCard className="p-3 w-fit rounded-xl">
                                <Cpu size={20} />
                            </InnerShadowCard>
                        </div>

                        <h3 className="font-semibold text-lg mb-4">
                            Computer Vision
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Object detection, image classification, and OCR systems
                            using YOLO, CNN, and custom-trained deep learning models.
                        </p>
                    </ShadowCard>

                    {/* Card 3 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="mb-6">
                            <InnerShadowCard className="p-3 w-fit rounded-xl">
                                <Server size={20} />
                            </InnerShadowCard>
                        </div>

                        <h3 className="font-semibold text-lg mb-4">
                            Scalable APIs
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Production-ready REST APIs with FastAPI, containerized
                            with Docker, ready for cloud deployment on AWS.
                        </p>
                    </ShadowCard>

                    {/* Card 4 */}
                    <ShadowCard className="p-8 rounded-3xl">
                        <div className="mb-6">
                            <InnerShadowCard className="p-3 w-fit rounded-xl">
                                <Rocket size={20} />
                            </InnerShadowCard>
                        </div>

                        <h3 className="font-semibold text-lg mb-4">
                            Fast Delivery
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Structured milestones, clear communication, and
                            rapid iteration. From concept to deployed solution,
                            on time.
                        </p>
                    </ShadowCard>

                </div>

                {/* CTA */}
                <div className="flex justify-end mt-10 2xl:mt-16">
                    <a href="#contact">
                        <ShadowCard
                            variant="button"
                            className="px-6 py-3 rounded-full cursor-pointer text-sm font-medium hover:scale-105 transition-transform"
                        >
                            Let&apos;s work together →
                        </ShadowCard>
                    </a>
                </div>

            </div>
        </section>
    )
}