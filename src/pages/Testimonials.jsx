import React from 'react';

const testimonials = [
  {
    name: 'Imran Shaikh',
    project: 'Swarna Vatika, Pune',
    text: 'After searching multiple places for our dream house, we finally landed on Swarna Vatika by Raichandani Group. Located on NIBM Road, it was ideal for all our daily needs. Their attention to detail and the top-notch quality of construction surpassed our expectations. We are pleased with our decision.'
  },
  {
    name: 'Rahul U. Marathe',
    project: 'Pentagon Towers, Pune',
    text: 'Pentagon Towers in Karve Nagar has been an absolute dream come true for the perfect family home. We are in a prime location that provides easy access to all our needs. The apartment is thoughtfully designed with spacious rooms, modern finishes, and ample storage space. If you\'re looking for a convenient, community-based living experience, we highly recommend it.'
  },
  {
    name: 'Monika Agrawal',
    project: 'Orchid Villas, Hyderabad',
    text: 'I made a fantastic investment decision by choosing Orchid Villas for my family. As the construction progresses, I am already experiencing the promise of a spacious and bright villa filled with natural light. The villa and its picturesque surroundings promise an exceptional living experience.'
  },
  {
    name: 'Bhowmik Gupta',
    project: 'Botanica, Goa',
    text: 'I am thrilled to have chosen Botanica as my vacation home in Goa. Located in Candolim, it has been nothing less than a paradise for me. The Raichandani Group has surpassed my expectations with this project. The vibrant and lively atmosphere, breathtaking design, and unbeatable location make it the perfect place to call a second home.'
  }
];

const Testimonials = () => (
  <div className="py-12 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Client Testimonials</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-gray-50 p-6 rounded shadow">
          <p className="mb-4 italic">"{t.text}"</p>
          <div className="font-semibold">- {t.name}</div>
          <div className="text-sm text-gray-600">{t.project}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials; 