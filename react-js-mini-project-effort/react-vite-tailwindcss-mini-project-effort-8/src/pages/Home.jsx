import React from 'react';
import Banner from '../layout/Banner';
import Rating from '../components/Rating';
import TypeWriterComp from '../components/TypeWriter';

const Home = () => {
  return (
    <div className='banner'>
     <Banner title="Home" description="Aute exercitation do sint cillum commodo eiusmod Lorem officia in do quis Lorem exercitation."/>
     <div className="container mx-auto">
     <TypeWriterComp/>
     <Rating/>
     </div>
    </div>
  );
}

export default Home;  
