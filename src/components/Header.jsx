import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function AdminHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        menuButtonRef.current && !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-20">
      <div
  className="p-3.5 z-10 bg-cover"
  style={{ backgroundImage: 'url(footerbg.jpg)', backgroundPosition: '67% 67%' }}
>


        <div className="flex justify-between items-center mx-12">
        <a
  href="/LandingPage"
  className="text-2xl text-white text-center font-bold font-poppins relative"
>
  <span className="relative text-shadow-lg text-green-500">
    LMPC INTEGRATED FARM SCHOOL
  </span>
  <div className="absolute top-5 left-0 w-full text-green-300  transform scale-y-[-1] opacity-50">
    LMPC INTEGRATED FARM SCHOOL
  </div>
</a>



        
          <div className="relative inline-block text-left" ref={menuButtonRef}>
            <button
              onClick={toggleDropdown}
              className="flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
            >
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>

            
            <div
              ref={dropdownRef}
              className={`${
                isOpen ? 'block' : 'hidden'
              } z-10 origin-top-right absolute right-0  w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none `}
            >
              <div className="py-1">

                {/* Menu Items with Logos */}
                <Link to="/home" className="text-gray-700  px-4 py-2 text-sm flex items-center hover:bg-gray-400" onClick={closeDropdown}>
                  <img src="home.png" alt="Home" className="w-5 h-5 mr-3" />
                  Home
                </Link>
                <Link to="/AboutUs" className="text-gray-700 px-4 py-2 text-sm flex items-center hover:bg-gray-400" onClick={closeDropdown}>
                  <img src="location.png" alt="About Us" className="w-5 h-5 mr-3" />
                  About Us
                </Link>
                <Link to="/courses" className="text-gray-700  px-4 py-2 text-sm flex items-center hover:bg-gray-400" onClick={closeDropdown}>
                  <img src="learning.png" alt="Courses" className="w-5 h-5 mr-3" />
                  Courses
                </Link>
                <Link to="/Contact" className="text-gray-700 px-4 py-2 text-sm flex items-center hover:bg-gray-400" onClick={closeDropdown}>
                  <img src="phone.png" alt="Contact" className="w-5 h-5 mr-3" />
                  Contact
                </Link>
                <Link to="/flowchart" className="text-gray-700 px-4 py-2 text-sm flex items-center hover:bg-gray-400" onClick={closeDropdown}>
                  <img src="flow-chart.png" alt="Process Flowchart" className="w-5 h-5 mr-3" />
                  Process Flowchart
                </Link>
                <Link to="/OrgChart" className="text-gray-700 px-4 py-2 text-sm flex items-center hover:bg-gray-400" onClick={closeDropdown}>
                  <img src="process.png" alt="Organizational Chart" className="w-5 h-5 mr-3" />
                  Organizational Chart
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
