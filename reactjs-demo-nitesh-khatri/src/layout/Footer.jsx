import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer bg-[#1a2c32] text-white p-2">
      <div className="container mx-auto">
        <p>&copy; copyright {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
