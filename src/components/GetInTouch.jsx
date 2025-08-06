import telanganaImg from '../images/earth0.png';
import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  district: z.string().min(1, 'Interested area is required'),
  phone: z.string().regex(/^[\+\d\s\-\(\)\.]{7,30}$/, 'Phone number must be 6-30 characters (country codes, spaces, dashes, parentheses, and dots allowed)'),
  email: z.string().email('Invalid email address'),
  propertyType: z.string().optional(),
});

function GetInTouch() {
  const [form, setForm] = useState({
    name: '',
    district: '',
    phone: '',
    email: '',
    propertyType: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isLoading) return;
    
    const phoneToValidate = form.phone.trim();
    console.log("Phone number to validate:", `"${phoneToValidate}"`);
    console.log("Phone number length:", phoneToValidate.length);
    
    const result = schema.safeParse({
      name: form.name,
      district: form.district,
      phone: phoneToValidate,
      email: form.email,
      propertyType: form.propertyType,
    });
    if (!result.success) {
      console.log("Validation errors:", result.error.errors);
      const errorMessages = result.error.errors 
        ? result.error.errors.map(err => {
            // Map field names to user-friendly names
            const fieldMap = {
              name: 'Full Name',
              district: 'Interested Area', 
              phone: 'Phone Number',
              email: 'Email Address',
              propertyType: 'Message'
            };
            const fieldName = fieldMap[err.path[0]] || err.path[0];
            return `• ${fieldName}: ${err.message}`;
          }).join('\n')
        : 'Please check your input and try again.';
      
      alert(`Please fix the following errors:\n\n${errorMessages}`);
      return;
    }
    
    setIsLoading(true);
    try {
      console.log("Submitting form data:", {
        name: form.name,
        interestedArea: form.district,
        phoneNo: form.phone,
        email: form.email,
        message: form.propertyType
      });
      
      const response = await fetch("https://api.jayessbuilders.co/user/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          interestedArea: form.district,
          phoneNo: form.phone,
          email: form.email,
          message: form.propertyType
        })
      });
      
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
      
      const data = await response.json();
      console.log("Response data:", data);
      
      if (response.ok) {
        alert("Message sent successfully!");
        setForm({
          name: '',
          district: '',
          phone: '',
          email: '',
          propertyType: ''
        });
      } else {
        alert(`Failed to send message: ${data.message || response.statusText}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Network error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-white py-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center gap-20 mt-4">
      <div className="flex-1 flex flex-col items-center">
        <img
          src={telanganaImg}
          alt="Telangana Districts"
          className="w-full max-w-md rounded-lg shadow-lg border-4 border-brown-200 mb-6 md:mb-0"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="bg-gradient-to-b from-[#6F5B4A] to-[#A88A70] bg-clip-text text-transparent text-3xl font-extrabold mb-6 text-center">Get In Touch With Us</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white border-4 border-brown-200 rounded-xl p-8 flex flex-col gap-4 min-w-[340px] max-w-lg shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name..."
              className="flex-1 p-3 border border-brown-200 rounded focus:outline-none focus:ring-2 focus:ring-brown-200 bg-brown-100 text-brown-800"
              required
            />
            <input
              type="text"
              name="district"
              value={form.district}
              onChange={handleChange}
              placeholder="Interested Area..."
              className="flex-1 p-3 border border-brown-200 rounded focus:outline-none focus:ring-2 focus:ring-brown-200 bg-brown-100 text-brown-800"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number..."
              className="flex-1 p-3 border border-brown-200 rounded focus:outline-none focus:ring-2 focus:ring-brown-200 bg-brown-100 text-brown-800"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address..."
              className="flex-1 p-3 border border-brown-200 rounded focus:outline-none focus:ring-2 focus:ring-brown-200 bg-brown-100 text-brown-800"
              required
            />
          </div>
          <textarea
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
            placeholder="Message..."
            rows={2}
            className="p-3 border border-brown-200 rounded focus:outline-none focus:ring-2 focus:ring-brown-200 bg-brown-100 text-brown-800 resize-none min-h-[48px]"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-[#8d6748] text-white font-bold py-3 rounded mt-6 transition shadow-lg ${
              isLoading 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#6b4f2c]'
            }`}
          >
            {isLoading ? 'Loading...' : 'Contact Us'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default GetInTouch; 