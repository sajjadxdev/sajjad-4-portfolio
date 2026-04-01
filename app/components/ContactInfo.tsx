"use client"

import ShadowCard from "./ShadowCard"
import InnerShadowCard from "./InnerShadowEffect"
import { Github, Linkedin, Mail, Phone, Info, Send } from "lucide-react"

export default function ContactCTASection() {
    return (
        <section id="contact" className="w-full pt-32 pb-15 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

                {/* ================= LEFT SIDE ================= */}
                <div>

                    <p className="text-sm text-muted-foreground mb-4">
                        Contact
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        Let&apos;s build something amazing
                    </h2>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        Have an AI/ML project in mind? Let&apos;s discuss:
                    </p>

                    <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                        <li>• Your project requirements and goals</li>
                        <li>• Technical approach and feasibility</li>
                        <li>• Timeline, milestones, and deliverables</li>
                        <li>• Pricing and engagement model</li>
                    </ul>

                    <p className="text-sm mb-6">
                        <span className="font-medium">You&apos;ll get:</span> a clear understanding of what&apos;s
                        possible, a technical roadmap, and a detailed quote.
                    </p>

                    <div className="flex gap-3 items-start text-sm text-muted-foreground mb-12">
                        <Info size={16} className="mt-1 shrink-0" />
                        <p>
                            <span className="font-medium text-foreground">
                                Prefer email?
                            </span>{" "}
                            Reach me directly at{" "}
                            <a href="mailto:sajjadxdev@gmail.com" className="text-foreground font-medium underline underline-offset-4">
                                sajjadxdev@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 flex-wrap">
                        <a href="https://github.com/sajjadxdev" target="_blank" rel="noopener noreferrer">
                            <ShadowCard
                                variant="button"
                                className="px-6 py-3 rounded-full text-sm cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform"
                            >
                                <Github size={16} />
                                GitHub
                            </ShadowCard>
                        </a>

                        <a href="https://linkedin.com/in/sajjadxdev" target="_blank" rel="noopener noreferrer">
                            <ShadowCard
                                variant="button"
                                className="px-6 py-3 rounded-full text-sm cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform"
                            >
                                <Linkedin size={16} />
                                LinkedIn
                            </ShadowCard>
                        </a>

                        <a href="mailto:sajjadxdev@gmail.com">
                            <ShadowCard
                                variant="button"
                                className="px-6 py-3 rounded-full text-sm cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform"
                            >
                                <Mail size={16} />
                                Email
                            </ShadowCard>
                        </a>

                        <a href="tel:+923166400174">
                            <ShadowCard
                                variant="button"
                                className="px-6 py-3 rounded-full text-sm cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform"
                            >
                                <Phone size={16} />
                                Call
                            </ShadowCard>
                        </a>
                    </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <ShadowCard className="p-10 rounded-3xl max-w-lg w-full ml-auto">

                    <h3 className="font-semibold text-lg mb-6">
                        Availability
                    </h3>

                    <div className="flex items-center gap-3 mb-10">
                        <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <p className="text-muted-foreground text-sm">
                            Available for new projects — April 2026
                        </p>
                    </div>

                    {/* Response Badge */}
                    <div className="flex justify-center mb-12">
                        <InnerShadowCard className="px-8 py-6 rounded-2xl text-center">
                            <p className="text-2xl font-semibold">~12h</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                Average response time
                            </p>
                        </InnerShadowCard>
                    </div>

                    <div className="text-sm space-y-3 mb-10">
                        <p className="font-medium">How it works:</p>
                        <ol className="list-decimal ml-5 text-muted-foreground space-y-1">
                            <li>Send me a message with your project idea</li>
                            <li>We discuss scope, timeline & pricing</li>
                            <li>I start building your AI solution 🚀</li>
                        </ol>
                    </div>

                    <div className="border-t border-border pt-6 text-xs text-muted-foreground text-center">
                        © 2026 Sajjad Ahmad • ML Engineer
                    </div>

                </ShadowCard>

            </div>
        </section>
    )
}