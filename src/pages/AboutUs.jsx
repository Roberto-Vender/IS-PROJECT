import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        

        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
          <h2 className="text-3xl font-extrabold text-green-950  mb-3 ">MISSION</h2>
            <p className=" text-lg leading-relaxed font-bold text-black">
            A diversely-differentiated cooperative sustaining a socially-vigorous community of environmentally and gender sensitive families.
            </p>
          </div>
          
          <div data-aos="fade-left">
            <img
              src="img6.jpeg"
              alt="Our Team"
              className="rounded-xl shadow-md w-full h-64 object-cover"
            />
          </div>
        </section>

        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <img
              src="img5.jpg"
              alt="Mission Image"
              className="rounded-xl shadow-md w-full h-64 object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-green-950  mb-3">VISSON</h2>
            <p className="text-black text-lg leading-relaxed font-bold mb-6">
            To strongly respond to the holistic empowerment needs of vulnerable sectors through socioeconomic programs.
            </p>
            
          </div>
        </section>

        <section className="mb-10">
  <h2 className="text-3xl text-green-950 mb-6 text-center font-extrabold">
    OUR HISTORY
  </h2>
  <div className="flex justify-center">
    <p className="text-black text-lg leading-relaxed font-bold text-center max-w-2xl">
      Lamac Multi-Purpose Cooperative, formerly Lamac Samahang Nayon, was founded in 1973 in the remote mountains of Lamac, Pinamungajan, Cebu. Now a multi-awarded and diversified cooperative with over 150,000 members across Cebu, Bohol, Negros, and Leyte, it empowers vulnerable sectors through a wide range of services, including financing, insurance, trainings, farm support, logistics, and livelihood ventures.
    </p>
  </div>
</section>
</div>
</div>
  );
};

export default AboutUs;