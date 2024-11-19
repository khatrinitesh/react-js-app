import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';


const HighlightNavDivScrollComp = () => {
  return (
    <>
       <Navbar />
      <section id="home" style={styles.section}>
        <h2>Home Section</h2>
      </section>
      <section id="about" style={styles.section}>
        <h2>About Section</h2>
      </section>
      <section id="services" style={styles.section}>
        <h2>Services Section</h2>
      </section>
      <section id="contact" style={styles.section}>
        <h2>Contact Section</h2>
      </section>
    </>
  );
}

export default HighlightNavDivScrollComp;

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');
    
    useEffect(() => {
      const sections = document.querySelectorAll('section');
      
      const handleScroll = () => {
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li>
            <Link 
              to="home" 
              smooth={true} 
              offset={-70} 
              duration={500} 
              style={activeSection === 'home' ? styles.activeLink : styles.link}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              offset={-70} 
              duration={500} 
              style={activeSection === 'about' ? styles.activeLink : styles.link}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="services" 
              smooth={true} 
              offset={-70} 
              duration={500} 
              style={activeSection === 'services' ? styles.activeLink : styles.link}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              offset={-70} 
              duration={500} 
              style={activeSection === 'contact' ? styles.activeLink : styles.link}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'black',
      color: 'white',
      padding: '10px 20px',
      zIndex: 1000,
    },
    navList: {
      display: 'flex',
      justifyContent: 'space-around',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    link: {
      textDecoration: 'none',
      color: 'white',
      fontSize: '18px',
      transition: 'color 0.3s',
    },
    activeLink: {
      textDecoration: 'none',
      color: 'yellow',  // Highlight the active link
      fontSize: '18px',
      transition: 'color 0.3s',
    },
    section: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid #ddd',
        padding: '20px',
      },
  };
