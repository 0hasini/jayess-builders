function Footer() {
  return (
    <footer className="bg-white text-brown-800 py-6 px-8 md:px-16 text-center mt-10 border-t border-brown-200">
      <div className="mb-1">
        <span className="font-semibold">Head Office Address: </span>
        <span>Plot no. 5, Puppalguda, Manikonda, Hyderabad, Telangana 500089, India</span>
      </div>
      <div className="mb-4">
        <span className="font-semibold">Branch Office Address: </span>
        <span>Plot no. 156 & 157, Near Astalaxmi Temple, Kothapet, Hyderabad, Telangana 500060, India</span>
      </div>
      <div className="text-xs text-brown-700">&copy; {new Date().getFullYear()} Jayess Builders. All rights reserved.</div>
    </footer>
  );
}

export default Footer; 