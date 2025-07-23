import React from 'react';

const locations = [
  'Model Colony', 'Shivaji Nagar', 'Salisbury Park', 'Aundh', 'Chinchwad'
];

const Redevelopment = () => (
  <div className="py-12 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Redevelopment</h1>
    <p className="mb-4">Raichandani Group elevates Pune’s living standards through its Redevelopment Division. Prime locations, seamless connectivity, and refined construction are the hallmarks of our projects, delivering a holistic living experience.</p>
    <p className="mb-4">We embody sophistication, trust, and affordability, ensuring transparency throughout the process, from assessment to legalities. Upholding core values and quality, we redefine living spaces and foster enduring relationships.</p>
    <h2 className="text-xl font-semibold mb-2 mt-6">Redevelopment Locations</h2>
    <ul className="flex flex-wrap gap-4 mb-6">
      {locations.map(loc => (
        <li key={loc} className="bg-gray-100 px-4 py-2 rounded shadow">{loc}</li>
      ))}
    </ul>
    <h2 className="text-xl font-semibold mb-2">Our Process</h2>
    <ol className="list-decimal pl-6 mb-4">
      <li>Assessment of property and requirements</li>
      <li>Transparent legal and documentation process</li>
      <li>Design and planning with client collaboration</li>
      <li>Quality construction and timely delivery</li>
      <li>Post-completion support and relationship building</li>
    </ol>
    <p className="font-semibold">Join us in shaping a future where quality, innovation, and community engagement create spaces that inspire and enrich lives.</p>
  </div>
);

export default Redevelopment; 