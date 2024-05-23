import HeroSection from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </Container>
  );
};

export default Home;
