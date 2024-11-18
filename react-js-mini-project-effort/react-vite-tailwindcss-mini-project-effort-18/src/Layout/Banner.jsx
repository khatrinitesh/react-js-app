import React from 'react';

const Banner = ({ bannerStyle, bannerTitle, bannerDesc }) => {
  return (
    <div className={`${bannerStyle} bannerContent`}>
      {/* Displaying the title in an <h3> tag */}
      <h3>{bannerTitle}</h3>

      {/* Displaying the description in a <p> tag */}
      <p>{bannerDesc}</p>
    </div>
  );
};

export default Banner;
