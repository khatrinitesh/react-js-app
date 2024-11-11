import React from 'react';
import Banner from '../layout/Banner';

const PageNotFound = () => {
  return (
    <div className='errorContent h-[100vh] flex items-center justify-center text-center bg-cyan-700 '>
      <Banner bannerStyle='text-white gap-[15px] grid' title='Page Not Found' content="Commodo aliquip nisi fugiat qui qui eiusmod aliqua nisi."/>
    </div>
  );
}

export default PageNotFound;
