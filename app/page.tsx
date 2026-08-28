import WhyTrustSection from "./components/WhyChooseMe";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import BenefitsSection from "./components/BenefitsSection";
import ExperienceSection from "./components/HowIWork";
import FAQSection from "./components/FAQ";
import ContactCTASection from "./components/ContactInfo";
import ContactFormSection from "./components/ContactForm";
import TechStackSection from "./components/TechStack";
import Projects from "./components/ProjectSection/Projects";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Header />
      <HeroSection />
      <WhyTrustSection />
      <Projects />
      <BenefitsSection />
      <ExperienceSection />
      <TechStackSection />
      <BlogSection />
      <FAQSection />
      <ContactCTASection />
      <ContactFormSection />
    </main>
  );
}