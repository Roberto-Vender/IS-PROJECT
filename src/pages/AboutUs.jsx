import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Images on the left */}
        <div className="flex flex-col md:flex-row gap-10 items-start relative">
          <div className="flex flex-col gap-6 md:w-1/3 w-full">
            <img
              src="img6.jpeg"
              alt="Team 1"
              className="rounded-xl shadow-md w-full h-64 object-cover"
              data-aos="fade-right"
            />
            <img
              src="img5.jpg"
              alt="Team 2"
              className="rounded-xl shadow-md w-full h-64 object-cover"
              data-aos="fade-right"
            />
          </div>
          <img
            src="img1.png"
            alt="Background Logo"
            className="absolute top-1/2 left-[770px] transform -translate-x-1/2 -translate-y-1/2 opacity-10 z-0 w-[500px] h-[500px]"
          />

          {/* Mission and Vision Text */}
          <div className="flex-1 relative flex flex-col gap-10">
            {/* Mission */}
            <div
              className="flex flex-col items-center justify-center p-6 absolute top-[1px] left-[10px]"
              data-aos="fade-left"
            >
              <h2 className="text-3xl font-extrabold text-green-950 mb-3">MISSION</h2>
              <p className="text-lg leading-relaxed font-bold text-black text-center">
                A diversely-differentiated <br />
                cooperative sustaining a <br />
                socially-vigorous community of <br />
                environmentally and gender <br />
                sensitive families.
              </p>
            </div>
            

            {/* Vision */}
            <div
              className="flex flex-col items-center justify-center p-6 absolute top-[1px] left-[400px]"
              data-aos="fade-left"
            >
              <h2 className="text-3xl font-extrabold text-green-950 mb-3">VISION</h2>
              <p className="text-black text-lg leading-relaxed font-bold text-center mb-6">
                To strongly respond to the <br />
                holistic empowerment needs of <br />
                vulnerable sectors through <br />
                socioeconomic programs.
              </p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div
          className="w-full absolute top-[350px] left-[870px] -translate-x-1/2 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl text-green-950 mb-6 font-extrabold">OUR HISTORY</h2>
          <p className="text-black text-lg leading-relaxed font-bold max-w-2xl mx-auto">
            Lamac Multi-Purpose Cooperative, formerly Lamac Samahang Nayon, was founded in 1973
            in the remote mountains of Lamac, Pinamungajan, Cebu. Now a multi-awarded and
            diversified cooperative with over 150,000 members across Cebu, Bohol, Negros, and
            Leyte, it empowers vulnerable sectors through a wide range of services, including
            financing, insurance, trainings, farm support, logistics, and livelihood ventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
