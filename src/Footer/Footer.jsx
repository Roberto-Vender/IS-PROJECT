import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-400 text-white py-6">
      
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
  

        <div className="flex flex-col items-center md:items-start">
          <a href="/team" className="flex flex-col items-center ">
          <div className="w-6 h-6 mb-1">
                <img src="group-of-students.png" alt="Team" />
              </div>  
            
          <p className="text-lg text-white">
            <Link to="/Team">
            <b className='hover:text-gray-400 text-4xl'>OptiCore</b>
            </Link>
          </p>
          </a>
          <p className="text-sm text-gray-700 items-center mt-2">
          Join us in exploring the beauty of LMPC Integrated Farm School
          </p>
        </div>

        <div className="flex flex-row gap-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/profile.php?id=100085942788460" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <img src="facebook.png" alt="Facebook" className="w-5 h-5" />
          </a>
          <a href="https://lamacmpc.coop" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <img src="google.png" alt="Google" className="w-5 h-5" />
          </a>
          <a href="https://youtu.be/3QF8afd7CQM?si=TiLWdcGF46u0nYCd" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <img src="youtube.png" alt="Instagram" className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-700 mt-4">
        © 2025 LMPC Integrated Farm School. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;