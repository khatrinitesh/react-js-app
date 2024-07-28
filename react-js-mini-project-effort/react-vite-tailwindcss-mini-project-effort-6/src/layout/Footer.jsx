import React from "react";

const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white p-2">
      <div className="container mx-auto">
        <p>&copy; copyright {currentyear}</p>
      </div>
    </footer>
  );
};

export default Footer;
