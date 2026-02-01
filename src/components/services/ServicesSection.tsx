import Header from "@/components/general/Header";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services">
      {/* header */}
      <Header title="What I Offer" />
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
        <div data-aos="fade-right">
          <ServiceCard
            name="UI and UX"
            icon="/images/s1.png"
            description="Designing intuitive interfaces and seamless user experiences."
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="100">
          <ServiceCard
            name="Web and Mobile App"
            icon="/images/s2.png"
            description="Building responsive web apps and cross-platform mobile solutions."
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="200">
          <ServiceCard
            name="Design and Creative"
            icon="/images/s3.png"
            description="Creating unique brand identities and compelling visual designs."
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="300">
          <ServiceCard
            name="Development"
            icon="/images/s4.png"
            description="Full-stack development with modern frameworks and best practices."
          />
        </div>
      </div>
    </section>
  );
}