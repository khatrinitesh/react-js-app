import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const FootLink = [
    { icon: <FaFacebook />, label: "Facebook" },
    { icon: <FaTwitter />, label: "Twitter" },
    { icon: <FaWhatsapp />, label: "WhatsApp" },
    { icon: <FaLinkedin />, label: "Linkedin" },
];

const FootList = FootLink.map((val, index) => {
    const {icon,label} = val
  return (
    <li className='mr-5'>
      <Link key={index} href="" target="_blank" className={`text-white flex items-center`}>
        <span className="mr-2">{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
})

const Footer = () => {
  return (
    <footer className="bg-[#000] p-[10px]">
      <div className="flex items-center justify-between">
        <ul className="flex items-center justify-center m-0 p-0">
            {FootList}
        </ul>
        <p className="text-white">
          &copy; copyright {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
