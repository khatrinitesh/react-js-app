import React from 'react';
import { BannerContent, HeadTitle1,HeadTitle2,Paragraph } from '../styleComponents/custom';

const Banner = ({title,desc}) => {
  return (
    <BannerContent>
      <HeadTitle1 className='headcustom'><span>{title}</span></HeadTitle1>
      <HeadTitle2>{title}</HeadTitle2>
      <Paragraph>{desc}</Paragraph>
    </BannerContent>
  )
}

export default Banner;
