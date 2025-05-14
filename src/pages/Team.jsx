import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Ana Fe Elemino ',
      img: 'anna.jpg',
     
    },
    {
      name: 'Chleofe Mae Tangub ',
      img: 'cleo.jpg',
     
    },
    {
      name: 'Candy Mae Ybañez ',
      img: 'candy.jpg',
     
    },
    {
      name: 'Kristy Jane Elemino ',
      img: 'kristy.jpg',
     
    },
    {
      name: 'Aegeanne Sheilby Awa',
      img: 'sheilby-my-love.jpg',
      
    },

    {
        name: 'Angeline Hazel Ebcas',
        img: 'angeline.jpg',
        
      },
  ];
  

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-t from-gray-600 to-gray-700 text-white py-40 text-center bg-cover bg-center" style={{ backgroundImage: "url(ctu.webp)" }}>
     
      </div>
      <div>
        
      </div>

      {/* About the Black Mavericks */}
      <section className="py-12 bg-green-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Meet the Team OptiCore</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            kung kaya nang iba ipagawa mo sa kanila!
          </p>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card bg-green-200 shadow-lg rounded-lg p-6 transition-all duration-300 hover:bg-gray-700 hover:text-gray-100">
                <img src={member.img} alt={member.name} className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-solid border-2 border-white" />
                <h3 className="text-xl font-bold">{member.name}</h3>
                
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;