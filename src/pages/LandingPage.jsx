import React from 'react';
import "animate.css";

const LandingPage = () => {
  return (
    <>
      <div
        className="hero min-h-screen animate-fadeIn"
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source
            src="vid1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(74, 222, 128, 0.5)",
            zIndex: "0", // para ang content naa sa babaw sa video
          }}
        ></div>

        <div className="hero-overlay bg-opacity-0"></div> 
        
        {/* para mas makita ang mga content*/}
        <div
          className="hero-content text-white text-left px-6 sm:px-10 md:px-20"
          style={{
            position: "relative",
            zIndex: 1, 
            color: "#fff"
          }}
        >   
            <img src="img1.png" alt="logo" className="w-[500px] absolute top-[100px] left-[2px]"/>
            <img src="img2.png" alt="logo" className="w-[100px] absolute top-[3px] left-[20px]"/>
          <div className="max-w-screen-lg">
            <h1 className="mb-2 text-10xl sm:text-8xl md:text-10xl font-bold font-Monument absolute right-[115px] top-[165px]">
                FARM SCHOOL
                <div className="flex bg-white shadow shadow-black py-0.5 absolute bottom-[220px] -left-[410px] w-[400px] rounded-full "></div>
            </h1>
            <h2 className="mb-5 text-lg md:text-3xl font-thin italic animate__fadeIn animate__delay-1s">
            <h1 className="text-black absolute top-[6px] left-[120px] text-lg font-bold">
            LAMAC MULTI-PURPOSE COOPERATIVE
            </h1>
            <h1 className="text-black absolute top-[40px] left-[120px] text-lg ">
            Est. 1973
            </h1>

            </h2>
            
            <p className="mb-5 text-md sm:text-lg pt-2 pb-10 text-[#023d19] text-center font-bold animate__fadeIn animate__delay-2s absolute right-[80px] top-[275px] ">
            From its humble beginnings in 1973 as a small farmers' self-help group in the remote<br></br> 
            barangay of Lamac, Pinamungajan, Cebu, the Lamac Farm School has grown into a key <br></br>
            institution dedicated to empowering farmers through practical education, training, and <br></br>
            sustainable agricultural practices.
            </p>
            <a href="/home">
            <button className="bg-green-400 py-3 px-6 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300 transform hover:scale-105 absolute right-96 top-[410px]">
            Get Started ➤
            </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
