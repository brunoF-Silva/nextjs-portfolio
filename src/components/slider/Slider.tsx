"use client";
// import { useRef, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "./style.css";
// import Header from "../general/Header";

// const slidesData = [
//   {
//     imgSrc: "/images/slide1.jpg",
//     title: "Programming: The Fun Part!",
//     description:
//       "Software Engineering and Systems Design opened my eyes to my ultimate passion in computer science—writing code. Every lecture was a blast, heavily inspired by the Systems Design mentorship of former Microsoft developer Marcelo Azevedo (github.com/his-user).",
//     categories: ["Software-Engineering", "Systems-Design"],
//     link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
//   },
//   {
//     imgSrc: "images/slide2.jpg",
//     title: "Internship Experiences",
//     description:
//       "In total, I completed three internships during my undergraduate studies. The first, at the course coordination office, taught me discipline; the second, at the Federal Court, taught me management and leadership; and the third, at the UFT Software Factory, gave me hands-on programming experience.",
//     categories: ["internships", "federal-court", "software-factory"],
//     link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
//   },
//   {
//     imgSrc: "images/slide3.jpg",
//     title: "Seizing Opportunities, Fulfilling Dreams!",
//     description:
//       "In 2024, I was selected by the Canadian government for the ELAP scholarship. My four months in Canada were an unforgettable experience focused on leadership and programming!",
//     categories: ["ELAP", "Exchange-Program", "Dream-Come-True"],
//     link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
//   },
//   {
//     imgSrc: "images/slide4.jpg",
//     title: "Community Impact",
//     description:
//       "Beyond the classroom, I had the rewarding opportunity to teach chess to public school children for a semester. I did this as an official member of the university chess league and as part of my Community Outreach coursework.",
//     categories: ["Community", "Chess", "Volunteering"],
//     link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
//   },
//   {
//     imgSrc: "images/slide5.jpg",
//     title: "Teamwork Makes the Dream Work",
//     description:
//       "Team collaboration, leadership, version control, and project management methodologies—all culminating in a final presentation. It was an excellent opportunity to hone my public speaking skills!",
//     categories: ["Teamwork", "Teamwork", "Product-Presentation"],
//     link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
//   },
//   {
//     imgSrc: "images/slide6.jpg",
//     title: "The Importance of User Experience",
//     description:
//       "Creating wireframes, mood boards, usability tests, heuristic analyses, and A/B tests was just the tip of the iceberg. I absolutely loved designing in Figma—we even won an award in that course!",
//     categories: ["Human-Computer-Interaction", "UX", "UI"],
//     link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
//   },
//   {
//     imgSrc: "images/slide7.jpg",
//     title: "Ready for the Next Challenge",
//     description:
//       "I currently work full-time as a stock clerk, dedicating my free time to programming and completing my computer science degree. I am highly motivated to transition fully into the tech industry and bring my strong work ethic to a development team.",
//     categories: ["Career-Transition", "Tech-Opportunity", "Future-Developer"],
//     link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
//   },
// ];

// export default function Slider() {
// const swiperWrappedRef = useRef<HTMLElement | null>(null);  const [isInView, setIsInView] = useState(false);
//   const containerRef = useRef(null);

// function adjustMargin() {
//   const screenWidth = window.innerWidth;
//   const element = swiperWrappedRef.current;

//   if (element) {
//     if (screenWidth <= 520) {
//       element.style.marginLeft = "0px";
//       element.style.marginRight = "10px";
//       element.style.border = "1px solid red";
//       element.style.width = '10px'
//     } else {
//       element.style.marginLeft =
//         screenWidth <= 650 ? "-50px" : screenWidth <= 800 ? "-100px" : "-150px";
//         element.style.border = "2px solid blue";

//     }
//   }
// }

//   useEffect(() => {
//     adjustMargin();
//     window.addEventListener("resize", adjustMargin);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.9 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       window.removeEventListener("resize", adjustMargin);
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <section id="background" className="py-6">
//       <div className="container" ref={containerRef}>
//         <Header title="A Little Bit About My Background" className="py-0" />
//         <div data-aos="fade-up" data-aos-duration="1500">
//           <Swiper
//             className={isInView ? "animate" : ""}
//             modules={[Pagination]}
//             grabCursor
//             initialSlide={2}
//             centeredSlides={true}
//             centeredSlidesBounds={true}
//             slidesPerView="auto"
//             speed={800}
//             slideToClickedSlide
//             pagination={{ clickable: true }}
//             breakpoints={{
//               320: { spaceBetween: 0 },
//               650: { spaceBetween: 30 },
//               1000: { spaceBetween: 20 },
//             }}
//             onSwiper={(swiper) => {
//               swiperWrappedRef.current = swiper.wrapperEl;
//             }}
//           >
//             {slidesData.map((slide, index) => (
//               <SwiperSlide key={index}>
//                 <div className={`swiper-wrap-${index}`}>
//                   <img
//                     className="slideImg"
//                     src={slide.imgSrc}
//                     alt={slide.title}
//                   />
//                   <div className="title">
//                     <h1>{slide.title}</h1>
//                   </div>
//                   <div className="content">
//                     <div className="text-box">
//                       <p>{slide.description}</p>
//                     </div>

//                     <div className="footer">
//                       <div className="category">
//                         {slide.categories.map((category, idx) => (
//                           <span key={idx} style={{ "--i": idx + 1 }}>
//                             {category}
//                           </span>
//                         ))}
//                       </div>
//                       {slide.link ? (
//                         <a
//                           href={slide.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <button>
//                             <span className="label">More..</span>
//                           </button>
//                         </a>
//                       ) : (
//                         <button disabled>
//                           <span className="label">More..</span>
//                         </button>
//                       )}
//                     </div>
//                   </div>

//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import Header from "../general/Header";

const slidesData = [
  {
    imgSrc: "/images/slide1.jpg",
    title: "Programming: The Fun Part!",
    description:
      "Software Engineering and Systems Design opened my eyes to my ultimate passion in computer science—writing code. Every lecture was a blast, heavily inspired by the Systems Design mentorship of former Microsoft developer Marcelo Azevedo (github.com/his-user).",
    categories: ["Software-Engineering", "Systems-Design"],
    link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
  },
  {
    imgSrc: "images/slide2.jpg",
    title: "Internship Experiences",
    description:
      "In total, I completed three internships during my undergraduate studies. The first, at the course coordination office, taught me discipline; the second, at the Federal Court, taught me management and leadership; and the third, at the UFT Software Factory, gave me hands-on programming experience.",
    categories: ["Internships", "Federal-Court", "Software-Factory"],
    link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
  },
  {
    imgSrc: "images/slide3.jpg",
    title: "Seizing Opportunities, Fulfilling Dreams!",
    description:
      "In 2024, I was selected by the Canadian government for the ELAP scholarship. My four months in Canada were an unforgettable experience focused on leadership and programming!",
    categories: ["ELAP", "Exchange-Program", "Dream-Come-True"],
    link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
  },
  {
    imgSrc: "images/slide4.jpg",
    title: "Community Impact",
    description:
      "Beyond the classroom, I had the rewarding opportunity to teach chess to public school children for a semester. I did this as an official member of the university chess league and as part of my Community Outreach coursework.",
    categories: ["Community", "Chess", "Volunteering"],
    link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
  },
  {
    imgSrc: "images/slide5.jpg",
    title: "Teamwork Makes the Dream Work",
    description:
      "Team collaboration, leadership, version control, and project management methodologies—all culminating in a final presentation. It was an excellent opportunity to hone my public speaking skills!",
    categories: ["Teamwork", "Teamwork", "Product-Presentation"],
    link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
  },
  {
    imgSrc: "images/slide6.jpg",
    title: "The Importance of User Experience",
    description:
      "Creating wireframes, mood boards, usability tests, heuristic analyses, and A/B tests was just the tip of the iceberg. I absolutely loved designing in Figma—we even won an award in that course!",
    categories: ["HCI", "UX", "UI"],
    link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
  },
  {
    imgSrc: "images/slide7.jpg",
    title: "Ready for the Next Challenge",
    description:
      "I currently work full-time as a stock clerk, dedicating my free time to programming and completing my computer science degree. I am highly motivated to transition fully into the tech industry and bring my strong work ethic to a development team.",
    categories: ["Career-Transition", "Tech-Opportunity", "Future-Developer"],
    link: "https://www.linkedin.com/in/bruno-silva-9629b6263",
  },
];

// export default function Slider() {
//   const swiperWrappedRef = useRef<HTMLElement | null>(null);
//   const [isInView, setIsInView] = useState(false);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.5 },
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="background" className="py-6">
//       <div className="container" ref={containerRef}>
//         <Header title="A Little Bit About My Background" className="py-0" />

//         <div data-aos="fade-up" data-aos-duration="1500">
//           <Swiper
//             className={isInView ? "animate" : ""}
//             modules={[Pagination]}
//             grabCursor
//             initialSlide={2}
//             centeredSlides={true}
//             speed={800}
//             slideToClickedSlide
//             pagination={{ clickable: true }}
//             breakpoints={{
//               0: { slidesPerView: 1.3, spaceBetween: 15 },
//               520: { slidesPerView: "auto", spaceBetween: 20 },
//               650: { slidesPerView: "auto", spaceBetween: 30 },
//               1000: { slidesPerView: "auto", spaceBetween: 20 },
//             }}
//             onSwiper={(swiper) => {
//               swiperWrappedRef.current = swiper.wrapperEl;
//             }}
//           >
//             {slidesData.map((slide, index) => (
//               <SwiperSlide key={slide.title}>
//                 <div className={`swiper-wrap-${index}`}>
//                   <img
//                     className="slideImg"
//                     src={slide.imgSrc}
//                     alt={slide.title}
//                   />
//                   <div className="title">
//                     <h1>{slide.title}</h1>
//                   </div>
//                   <div className="content">
//                     <div className="text-box">
//                       <p>{slide.description}</p>
//                     </div>

//                     <div className="footer">
//                       <div className="category">
//                         {slide.categories.map((category, idx) => (
//                           <span key={idx} style={{ "--i": idx + 1 }}>
//                             {category}
//                           </span>
//                         ))}
//                       </div>
//                       {slide.link ? (
//                         <a
//                           href={slide.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <button>
//                             <span className="label">More..</span>
//                           </button>
//                         </a>
//                       ) : (
//                         <button disabled>
//                           <span className="label">More..</span>
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function Slider() {
  const swiperInstanceRef = useRef<any>(null);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && swiperInstanceRef.current) {
      setTimeout(() => {
        swiperInstanceRef.current.update();
      }, 100);
    }
  }, [isInView]);

  return (
    <section id="background" className=" outer-frame py-6">
      <div className="container" ref={containerRef}>
        <Header title="A Little Bit About My Background" className="py-0" />

        <div data-aos="fade-up" data-aos-duration="1500">
          <Swiper
            className={isInView ? "animate" : ""}
            modules={[Pagination]}
            grabCursor
            initialSlide={2}
            centeredSlides={true}
            speed={800}
            slideToClickedSlide
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1.3, spaceBetween: 15 },
              520: { slidesPerView: "auto", spaceBetween: 20 },
              650: { slidesPerView: "auto", spaceBetween: 30 },
              1000: { slidesPerView: "auto", spaceBetween: 20 },
            }}
            onSwiper={(swiper) => {
              swiperInstanceRef.current = swiper;
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={slide.title}>
                <div className={`swiper-wrap-${index}`}>
                  <img
                    className="slideImg"
                    src={slide.imgSrc}
                    alt={slide.title}
                  />
                  <div className="title">
                    <h1>{slide.title}</h1>
                  </div>

                  <div className="text-wrapper">
                    <div className="content">
                      <div className="text-box">
                        <p>{slide.description}</p>
                      </div>

                    </div>

                    <div className="footer">
                      <div className="category">
                        {slide.categories.map((category, idx) => (
                          <span key={idx} style={{ "--i": idx + 1 }}>
                            {category}
                          </span>
                        ))}
                      </div>
                      {slide.link ? (
                        <a
                          href={slide.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <span className="label">More..</span>
                          </button>
                        </a>
                      ) : (
                        <button disabled>
                          <span className="label">More..</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}