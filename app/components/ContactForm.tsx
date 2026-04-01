"use client"

import { useState } from "react"
import InnerShadowCard from "./InnerShadowEffect"
import { Send, CheckCircle2 } from "lucide-react"
import ShadowCard from "./ShadowCard"

export default function ContactFormSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        projectType: "",
        message: "",
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(form)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <section className="w-full pb-32 px-6">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="mb-7">
                    <p className="text-sm text-muted-foreground mb-2">
                        Get in touch
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Or email me directly at{" "}
                        <a href="mailto:sajjadxdev@gmail.com" className="font-medium text-foreground underline underline-offset-4">
                            sajjadxdev@gmail.com
                        </a>
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5 2xl:space-y-10">

                    {/* Name */}
                    <div className="space-y-4">
                        <label className="text-sm font-medium mb-1">
                            Name
                        </label>

                        <InnerShadowCard className="px-6 py-4 rounded-full">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                            />
                        </InnerShadowCard>
                    </div>

                    {/* Email */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium">
                            Email
                        </label>

                        <InnerShadowCard className="px-6 py-4 rounded-full">
                            <input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                            />
                        </InnerShadowCard>
                    </div>

                    {/* Project Type */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium">
                            Project Type
                        </label>

                        <InnerShadowCard className="px-6 py-4 rounded-full">
                            <select
                                name="projectType"
                                value={form.projectType}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none text-sm text-muted-foreground cursor-pointer"
                            >
                                <option value="">Select a project type...</option>
                                <option value="chatbot">LLM Chatbot / AI Agent</option>
                                <option value="cv">Computer Vision System</option>
                                <option value="rag">RAG Pipeline / Q&A System</option>
                                <option value="ml">Machine Learning Model</option>
                                <option value="api">API Development</option>
                                <option value="other">Other</option>
                            </select>
                        </InnerShadowCard>
                    </div>

                    {/* Message */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium">
                            Project Details
                        </label>

                        <InnerShadowCard className="px-6 py-5 rounded-3xl">
                            <textarea
                                name="message"
                                placeholder="Tell me about your project, goals, timeline, and any technical requirements..."
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent outline-none text-sm resize-none placeholder:text-muted-foreground"
                            />
                        </InnerShadowCard>
                    </div>

                    {/* Button */}
                    <ShadowCard
                        variant="button"
                        className="w-full py-4 rounded-full text-sm flex items-center justify-center gap-3 cursor-pointer hover:scale-[1.02] transition-transform"
                        onClick={handleSubmit}
                    >
                        {submitted ? (
                            <>
                                <CheckCircle2 size={16} />
                                Message sent!
                            </>
                        ) : (
                            <>
                                <Send size={16} />
                                Send message
                            </>
                        )}
                    </ShadowCard>

                </form>
            </div>
        </section>
    )
}