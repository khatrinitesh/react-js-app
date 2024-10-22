import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Details from '../pages/details';

const DetailsLayout = () => {
  return (
    <>
    <div className="appLayout landscape:hidden md:landscape:block min-h-[100vh] h-[100dvh]">
      <Header/>
        <Details/>
      <Footer/>
      </div>
    </>
  );
}

export default DetailsLayout;
