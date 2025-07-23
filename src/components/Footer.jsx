function Footer() {
  return (
    <footer className="bg-white text-brown-800 py-6 px-8 md:px-16 text-center mt-10 border-t border-brown-200">
      <div className="mb-2">
        <span className="block font-semibold">Office Address:</span>
        <span>Jayess Builders, 2nd Floor, Sunrise Towers, Road No. 10, Banjara Hills, Hyderabad, Telangana 500034, India</span>
      </div>
      <div className="text-xs text-brown-700">&copy; {new Date().getFullYear()} Jayess Builders. All rights reserved.</div>
    </footer>
  );
}

export default Footer; 