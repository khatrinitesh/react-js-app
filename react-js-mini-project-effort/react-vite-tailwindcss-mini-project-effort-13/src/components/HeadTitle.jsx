import React from 'react';

const HeadTitle = ({children,headTitleStyle}) => {
  return (
    <>
      <h2 className={`${headTitleStyle} headTitle text-[32px] font-bold text-blue-600`}>{children}</h2>
    </>
  );
}

export default HeadTitle;
