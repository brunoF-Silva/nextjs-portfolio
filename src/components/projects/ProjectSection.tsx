import Header from "../general/Header";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects">
      <Header title="Recent Projects" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        <div data-aos="fade-right">
          <ProjectCard
            imagePath="/images/react-calendar.png"
            title="React Calendar"
            description="A modern, responsive calendar built with React. Effectively handles complex client-side logic, including dynamic date generation and full CRUD capabilities (create, edit, delete) for user notes."
          />
        </div>
        <div data-aos="fade-left">
          <ProjectCard
            imagePath="/images/react-calculator.png"
            title="React Calculator"
            description="A fully responsive calculator application powered by JavaScript and React, featuring a clean UI and optimized performance."
          />
        </div>
        <div data-aos="fade-right">
          <ProjectCard
            imagePath="/images/django-ecommerce.png"
            title="Django E-commerce"
            description="A robust Django backend system featuring Brazilian ID validation, secure user session management, and modular architecture for the entire purchasing workflow."
          />
        </div>
        <div data-aos="fade-left">
          <ProjectCard
            imagePath="/images/css-responsiveness.png"
            title="CSS - 2026 Standards"
            description="An E-commerce homepage adhering to modern design standards. Built with advanced CSS features like Grid, Flexbox, Container Queries, and relative units for fluid responsiveness."
          />
        </div>
      </div>
    </section>
  );
}
