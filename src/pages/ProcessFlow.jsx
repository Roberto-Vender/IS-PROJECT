import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronUpIcon } from "@heroicons/react/24/outline"; // make sure heroicons is installed

const ProcessFlow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="text-2xl text-green-950 font-bold mt-4 ml-15 relative">
      <div data-aos="fade-down">CURRENT PROCESS FLOWCHART</div>

      <div className="text-1xl text-black font-bold mt-4 ml-4" data-aos="fade-right">
        Training Enrollment
        <img src="enrollment.png" className="w-full h-full mb-40" data-aos="zoom-in" />
      </div>

      <section>
        <div className="text-2xl text-black font-bold mt-4 ml-15" data-aos="fade-left">
          Training Proper
          <img src="proper.png" className="w-full h-full mb-40" data-aos="zoom-in" />
        </div>
      </section>

      <section>
        <div className="text-2xl text-black font-bold mt-4 ml-15" data-aos="fade-right">
          Assessment (Before Assessment)
          <img src="before.png" className="w-full h-full mb-40" data-aos="zoom-in" />
        </div>
      </section>

      <section>
        <div className="text-2xl text-black font-bold mt-4 ml-15" data-aos="fade-left">
          Assessment (During Assessment)
          <img src="during.png" className="w-full h-full mb-40" data-aos="zoom-in" />
        </div>
      </section>

      <div data-aos="fade-up">PROPOSED PROCESS FLOWCHART</div>

      <div className="text-1xl text-black font-bold mt-4 ml-4" data-aos="fade-right">
        Training Enrollment
        <img src="training.jpg" className="w-full h-full mb-40" data-aos="zoom-in" />
      </div>

      <section>
        <div className="text-2xl text-black font-bold mt-4 ml-15" data-aos="fade-left">
          Training Proper
          <img src="preparation.jpg" className="w-full h-full mb-40" data-aos="zoom-in" />
        </div>
      </section>

      <section>
        <div className="text-2xl text-black font-bold mt-4 ml-15" data-aos="fade-right">
          Assessment
          <img src="assessment.jpg" className="w-full h-full mb-40" data-aos="zoom-in" />
        </div>
      </section>

      {/* Scroll-to-Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="z-10 fixed bottom-8 right-0 p-1.5 rounded-full bg-green-600 text-white hover:bg-green-900 shadow-md transition"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ProcessFlow;
