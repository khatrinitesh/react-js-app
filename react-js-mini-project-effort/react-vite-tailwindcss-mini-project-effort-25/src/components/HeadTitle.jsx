import React from 'react';

const HeadTitle = ({children,headTitleStyle}) => {
  return (
    <>
      <h2 className={`${headTitleStyle} headTitle`}>{children}</h2>
    </>
  );
}

export default HeadTitle;
