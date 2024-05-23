import {
  FaChevronRight,
  FaFacebook,
  FaDribbble,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import IconDevelopmentWhite from "../assets/img/service/icon-development-white.svg";
import IconDevelopmentBlack from "../assets/img/service/icon-development-black.svg";
import IconContentWhite from "../assets/img/service/icon-content-white.svg";
import IconContentBlack from "../assets/img/service/icon-content-black.svg";
import IconMobileWhite from "../assets/img/service/icon-mobile-white.svg";
import IconMobileBlack from "../assets/img/service/icon-mobile-black.svg";
import IconEmailWhite from "../assets/img/service/icon-email-white.svg";
import IconEmailBlack from "../assets/img/service/icon-email-black.svg";
import IconGraphicWhite from "../assets/img/service/icon-graphics-white.svg";
import IconGraphicBlack from "../assets/img/service/icon-graphics-black.svg";
import IconDesignWhite from "../assets/img/service/icon-design-white.svg";
import IconDesignBlack from "../assets/img/service/icon-design-black.svg";
import PortfolioApple from "../assets/img/portfolio/portfolio-apple.jpeg";
import PortfolioStripe from "../assets/img/portfolio/portfolio-stripe.jpeg";
import PortfolioFedex from "../assets/img/portfolio/portfolio-fedex.jpeg";
import PortfolioMicrosoft from "../assets/img/portfolio/portfolio-microsoft.jpeg";
import logoCocaCola from "../assets/img/clients/logo-coca-cola.svg";
import logoApple from "../assets/img/clients/logo-apple.svg";
import logoNetflix from "../assets/img/clients/logo-netflix.svg";
import logoAmazon from "../assets/img/clients/logo-amazon.svg";
import logoStripe from "../assets/img/clients/logo-stripe.svg";
import Spotify from "../assets/img/experience/logo-spotify.svg";
import Microsoft from "../assets/img/experience/logo-microsoft.svg";
import FedEx from "../assets/img/experience/logo-fedex.svg";
import IconAward from "../assets/img/projects/icon-award.svg";
import IconHappy from "../assets/img/projects/icon-happy.svg";
import IconProject from "../assets/img/projects/icon-project.svg";
import IconPuzzle from "../assets/img/projects/icon-puzzle.svg";
import IconPost1 from "../assets/img/posts/post-01.png";
import IconPost2 from "../assets/img/posts/post-02.png";
import IconPost3 from "../assets/img/posts/post-03.png";


// POSTS
export const postData = [
  {
    imageUrl: IconPost1,
    title: "How to become a frontend developer",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/post"
  },
  {
    imageUrl: IconPost2,
    title: "My personal productivity system",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/post"
  },
  {
    imageUrl: IconPost3,
    title: "My year in review 2020",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/post"
  },
];

// PROJECTS
export const projectsData = [
  {
    icon:IconProject,
    value: "12",
    description: "Finished Projects",
  },
  {
    icon: IconAward,
    value: "3",
    description: "Awards Won",
  },
  {
    icon: IconHappy,
    value: "8",
    description: "Happy Clients",
  },
  {
    icon: IconPuzzle,
    value: "99",
    description: "Bugs Fixed",
  },
];

// TIMELINE
export const jobHistoryData = [
  {
    companyName: "Spotify",
    companyLogo: Spotify,
    date: "Apr 2015 - Mar 2018",
    position: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim.",
  },
  {
    companyName: "Microsoft",
    companyLogo: Microsoft,
    date: "Mar 2018 - September 2019",
    position: "Software Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim.",
  },
  {
    companyName: "FedEx",
    companyLogo: FedEx,
    date: "October 2019 - Feb 2021",
    position: "DevOps Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim.",
  },
  // Add more job history entries as needed
];

// CLIENTS
export const clientLogos = [
  logoCocaCola,
  logoApple,
  logoNetflix,
  logoAmazon,
  logoStripe,
];
// PORTFOLIO 
export const portfolioData = [
  {
    id: 1,
    imageUrl: PortfolioApple,
    alt: "Apple Portfolio",
  },
  {
    id: 2,
    imageUrl: PortfolioStripe,
    alt: "Stripe Portfolio",
  },
  {
    id: 3,
    imageUrl: PortfolioFedex,
    alt: "FedEx Portfolio",
  },
  {
    id: 4,
    imageUrl: PortfolioMicrosoft,
    alt: "Microsoft Portfolio",
  },
];

// SERVICES DATA
export const serviceContent = [
  {
    name: "Web Development",
    iconWhite: IconDevelopmentWhite,
    iconBlack: IconDevelopmentBlack,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "Technical Writing",
    iconWhite: IconContentWhite,
    iconBlack: IconContentBlack,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "Mobile Development",
    iconWhite: IconMobileWhite,
    iconBlack: IconMobileBlack,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "EMAIL DEVELOPMENT",
    iconWhite: IconEmailWhite,
    iconBlack: IconEmailBlack,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "GRAPHIC DESIGN",
    iconWhite: IconGraphicWhite,
    iconBlack: IconGraphicBlack,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "WEB DESIGN",
    iconWhite: IconDesignWhite,
    iconBlack: IconDesignBlack,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  // Add more items as needed
];

// SKILLS PROGRESS
export const skillsData = [
  { name: "HTML & CSS", percentage: 85 },
  { name: "Python", percentage: 70 },
  { name: "JavaScript", percentage: 98 },
  { name: "Figma", percentage: 91 },
];

// SOCIAL MEDIA ICONS
export const socialMediaIcons = [
  {
    name: "",
    link: "",
    icon: FaChevronRight,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    icon: FaFacebook,
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/",
    icon: FaDribbble,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/?lang=en",
    icon: FaTwitter,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    icon: FaInstagram,
  },
];

// SECTIONS 1 TO 8
export const sections = [
  { id: "section1", text: "About", color: "text-white" },
  { id: "section2", text: "Services", color: "text-white" },
  { id: "section3", text: "Portfolio", color: "text-white" },
  { id: "section4", text: "Clients", color: "text-white" },
  { id: "section5", text: "Work", color: "text-white" },
  { id: "section6", text: "Statistics", color: "text-white" },
  { id: "section7", text: "Blog", color: "text-white" },
  { id: "section8", text: "Contact", color: "text-white" },
];
