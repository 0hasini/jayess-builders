import React from 'react';

const salesInquiry = [
  { city: 'Hyderabad', phone: '+91 91009 99136' },
  { city: 'Pune', phone: '+91 95035 88823' },
  { city: 'Indore', phone: '+9188893 88830' },
  { city: 'Goa', phone: '+91 94066 61200' },
  { city: 'Bhopal', phone: '+91 94066 61200' },
  { city: 'Karimnagar', phone: '+91 91009 99136' },
];

const Contact = () => (
  <div className="py-12 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
    <form className="bg-white p-6 rounded shadow mb-8">
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Name</label>
        <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Your Name" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Email</label>
        <input type="email" className="w-full border px-3 py-2 rounded" placeholder="Your Email" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Message</label>
        <textarea className="w-full border px-3 py-2 rounded" rows="4" placeholder="Your Message"></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold">Send Message</button>
    </form>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Company Contact Info</h2>
      <p>Email: <a href="mailto:info@raichandanigroup.com" className="text-blue-600">info@raichandanigroup.com</a></p>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Sales Inquiry Numbers</h2>
      <ul>
        {salesInquiry.map((item, idx) => (
          <li key={idx} className="mb-1">{item.city}: <span className="font-semibold">{item.phone}</span></li>
        ))}
      </ul>
    </div>
  </div>
);

export default Contact; 