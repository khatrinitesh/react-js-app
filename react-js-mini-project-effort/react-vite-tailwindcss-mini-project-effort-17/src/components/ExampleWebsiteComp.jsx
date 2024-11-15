import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ExampleWebsiteComp = () => {
  return (
    <>
       <Header />
      <Hero />
      <Services />
      <Footer />
    </>
  );
}

export default ExampleWebsiteComp;

// header 
const Header = () => {
    return (
      <HeaderContainer>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Logo>MyWebsite</Logo>
          <NavLinks>
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="#footer">Contact</a>
          </NavLinks>
        </motion.nav>
      </HeaderContainer>
    );
  };
// header styled
  const HeaderContainer = styled.header`
  background-color: #333;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Logo = styled.h1`
  color: white;
  font-size: 24px;
  margin-left: 20px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 20px;

  a {
    color: white;
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
      color: #1e90ff;
    }
  }
`;

// hero
const Hero = () => {
    return (
      <HeroSection id="hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <HeroText>
            <h1>Welcome to MyWebsite</h1>
            <p>Your go-to platform for amazing services</p>
          </HeroText>
        </motion.div>
      </HeroSection>
    );
  };

  const HeroSection = styled.section`
  background-image: url('https://via.placeholder.com/1600x900');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroText = styled.div`
  text-align: center;
  color: white;

  h1 {
    font-size: 48px;
    margin-bottom: 10px;
  }

  p {
    font-size: 24px;
    font-weight: 300;
  }
`;

// services
const Services = () => {
    return (
      <ServicesSection id="services">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>
        <ServicesGrid>
          <ServiceCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>Web Development</h3>
            <p>Build modern and responsive websites</p>
          </ServiceCard>
          <ServiceCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>UI/UX Design</h3>
            <p>Design user-friendly interfaces</p>
          </ServiceCard>
          <ServiceCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>SEO Optimization</h3>
            <p>Improve your website's search rankings</p>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>
    );
  };

  const ServicesSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #f5f5f5;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;

// footer
const Footer = () => {
    return (
      <FooterSection id="footer">
        <FooterContent>
          <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
          <p>Follow us on <Link target="_blank" to="https://twitter.com">Twitter</Link> | <Link target="_blank" to="https://facebook.com">Facebook</Link></p>
        </FooterContent>
      </FooterSection>
    );
  };

  const FooterSection = styled.footer`
  background-color: #333;
  color: white;
  padding: 30px 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  font-size: 14px;

  a {
    color: #1e90ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;




