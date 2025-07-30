import React from 'react';

function AboutUs() {
  return (
    <section className="relative bg-gradient-to-br from-brown-100 via-white to-brown-100 py-10 px-4 md:px-8 rounded-2xl shadow-xl mb-10 w-full max-w-4xl mx-auto border-l-8 border-brown-200 flex flex-col items-center mt-8">
      <div className="absolute -top-6 left-8 text-brown-200 text-6xl opacity-30 select-none pointer-events-none">
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 48 48' width='48' height='48'><text x='0' y='40' fontSize='48' fontFamily='serif'>“</text></svg>
      </div>
      <h2 className="text-3xl font-extrabold mb-4 tracking-tight text-center bg-gradient-to-b from-[#6F5B4A] to-[#A88A70] bg-clip-text text-transparent">
        About Us
      </h2>

      <p className="text-brown-800 mb-3 text-base sm:text-lg leading-relaxed text-center">
        With over <span className="font-bold text-brown-700">15 years</span> of experience, <span className="font-bold text-brown-700">Jayess Builders</span> has completed <span className="font-bold text-brown-700">9+ projects</span>, transforming neighborhoods and improving lives. Our commitment to quality, innovation, and community has resulted in sustainable homes, modern commercial spaces, and a legacy of trust among our clients.
      </p>
      <p className="text-brown-700 mb-3 text-base md:text-lg text-center">
        Our achievements are not just in numbers, but in the <span className="font-semibold">satisfaction of our clients</span>. We take pride in the glowing testimonials from families and businesses who have found their dream spaces with us. Their trust and happiness drive us to keep raising the bar in construction excellence.
      </p>
      <p className="text-brown-700 text-base md:text-lg text-center">
        Join our growing family of <span className="font-semibold">satisfied clients</span> and experience the Jayess Builders difference—where your vision becomes our mission.
      </p>
    </section>
  );
}

export default AboutUs; 