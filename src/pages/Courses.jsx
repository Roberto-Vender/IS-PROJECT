import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronUpIcon } from '@heroicons/react/24/outline';


const courses = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
       <div className="max-w-6xl mx-auto relative z-10">
  <h2 className="text-4xl text-green-950 mb-6 text-center font-extrabold">
    Courses We Offer
  </h2>
  <div className="flex justify-center mb-10">
    <p className="text-black text-lg leading-relaxed font-bold text-center max-w-3xl">
      Lamac Multi-Purpose Cooperative, formerly Lamac Samahang Nayon, was founded in 1973 in the remote mountains of Lamac, Pinamungajan, Cebu. Now a multi-awarded and diversified cooperative with over 150,000 members across Cebu, Bohol, Negros, and Leyte, it empowers vulnerable sectors through a wide range of services, including financing, insurance, trainings, farm support, logistics, and livelihood ventures.
    </p>
  </div> 

        <div className="relative">
          {/* Section 1 */}

          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col justify-start h-full">
              <h2 className="text-2xl font-extrabold text-green-950 mb-3">
                ORGANIC AGRICULTURE PRODUCTION NC II
              </h2>
              <p className="text-s leading-relaxed text-black mb-2">
                The ORGANIC AGRICULTURE PRODUCTION NC II Qualification consists of competencies that a person must achieve to produce organic farm products such as chicken and vegetables including producing of organic supplements such as fertilizer, concoctions and extracts. It has two (2) elective
                competencies which are on raising organic hogs and raising organic small ruminants.
              </p>
              <p className="text-s leading-relaxed text-black mb-2 z-10 ">
                Opportunities 
              </p>
              <ul className="list-disc list-inside text-s leading-relaxed text-black mb-2 ">
                <li>Daily Processing</li>
                <li>Coco Hub Tuburan</li>
                <li>Demo Farm</li>
                <li>Cacao Nursery</li>
              </ul>
            </div>
            <div data-aos="fade-left" className="flex items-start h-full z-10">
              <img
                src="vege.png"
                alt="Our Team"
                className="rounded-xl shadow-md w-full h-80 object-cover "
              />
            </div>
          </section>
          <hr className="border-t-4 border-blacks my-8" />
          {/* Section 2 */}

          <section className="mb-16 grid md:grid-cols-2 gap-10 items-start">
            <div className="flex items-start h-full z-10" data-aos="fade-right">
              <img
                src="man.png"
                alt="Mission Image"
                className="rounded-xl shadow-md w-full h-80 object-cover"
              />
            </div>
            <div className="flex flex-col justify-start h-full z-10">
              <h2 className="text-2xl font-extrabold text-green-950 mb-3 z-10">
                AGRO ENTREPRENEURSHIP NC II
              </h2>
              <p className="text-black text-s leading-relaxed mb-6 z-10">
                The AGROENTREPRENEURSHIP NC II Qualification consists of competencies that a person must achieve to assess market opportunities, establish farm production plan, handle finances, and market produce.
              </p>
              <p className="text-s leading-relaxed text-black mb-2 z-10">
                Opportunities 
              </p>
              <ul className="list-disc list-inside text-s leading-relaxed text-black mb-2 z-10">
                <li>Daily Processing</li>
                <li>Coco Tuburan</li>
                <li>Tablea Processing</li>
                <li>Market Centralization</li>
              </ul>
            </div>

          </section>
          <hr className="border-t-4 border-blacks my-8" />
          <img
            src="img1.png"
            alt="background"
            className="absolute left-1/2 top-[520px] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 z-0 pointer-events-none select-none"
            style={{ objectFit: 'contain', marginTop: '-150px' }}
          />
        </div>

        <div className="relative mt-32">
          {/* Section 3 */}
          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col justify-start h-full">
              <h2 className="text-2xl font-extrabold text-green-950 mb-3">
                ANIMAL PRODUCTION (SWINE) NC II
              </h2>
              <p className="text-s leading-relaxed text-black mb-2 z-10">
                The ANIMAL PRODUCTION (SWINE) NC II Qualification consists of competencies that a person must achieve to handle breeders, handle farrowing sows and sucklings, raise weanlings, produce finishers, maintain healthy animal environment and apply biosecurity measures.
              </p>
              <p className="text-s leading-relaxed text-black mb-2 z-10">
                Opportunities 
              </p>
              <ul className="list-disc list-inside text-s leading-relaxed text-black mb-2">
                <li>Piggery Inspire</li>
              </ul>
            </div>
            <div data-aos="fade-left" className="flex items-start h-full z-10">
              <img
                src="pig.png"
                alt="Our Team"
                className="rounded-xl shadow-md w-full h-80 object-cover"
              />
            </div>
          </section>
          <hr className="border-t-4 border-blacks my-8" />
          <section className="mb-16 grid md:grid-cols-2 gap-10 items-start ">
            {/* Section 4 */}
            <div className="flex items-start h-full z-10" data-aos="fade-right">
              <img
                src="chicken.png"
                alt="Mission Image"
                className="rounded-xl shadow-md w-full h-80 object-cover"
              />
            </div>
            <div className="flex flex-col justify-start h-full">
              <h2 className="text-2xl font-extrabold text-green-950 mb-3 z-10">
                ANIMAL PRODUCTION (POULTRY-CHICKEN) NC II
              </h2>
              <p className="text-black text-s leading-relaxed mb-6 z-10">
                The ANIMAL PRODUCTION (POULTRY-CHICKEN) NC II Qualification consists of competencies that a person must achieve to maintain poultry housing, brood and grow chicks, perform pre-lay and lay activities and trim beak. These functions are required for individual who will work in a poultry (broiler and layers).
              </p>
            </div>
          </section>
          <hr className="border-t-4 border-blacks my-8" />
          <img
            src="img1.png"
            alt="background"
            className="absolute left-1/2 top-[520px] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 z-0 pointer-events-none select-none "
            style={{ objectFit: 'contain', marginTop: '-150px' }}
          />
<section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
  {/* Section 5 */}
  <div className="flex flex-col justify-start h-full">
    <h2 className="text-2xl font-extrabold text-green-950 mb-3 z-10">
      LARGE RUMINANTS NC II
    </h2>
    <p className="text-s leading-relaxed text-black mb-2 z-10">
      The ANIMAL PRODUCTION (RUMINANTS) NC II Qualification consists of competencies that a person must achieve to raise ruminants for production of milk, meat and breeder. It comprises of maintenance of housing, farm implements and surrounding area, providing forage, performing breeding of ruminants, raising of dairy animals and raising of meat-type animals. The ruminants include both the large (cattle and buffalo) and small (goat and sheep) ruminants.
    </p>
    <p className="text-s leading-relaxed text-black mb-2 z-10">Opportunities</p>
    <ul className="list-disc list-inside text-s leading-relaxed text-black mb-2">
      <li>Dairy Farm Production</li>
    </ul>
  </div>
  <div data-aos="fade-left" className="flex items-start h-full z-10">
    <img
      src="cow.png"
      alt="Farm Mechanization"
      className="rounded-xl shadow-md w-full h-80 object-cover "
    />
  </div>
</section>
<img
  src="img1.png"
  alt="background"
  className="absolute left-1/2 top-[960px] -translate-x-1/2  w-[500px] h-[500px] opacity-20 z-0 pointer-events-none select-none"
  style={{ objectFit: 'contain', marginTop: '-150px' }}
/>
          
        </div>  
        </div>
      </div>
      {/* Scroll-to-Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="z-10 fixed bottom-8 right-0 p-1.5  rounded-full bg-green-600 text-white hover:bg-green-900 shadow-md transition"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
    
  );
};

export default courses;

