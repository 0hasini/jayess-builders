import React from 'react';

const cities = [
  'Hyderabad', 'Pune', 'Indore', 'Goa', 'Bhopal', 'Karimnagar'
];
const projectTypes = ['Residential', 'Commercial'];

const Projects = () => (
  <div className="py-12 max-w-5xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Cities</h2>
      <ul className="flex flex-wrap gap-4">
        {cities.map(city => (
          <li key={city} className="bg-gray-100 px-4 py-2 rounded shadow">{city}</li>
        ))}
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Project Types</h2>
      <ul className="flex gap-4">
        {projectTypes.map(type => (
          <li key={type} className="bg-gray-200 px-4 py-2 rounded shadow">{type}</li>
        ))}
      </ul>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-4">Project Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder images and captions for gallery */}
        <div className="bg-white rounded shadow p-4">
          <img src="/src/images/house-7124141_1920.jpg" alt="Hyderabad Project" className="w-full h-40 object-cover rounded mb-2" />
          <div className="font-semibold">Orchid Villas, Hyderabad</div>
          <div className="text-sm text-gray-600">Residential</div>
        </div>
        <div className="bg-white rounded shadow p-4">
          <img src="/src/images/telangana.png" alt="Pune Project" className="w-full h-40 object-cover rounded mb-2" />
          <div className="font-semibold">Pentagon Towers, Pune</div>
          <div className="text-sm text-gray-600">Residential</div>
        </div>
        <div className="bg-white rounded shadow p-4">
          <img src="/src/images/contact-us.png" alt="Goa Project" className="w-full h-40 object-cover rounded mb-2" />
          <div className="font-semibold">Botanica, Goa</div>
          <div className="text-sm text-gray-600">Residential</div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects; 