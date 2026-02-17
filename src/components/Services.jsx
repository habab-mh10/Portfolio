import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import DatasetIcon from "@mui/icons-material/Dataset";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  // ======================== Fade In Effect ========================//
  const fadeIn = React.useRef([]);
  fadeIn.current = [];

  const fadeInElements = (el) => {
    if (el && !fadeIn.current.includes(el)) {
      fadeIn.current.push(el);
    }
  };

  React.useEffect(() => {
    fadeIn.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 10 },
        {
          duration: 0.4,
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  //=======================================================================//
  // ======================== Hover Rotate Effect ========================//
  const hoverRotate = React.useRef([]);
  hoverRotate.current = [];

  const hoverRotateIcons = (el) => {
    if (el && !hoverRotate.current.includes(el)) {
      hoverRotate.current.push(el);
    }
  }
  
  const HoverIn = (index) => {
    gsap.to(hoverRotate.current[index], { 
      rotation: 20, 
      duration: 1, 
      ease: "power2.out" 
    });
  };

  const HoverOut = (index) => {
    gsap.to(hoverRotate.current[index], { 
      rotation: 0, 
      duration: 1, 
      ease: "power2.out" 
    });
  };
  //=======================================================================//


  // ======================== Service Cards Data ========================//
  const servicesCards = [
    {
      icon: () => (
        <FontAwesomeIcon
          icon={faReact}
          style={{
            fontSize: 50,
            marginTop: "1rem",
            color: "currentColor",
          }}
        />
      ),
      title: "React Products Development",
      description:
        "Crafting dynamic, high-performance, and responsive user interfaces with React.js to deliver seamless web application experiences.",
    },
    {
      icon: () => (
        <WebAssetIcon
          style={{
            fontSize: 50,
            marginTop: "1rem",
            color: "currentColor",
          }}
        />
      ),
      title: "Mobile & Web App Development",
      description:
        "Building fast and high-performing applications with cross-platform experiences.",
    },
    {
      icon: () => (
        <DatasetIcon
          style={{
            fontSize: 50,
            marginTop: "1rem",
            color: "currentColor",
          }}
        />
      ),
      title: "Data Entry Specialist – MS Word & Excel",
      description:
        "Detail-oriented Data Entry Specialist proficient in Microsoft Word and Excel, ensuring accurate data entry, organization, and document/spreadsheet management.",
    },
  ];

  //=======================================================================//

  // ============================ JSX Return ==============================//
  return (
    <section id="Services" className="w-full p-2 sm:p-4 mb-14">
      <div className="w-full p-2 mt-16 sm:p-4 flex flex-col justify-center items-center">
        <p className="text-text-secondary uppercase text-sm sm:text-base">
          Services
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-relaxed text-center mt-2 sm:mt-4">
          Quality Services
        </h1>
        <div className="w-full lg:w-[95%] xl:w-[90%] mt-8 sm:mt-12 lg:mt-20 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-7">
          {servicesCards.map((serviceCard, index) => (
            <div
              key={index}
              ref={fadeInElements}
              onMouseEnter={() => HoverIn(index)}
              onMouseLeave={() => HoverOut(index)}
              className="w-full sm:w-[31%] p-4 sm:p-6 lg:p-8 xl:p-9 bg-card-bg text-text-secondary shadow-soft flex flex-col items-start justify-start hover:text-text-primary hover:transform hover:scale-105 transition-all duration-300"
            >
              <div ref={hoverRotateIcons}>{serviceCard.icon()}</div>
              <h2 className="w-full text-lg text-text-primary sm:text-xl font-[500] mt-3 sm:mt-4 text-start">
                {serviceCard.title}
              </h2>
              <p className="mt-4 sm:mt-6 text-text-secondary text-start leading-6 sm:leading-7 text-sm sm:text-base">
                {serviceCard.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
//=======================================================================//
export default Services;
