import nana2 from '../images/nana2.png';


function OwnerDetails() {
  return (
    <>
    
      <div className="border-t border-brown-200 w-full mb-8 mt-4" />
      <section className="bg-white py-8 px-4 flex flex-col items-center text-center">
        <img
          src={nana2}
          alt="Owner"
          className="w-36 h-36 rounded-full mb-4 border-4 border-brown-300 object-cover shadow-md"
        />
        <h2 className="text-2xl font-bold text-brown-800 mb-1">Mr. R. Surya Prakash</h2>
        <p className="text-brown-800 mb-1">Phone: <a href="tel:+919515496226" className="underline">+91 95154 96226</a></p>
        <p className="text-brown-800 mb-2">Email: <a href="mailto:jayessbuilders1@gmail.com" className="underline">jayessbuilders1@gmail.com</a></p>
        <p className="text-brown-700 max-w-md">With over 15 years of experience, Mr. R. Surya Prakash leads Jayess Builders with a passion for quality and a vision for community impact.</p>
      </section>
    </>
  );
}

export default OwnerDetails; 