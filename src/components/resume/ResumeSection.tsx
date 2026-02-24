import { LuAward, LuBookOpen, LuGraduationCap, LuPackage, LuServer } from "react-icons/lu";
import Header from "../general/Header";
import ResumeCard from "./ResumeCard";
import { RiNextjsFill } from "react-icons/ri";
import { HiTrendingUp } from "react-icons/hi";

export default function ResumeSection() {
  return (
    <section id="resume">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* education section */}
        <div data-aos="zoom-out">
          <Header title="My Education" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              role="Computer Science Degree"
              description="Bachelor of Science in Computer Science | Universidade Federal do Tocantins (UFT) | Focused on algorithms, data structures, software engineering principles, and web technologies."
              date="July 2026"
            />

            <ResumeCard
              icon={LuBookOpen}
              role="Relevant Coursework"
              description="Software Engineering, Systems Design, Web and Mobile Development, Database Systems, Human-Computer Interaction (HCI), Data Structures & Algorithms, Computer Networks, Operating Systems, Distributed Systems, Complex Networks, Security and System Auditing, Graph Theory, OOP."
            />

            <ResumeCard
              icon={LuAward}
              role="Academic Achievements"
              description='Emerging Leaders in the Americas Program (ELAP) Scholar – Government of Canada | Award for Best UX/UI Interface (Course Project) | Volunteer Instructor – "Teaching Chess in Public Schools" Project.'
              date="Jan 2025 - Apr 2025"
            />
          </div>
        </div>

        {/* work experience */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <Header title="My Work Experience" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={RiNextjsFill}
              role="Frontend Developer"
              description="Crafting responsive, accessible interfaces with modern frameworks like React & Next.js. Focus on performance, UX, and pixel-perfect implementation."
            />

            <ResumeCard
              icon={LuServer}
              role="Backend Developer"
              description="Building scalable APIs, databases, and server infrastructure. Experienced with Python, NestJS, Node.js, cloud services, and microservices architecture."
            />

            <ResumeCard
              icon={LuPackage}
              role="Fullstack Developer"
              description="End-to-end web developer bridging frontend and backend architectures. Refined practical skills at the UFT Software Factory and Federal Court of Tocantins."
            />

            <ResumeCard
              icon={HiTrendingUp}
              role="Ready for the Next Step"
              description="Disciplined Stock Clerk refining coding skills. Ready to transition into a full-time developer role."
            />
          </div>
        </div>
      </div>
    </section>
  );
}