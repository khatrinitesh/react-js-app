import React from "react";

const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <footer className="footer bg-black text-white p-[10px]">
      <div className="container mx-auto">
        <p>&copy; Copyright {currentyear}</p>
      </div>
    </footer>
  );
};

export default Footer;
