import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateAccountCustomer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitted(true); // Set the state to true when the form is submitted
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center p-4" style={{ backgroundImage: "url('/image.jpg')" }}>
      <div className="bg-gray-200 text-black rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <div className="flex items-center mb-5">
          <div className="w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center text-3xl">
            S
          </div>
          <div className="ml-4 text-xl font-bold">Enrollment Form</div>
        </div>

        <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
            <label className="block mb-1">First Name:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="First Name" />
        </div>
        <div>
            <label className="block mb-1">Last Name:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black border border-gray-300" placeholder="Last Name" />
        </div>
        <div>
            <label className="block mb-1">Sex:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="Sex" />
        </div>
        <div>
            <label className="block mb-1">Date of Birth:</label>
            <input type="date" className="w-full p-2 rounded bg-white text-black" />
        </div>
        <div>
            <label className="block mb-1">Phone Number:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="Phone Number" />
        </div>
        <div>
            <label className="block mb-1">Email:</label>
            <input type="email" className="w-full p-2 rounded bg-white text-black" placeholder="Email" />
        </div>
        <div>
            <label className="block mb-1">Nationality:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="Nationality" />
        </div>
        <div>
            <label className="block mb-1">Last School Attended:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="Last School Attended" />
        </div>
        <div>
            <label className="block mb-1">Program Applying:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="Program Applying" />
        </div>
        <div>
            <label className="block mb-1">Current Address:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="Current Address" />
        </div>
        </div>


          <div className="mb-4">
            <label className="block mb-1">Please Submit Image/File of your Good Moral</label>
            <input type="file" className="file-input p-2 bg-gray-500 text-black file-input-bordered file-input-sm rounded-2xl hover:bg-gray-400 cursor-pointer"
/>
          </div>
          

          <div className="flex items-center mt-4 space-x-4">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded py-2 px-4">
              Submit Form
            </button>
            {isSubmitted && (
              <div role="alert" className="alert alert-success flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Enrollment Form Submitted! 
                <a className="text-blue-400" href="/Home"> Return Home</a></span>
              </div>
            )}
            <Link to="/Home" className="text-red-500 hover:underline">
              Cancel Enrollment
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountCustomer;
