import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/home/hero/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ResumeSection from "@/components/resume/ResumeSection";
import SkillSection from "@/components/skills/SkillSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import AnimationLayout from "../../layouts/AnimationLayout";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />
      <TestimonialsSection />
      <ContactSection />
      <Toaster/>
    </AnimationLayout>
  );
}
