import React from "react";

const AboutSection = () => {
  return (
    <section id="About" className="relative overflow-hidden py-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-12.5">
        <h1 className="mb-8 font-bold text-3xl sm:text-4xl text-center">
          Nourishing Bodies, Healing Souls, Delivering Hope 
        </h1>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="mt-0 font-bold text-xl sm:text-2xl text-red-500 mb-4">
              "In the service of others, we find our true purpose." <div className="text-black">- ASHIQ MASIH</div>
            </h2>
            <p className="text-base sm:text-lg">
              Since 2012, <strong>Jannat Welfare</strong> has been a beacon of hope in Pakistan, providing essential support to those in need. Founded by <strong>ASHIQ MASIH</strong>, a dedicated pastor with a vision for change, our mission encompasses:
            </p>
            <ul className="list-disc pl-5 mt-4 text-base sm:text-lg">
              <li>Distributing nutritious meals to combat hunger</li>
              <li>Offering free medical care and surgeries in our clinic</li>
              <li>Providing safe, compassionate maternity services</li>
            </ul>
          </div>
          <div className="w-full p-4 mt-6 md:w-1/2 md:mt-0">
            <img 
              src="public/home.jpeg" 
              className="hidden md:block w-full h-auto max-w-md mx-auto" 
              alt="Pastor ASHIQ MASIH" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;