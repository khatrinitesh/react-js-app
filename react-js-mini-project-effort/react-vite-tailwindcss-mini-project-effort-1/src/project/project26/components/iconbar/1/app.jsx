import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { AiFillHome, AiFillInfoCircle, AiFillMail, AiFillSetting } from "react-icons/ai";
import { BsHouseDoorFill, BsInfoCircleFill, BsFillEnvelopeFill, BsFillGearFill } from "react-icons/bs";
import { BiHome, BiInfoCircle, BiEnvelope, BiWrench } from "react-icons/bi";
import { DiSublime, DiVisualstudio, DiPostgresql, DiMongodb } from "react-icons/di";
import { FiHome, FiUser, FiMail, FiSettings } from "react-icons/fi";
import { FcHome, FcInfo, FcFeedback, FcSupport } from "react-icons/fc";
import { FaHome, FaInfoCircle, FaRegEnvelope, FaWrench } from "react-icons/fa";
import { GiHouse, GiInfo, GiEnvelope, GiGears } from "react-icons/gi";
import { GoHome, GoInfo, GoMail, GoSettings } from "react-icons/go";
import { GrHome, GrCircleInformation, GrMailOption, GrPerformance } from "react-icons/gr";
import { HiHome, HiInformationCircle, HiMail, HiCog } from "react-icons/hi";
import { ImHome, ImInfo, ImMail3, ImCog } from "react-icons/im";
import { IoIosHome, IoIosInformationCircleOutline, IoMdMail, IoIosSettings } from "react-icons/io";
import { IoHome, IoInformationCircle, IoMail, IoCog } from "react-icons/io5";
import { RiHome2Fill, RiInformationFill, RiMailFill, RiListSettingsFill } from "react-icons/ri";
import { SiAdobeillustrator, SiAdobedreamweaver, SiAdobexd, SiAdobeaftereffects } from "react-icons/si";
import { TiHomeOutline, TiInfoLargeOutline, TiMail, TiCogOutline } from "react-icons/ti";
import { WiVolcano,WiTrain, WiThermometer, WiFire } from "react-icons/wi";
import { CgHome, CgInfo, CgMail, CgOptions } from "react-icons/cg";

export default function IconBarApp() {
  return (
    <>
        <Example/>
    </>
  )
}

function Example(){
    return(
        <>
        <h3>CSS.GG</h3>
        <a id="home" className="menu-item" href="/">
            <CgHome /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <CgInfo /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <CgMail /> Contact
        </a>
        <a id="settings" className="menu-item" href="/settings">
            <CgOptions /> Settings
        </a>
        <h3>Weather Icon</h3>
        <a id="home" className="menu-item" href="/volcano">
            <WiVolcano /> Volcano
        </a>
        <a id="about" className="menu-item" href="/train">
            <WiTrain /> Train
        </a>
        <a id="contact" className="menu-item" href="/thermometer">
            <WiThermometer /> Thermometer
        </a>
        <a id="settings" className="menu-item" href="/fire">
            <WiFire /> Fire
        </a>
        <hr/>
        <h3>Typicons Icon</h3>
        <a id="home" className="menu-item" href="/">
            <TiHomeOutline /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <TiInfoLargeOutline /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <TiMail /> Contact
        </a>
        <a id="settings" className="menu-item" href="/settings">
            <TiCogOutline /> Settings
        </a>
        <hr/>
        <h3>Simple Icon</h3>
        <a id="home" className="menu-item" href="/illustrator">
            <SiAdobeillustrator /> Adobe Illustrator
        </a>
        <a id="about" className="menu-item" href="/dreamweaver">
            <SiAdobedreamweaver /> Adobe Dreamweaver
        </a>
        <a id="contact" className="menu-item" href="/xd">
            <SiAdobexd /> Adobe XD
        </a>
        <a id="settings" className="menu-item" href="/aftereffects">
            <SiAdobeaftereffects /> Adobe After Effects
        </a>
        <hr/>
        <h3>Remix Icon</h3>
        <a id="home" className="menu-item" href="/">
            <RiHome2Fill /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <RiInformationFill /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <RiMailFill /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <RiListSettingsFill /> Settings
        </a>
        <hr/>
         <h3>Ionicons </h3>
         <a id="home" className="menu-item" href="/">
            <IoHome /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <IoInformationCircle /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <IoMail /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <IoCog /> Settings
        </a>
        <hr/>
        <h3>Ionicons </h3>
        <a id="home" className="menu-item" href="/">
            <IoIosHome /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <IoIosInformationCircleOutline /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <IoMdMail /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <IoIosSettings /> Settings
        </a>
        <hr/>
        <h3>IconMoon icons</h3>
        <a id="home" className="menu-item" href="/">
            <ImHome /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <ImInfo /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <ImMail3 /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <ImCog /> Settings
        </a>
        <hr/>
        <h3>hero icons</h3>
        <a id="home" className="menu-item" href="/">
            <HiHome /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <HiInformationCircle /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <HiMail /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <HiCog /> Settings
        </a>
        <hr/>
        <h3>Grommet Icons</h3>
        <a id="home" className="menu-item" href="/">
            <GrHome /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <GrCircleInformation /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <GrMailOption /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <GrPerformance /> Settings
        </a>
        <hr/>
        <a id="home" className="menu-item" href="/">
            <GoHome /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <GoInfo /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <GoMail /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <GoSettings /> Settings
        </a>
        <hr/>
        <h3>Game icons</h3>
        <a id="home" className="menu-item" href="/">
            <GiHouse /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <GiInfo /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <GiEnvelope /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <GiGears /> Settings
        </a>
        <hr/>
        <h3>Font Awesome icon</h3>
        <a id="home" className="menu-item" href="/">
            <FaHome /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <FaInfoCircle /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <FaRegEnvelope /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <FaWrench /> Settings
        </a>
        <hr/>
        <h3>Flat color icon</h3>
        <a id="home" className="menu-item" href="/">
            <FcHome /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <FcInfo /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <FcFeedback /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <FcSupport /> Settings
        </a>
        <hr/>
        <h3>Feather icon</h3>
        <a id="home" className="menu-item" href="/">
            <FiHome /> Home
        </a>
        <a id="about" className="menu-item" href="/profile">
            <FiUser /> Profile
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <FiMail /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <FiSettings /> Settings
        </a>
        <hr/>

         <a id="home" className="menu-item" href="/sublime">
            <DiSublime /> Sublime
        </a>
        <a id="about" className="menu-item" href="/visualstudio">
            <DiVisualstudio /> VisualStudio
        </a>
        <a id="contact" className="menu-item" href="/postgres">
            <DiPostgresql /> Postgres
        </a>
        <a id="settings" className="menu-item" href="/mongodb">
            <DiMongodb /> MongoDB
        </a>
        <hr/>
        <h3>Box icon</h3>
         <a id="home" className="menu-item" href="/">
            <BiHome /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <BiInfoCircle /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <BiEnvelope /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <BiWrench /> Settings
        </a>
        <hr/>
        <h3>Bootstrap icon</h3>
        <a id="home" className="menu-item" href="/">
            <BsHouseDoorFill /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            <BsInfoCircleFill /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <BsFillEnvelopeFill /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <BsFillGearFill /> Settings
        </a>
        <hr/>
        <h3> Lets go for a <FaBeer />? </h3>
        <a id="home" className="menu-item" href="/">
            <AiFillHome /> Home
        </a>
        <a id="about" className="menu-item" href="/about">
            < AiFillInfoCircle /> About
        </a>
        <a id="contact" className="menu-item" href="/contact">
            <AiFillMail /> Contact
        </a>
        <a id="settings" className="menu-item" href="">
            <AiFillSetting /> Settings
        </a>
        </>
    )
}
