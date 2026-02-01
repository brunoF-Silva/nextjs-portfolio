import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/home/hero/HeroSection";
import ServicesSection from "@/components/home/services/ServicesSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ResumeSection from "@/components/resume/ResumeSection";
import SkillSection from "@/components/skills/SkillSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <ServicesSection/>
    <ResumeSection/>
    <ProjectSection/>
    <SkillSection/>
    <TestimonialsSection/>
    <ContactSection/>
    </>
  );
}
