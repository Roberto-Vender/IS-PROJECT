import {Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = () => {
    const section = document.getElementById("why-visit-moalboal");
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activities = [
    {
      title: "Hands-on Learning",
      description: "The farm school offers practical agricultural training, giving students the chance to directly apply what they learn. This hands-on experience helps students develop real farming skills, not just theoretical knowledge.",
      image: "studentplanting.jpg",
    },
    {
      title: "Sustainable Farming",
      description: "The school promotes organic farming methods, which are healthier for both people and the environment. This focus on sustainability shows a deep respect for nature and long-term farming practices.",
      image: "checkingplant.jpg",
    },
    {
      title: "Community Empowerment",
      description: "The farm school helps uplift local communities by offering agricultural education and livelihood opportunities, especially to those in rural areas. This initiative empowers individuals to improve their skills.",
      image: "sustainfarming.avif",
    },
    {
      title: "Holistic Education",
      description: "Students are not just trained in farming; they also learn about agripreneurship (agriculture + entrepreneurship), helping them become business-minded individuals who can start their own agricultural ventures.",
      image: "teachingplant.webp",
    },
    {
      title: "Supports Food Security",
      description: "The farm school helps uplift local communities by offering agricultural education and livelihood opportunities, especially to those in rural areas. By teaching people how to grow their own food, it also contributes to local food security.",
      image: "foodsecurity.jpg",
    },
    {
      title: "Promotes Youth Involvement",
      description: "It encourages young people to get into agriculture, helping reshape the image of farming as a modern and valuable career choice. is it good on farm school? if so give me a hint what photo should i put each of them.",
      image: "youthplanting.jpg",
    }
  ];

  return (
    <>
      <div className="bg-gray-400">
        <Fade cascade triggerOnce>
          <div>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white flex justify-center items-center min-h-screen">
              <div className="max-w-2xl">
                <Slide direction="down" duration={1000} triggerOnce>
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-6xl font-bold text-green-950 mb-6">
                      Welcome to LMPC Integrated Farm School
                    </h1>
                    <Fade delay={500} triggerOnce>
                      <p className="mb-6 text-lg text-green-950 max-w-xl">
                        From a humble farm school in the heart of Lamac, Pinamungajan, Cebu, to a leading center for agricultural learning and livelihood training — the Lamac Integrated Farm School remains your gateway to growth, innovation, and sustainable success.
                      </p>
                    </Fade>
                    <Zoom delay={800} triggerOnce>
                      <button
                        onClick={scrollToSection}
                        className="bg-green-800 hover:bg-gray-800 px-8 py-3 text-md transition-all duration-300"
                      >
                        Learn More ↓
                      </button>
                    </Zoom>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </Fade>
        

        {/* Why Visit Moalboal Section */}
        <section id="why-visit-moalboal" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <Fade cascade damping={0.2} triggerOnce>
              <h2 className="text-4xl font-bold mb-8"> Why LMPC Integrated Farm School?</h2>
              <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-700">
              Lamac Integrated Farm School in Cebu offers hands-on farming education, sustainable practices, and community empowerment, creating a perfect blend of learning and environmental care.
              </p>
            </Fade>

            <Bounce cascade damping={0.1} triggerOnce>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
    {activities.map((activity, index) => (
      <div key={index} className="card bg-white shadow-lg hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3">{activity.title}</h3>
          <p className="text-gray-700">
            {activity.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</Bounce>


          </div>
        </section>
        <section id="why-visit-FARMSCHOOL" className="py-20 bg-white text-center">
        <p className="text-lg font-semibold mb-4">
          Interested in starting your journey with LMPC Integrated Farm School?<br />
          Take the first step toward a sustainable future today, cultivate your skills,<br />
          and shape a better tomorrow with us!
        </p>
          <Link to="/Enrollment">
          <button className="bg-green-800 hover:bg-gray-800 px-8 py-3 text-md transition-all duration-300 rounded-2xl">
            ENROLL NOW
          </button>
        </Link>
      </section>

        
            
        {/* Scroll-to-Top Button */}
        {isVisible&& (
          <button
            onClick={scrollToTop}
            className="z-10 fixed bottom-8 right-0 p-1.5 rounded-full bg-green-600 text-white hover:bg-green-900 shadow-md transition"
          >
            <ChevronUpIcon className="h-6 w-6" />
          </button>
          
          
        )}
        
      </div>
    </>
    
  );
};

export default Home;
