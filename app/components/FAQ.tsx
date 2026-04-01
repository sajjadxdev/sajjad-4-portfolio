"use client"

import InnerShadowCard from "./InnerShadowEffect"
import {
    Clock,
    Globe,
    Code2,
    Wrench,
    MessageSquare,
    DollarSign
} from "lucide-react"

export default function FAQSection() {
    return (
        <section id="faq" className="w-full py-32 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-15 2xl:mb-24">
                    <p className="text-sm text-muted-foreground mb-0 2xl:mb-4 uppercase tracking-widest">
                        FAQ
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 2xl:mb-6">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Common questions about working with me as your
                        ML/AI engineer.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-5">

                    <FAQItem
                        icon={<Wrench size={20} />}
                        question="What kind of AI/ML projects do you work on?"
                        answer="I specialize in LLM-powered applications (chatbots, RAG pipelines, agentic AI), computer vision systems (object detection, OCR), and end-to-end ML pipelines. From data preprocessing to production deployment."
                    />

                    <Divider />

                    <FAQItem
                        icon={<Globe size={20} />}
                        question="Do you work remotely?"
                        answer="Yes, I work fully remote. Based in Pakistan, but available for clients worldwide. I maintain clear communication across timezones with regular check-ins and structured milestones."
                    />

                    <Divider />

                    <FAQItem
                        icon={<Clock size={20} />}
                        question="What's your typical project timeline?"
                        answer="It depends on scope: small ML models or chatbot integrations take 1-2 weeks. Full AI systems with custom training and deployment typically take 1-3 months. I provide a clear timeline upfront."
                    />

                    <Divider />

                    <FAQItem
                        icon={<Code2 size={20} />}
                        question="What's your tech stack?"
                        answer="Python is my primary language. For ML: PyTorch, TensorFlow, Scikit-learn. For NLP/LLMs: HuggingFace, LangChain, LlamaIndex, SpaCy. For deployment: FastAPI, Docker, AWS. I adapt based on project needs."
                    />

                    <Divider />

                    <FAQItem
                        icon={<DollarSign size={20} />}
                        question="How do you handle pricing?"
                        answer="I offer both fixed-price and hourly options. For well-defined projects, I provide a fixed quote upfront. For ongoing or evolving work, I bill hourly with weekly progress reports. All pricing is discussed before starting."
                    />

                    <Divider />

                    <FAQItem
                        icon={<MessageSquare size={20} />}
                        question="How do we communicate during the project?"
                        answer="I use Slack, Discord, or WhatsApp for daily chat. Weekly video calls for progress reviews. You get access to a shared project board (Notion or GitHub Projects) so you always know exactly where things stand."
                    />

                </div>
            </div>
        </section>
    )
}

/* ============================= */
/* Reusable FAQ Item Component   */
/* ============================= */

function FAQItem({
    icon,
    question,
    answer
}: {
    icon: React.ReactNode
    question: string
    answer: string
}) {
    return (
        <div className="flex gap-6 items-start">
            <InnerShadowCard className="p-3 rounded-xl shrink-0">
                {icon}
            </InnerShadowCard>

            <div>
                <h3 className="font-semibold text-lg mb-3">
                    {question}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm">
                    {answer}
                </p>
            </div>
        </div>
    )
}

/* Divider Component */
function Divider() {
    return <div className="border-t border-border" />
}