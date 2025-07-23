import telanganaImg from '../images/telangana.png';
import { useState } from 'react';

const telanganaDistricts = [
  'Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally',
  'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem', 'Mahabubabad',
  'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal–Malkajgiri', 'Mulugu', 'Nagarkurnool',
  'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla',
  'Ranga Reddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy',
  'Warangal Rural', 'Warangal Urban', 'Yadadri Bhuvanagiri'
];

function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    district: '',
    phone: '',
    email: '',
    propertyType: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3000/user/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          interestedDistrict: form.district,
          phoneNo: form.phone,
          email: form.email,
          message: form.propertyType
        })
      });
  
      const data = await response.json();
  
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
        alert(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong while sending your message.");
    }
  };

  return (
    <>
      <section className="bg-white py-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="flex-1 flex flex-col items-center">
          <img
            src={telanganaImg}
            alt="Telangana Districts"
            className="w-full max-w-md rounded-lg shadow-lg border border-yellow-700 mb-6 md:mb-0"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-gray-50 border-2 border-yellow-700 rounded-xl p-8 flex flex-col gap-4 min-w-[400px] max-w-lg shadow-md"
        >
          {/* Modern Decorative Header */}
          <div className="flex flex-col items-center mb-6">
            <span className="text-brown-700 text-2xl font-bold tracking-wide">Get In Touch With Us</span>
            
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name..."
              className="flex-1 p-3 border rounded focus:outline-brown-200"
              required
            />
            <select
              name="district"
              value={form.district}
              onChange={handleChange}
              className="flex-1 p-3 border rounded focus:outline-brown-200"
              required
            >
              <option value="" className='text-grey-400'>Interested District</option>
              {telanganaDistricts.map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number..."
              className="flex-1 p-3 border rounded focus:outline-brown-200"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address..."
              className="flex-1 p-3 border rounded focus:outline-brown-200"
              required
            />
          </div>
          {/* this should be a message box */}
          <input
            type="text"
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
            placeholder="Interested Property Type"
            className="p-3 border rounded focus:outline-brown-200"
          />
          <button
            type="submit"
            className="bg-yellow-700 text-white font-bold py-3 rounded mt-2 hover:bg-yellow-800 transition"
          >
            Contact Us
          </button>
        </form>
      </section>
      {/* Owner Details Section */}
      <section className="bg-white py-8 px-4 flex flex-col items-center text-center">
        <img
          src="https://ui-avatars.com/api/?name=Jay+Ess&background=8d6748&color=fff&size=128"
          alt="Owner"
          className="w-32 h-32 rounded-full mb-4 border-4 border-brown-300 object-cover shadow-md"
        />
        <h2 className="text-2xl font-bold text-black mb-1">Jay Ess</h2>
        <p className="text-brown-800 mb-1">Phone: <a href="tel:+911234567890" className="underline">+91 12345 67890</a></p>
        <p className="text-brown-800 mb-2">Email: <a href="mailto:jayess@builders.com" className="underline">jayess@builders.com</a></p>
        <p className="text-brown-700 max-w-md">With over 20 years of experience, Jay Ess leads the company with a passion for quality and a vision for community impact.</p>
      </section>
    </>
  );
}

export default ContactUs; 