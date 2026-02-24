import Header from "../general/Header";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects">
      <Header title="Recent Projects" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        <div data-aos="fade-right">
          <ProjectCard
            imagePath="/images/django-ecommerce.png"
            title="Django E-commerce"
            description="A robust Django backend system featuring Brazilian ID validation, secure user session management, and a modular architecture for the entire purchasing workflow, fully integrated with AWS S3 for persistent media storage."
            link="https://web-production-8b1c.up.railway.app/"
          />
        </div>
        <div data-aos="fade-left">
          <ProjectCard
            imagePath="/images/crud-items.png"
            title="Next.js & NestJS Full-Stack CRUD"
            description="A full-stack project utilizing separate repositories for a Next.js frontend and a NestJS backend. The application features complete CRUD operations for generic items and vendor management, implementing robust data validation and a PostgreSQL database integrated via NeonDB"
            link="https://nextjs-crud-items.vercel.app/"
          />
        </div>
        <div data-aos="fade-right">
          <ProjectCard
            imagePath="/images/react-calendar.png"
            title="React Calendar"
            description="A modern, responsive calendar built with React. Effectively handles complex client-side logic, including dynamic date generation and full CRUD capabilities (create, edit, delete) for user notes."
            link="https://react-calendar-six-gamma.vercel.app/"
          />
        </div>
        <div data-aos="fade-left">
          <ProjectCard
            imagePath="/images/react-calculator.png"
            title="React Calculator"
            description="A fully responsive calculator application powered by JavaScript and React, featuring a clean UI and optimized performance."
            link="https://react-calculator-ten-ebon.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
}
