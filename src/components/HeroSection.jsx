import houseImg from '../images/house-7124141_1920.jpg';

function HeroSection() {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-20">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <p className="text-2xl md:text-4xl font-bold text-brown-700 mb-4">Building Dreams, Creating Legacies</p>
        <p className="text-brown-800 mb-6 max-w-lg">We turn your vision into reality with quality craftsmanship and a commitment to excellence. Discover homes that inspire, spaces that nurture, and projects that stand the test of time.</p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src={houseImg} alt="Modern house" className="rounded-lg shadow-lg max-h-80 object-cover border-4 border-brown-200" />
      </div>
    </section>
  );
}

export default HeroSection; 