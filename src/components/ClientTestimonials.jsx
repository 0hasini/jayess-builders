import React from 'react';

const testimonials = [
  {
    name: 'Praveen Kumar',
    project: 'Vihar Vimla, Hyderabad',
    text: "Living at Vihar Vimla in Dilshuknagar has truly elevated our lifestyle. The location is central, making our daily commute and errands incredibly convenient. The apartment is spacious, well-ventilated, and thoughtfully crafted. For families like ours seeking both comfort and community, Vihar Vimla is an excellent choice."
  },
  {
    name: 'Sunil Kumar',
    project: 'Shoba Villa, Hyderabad',
    text: "Choosing a home at Shoba Villa has been a great decision. The environment strikes the right balance between elegance and practicality. From premium fittings to easy access to shopping and schools, everything is within reach. The professionalism of the management team only adds to the satisfaction."
  },
  {
    name: 'Shravan',
    project: 'Renuka Nilayam, Hyderabad',
    text: "Renuka Nilayam has been the peaceful retreat I was hoping for. Nestled amidst greenery, it offers a calming atmosphere that's perfect after a long day. The thoughtful layout and vibrant community makes it more than just a house, it truly feels like home in the heart of Hyderabad."
  }
];


const ClientTestimonials = () => (
  <section className="py-12 max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-extrabold mb-8 bg-gradient-to-b from-[#6F5B4A] to-[#A88A70] bg-clip-text text-transparent text-center">
      Client Testimonials
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className={
            "bg-brown-100 border border-brown-200 rounded-lg shadow-lg p-8 flex flex-col justify-between min-h-[340px]" +
            (idx === 2 ? ' md:col-start-1 md:col-span-1 lg:col-auto' : '')
          }
        >
          <p className="mb-6 text-brown-800 text-base">{t.text}</p>
          <div>
            <div className="font-bold text-xl text-brown-800 mb-1">{t.name}</div>
            <div className="text-brown-700 text-base">{t.project}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ClientTestimonials;
