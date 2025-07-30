import { useEffect, useState, useRef } from 'react';
import oneImg from '../images/a1.jpg';
import twoImg from '../images/a2.jpg';
import threeImg from '../images/a3.jpg';
import fourImg from '../images/a4.jpg';
import AboutUs from './AboutUs';

const images = [oneImg, twoImg, threeImg, fourImg];

function ProjectsStats() {
  const projectCount = 9;

  // Carousel logic
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (dir) => {
    setCurrent((prev) => {
      if (dir === 'left') return (prev - 1 + images.length) % images.length;
      return (prev + 1) % images.length;
    });
    // Reset timer on manual navigation
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  // Get indices for the 3 images to show
  const getIndices = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + images.length) % images.length);
    }
    return indices;
  };
  const indices = getIndices();

  return (
    <>
      <AboutUs />
      <section className="bg-white py-10 px-2 sm:px-4 md:px-6 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl rounded-xl shadow-lg overflow-hidden bg-brown-50 pb-10">
        {/* Achievements Left */}
        <div className="flex flex-col justify-center items-center text-center p-4 sm:p-6">
        <h2 className="text-3xl font-extrabold mb-4 tracking-tight text-center bg-gradient-to-b from-[#6F5B4A] to-[#A88A70] bg-clip-text text-transparent">
          Our Achievements
        </h2>
          <div className="bg-brown-100 rounded-lg px-6 sm:px-8 py-6 shadow-md flex flex-col items-center mb-4">
              <span className="text-3xl font-extrabold bg-gradient-to-b from-[#6F5B4A] to-[#A88A70] bg-clip-text text-transparent mb-2">{projectCount}+</span>
            <span className="bg-gradient-to-b from-[#6F5B4A] to-[#A88A70] bg-clip-text text-transparent font-semibold">Projects Completed</span>
          </div>
          <p className="text-brown-800 max-w-xs">Each project by Jayess Builders has transformed neighborhoods and improved lives. Our commitment to quality and community has resulted in sustainable homes, modern commercial spaces, and a legacy of trust among our clients.</p>
        </div>
        {/* Carousel Right */}
        <div className="relative flex items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto min-h-[200px] sm:min-h-[250px] md:min-h-[350px]">
          {/* Left Arrow */}
          <button
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 shadow hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => goTo('left')}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div className="flex items-center justify-center w-full h-full relative">
            {indices.map((idx, i) => {
              // Middle image is highlighted
              const isMiddle = i === 1;
              return (
                <img
                  key={idx}
                  src={images[idx]}
                  alt={`Project ${idx + 1}`}
                  className={`absolute transition-all duration-500 
                    ${isMiddle ? 'z-20 scale-110 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl' : ''}
                    ${i === 0 ? 'z-10 scale-95 left-[18%] top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 backdrop-blur-sm' : ''}
                    ${i === 2 ? 'z-10 scale-95 left-[82%] top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 backdrop-blur-sm' : ''}
                    rounded-xl object-cover h-40 w-28 sm:h-48 sm:w-40 md:h-64 md:w-52 bg-white border border-brown-200`
                  }
                  style={{
                    boxShadow: isMiddle ? '0 8px 32px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                />
              );
            })}
          </div>
          {/* Right Arrow */}
          <button
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 shadow hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => goTo('right')}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
    </>
  );
}

export default ProjectsStats; 