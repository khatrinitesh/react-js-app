import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';

// main content
export const MainContent = styled.div`
height:calc(100vh - 76px);
flex-grow: 1;
background-color:#f9f9f9;
`

// banner
export const BannerContent = styled.div`
  padding: 50px;
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// banner heading
export const HeadTitle1= styled.h2`
  color: orange; 
  font-size: 24px; 
  font-weight: bold; 
  margin:0 0 10px;
  span{
    color:'red'
    &active{
      color:'orange'
    }
  }
`;

export const ParaDesc = css`
color:purple
`

export const headTitleStyle= css`
background-color: green
`

export const HeadTitle2 = styled(HeadTitle1)`
  color: pink; 
  ${headTitleStyle}
`;


// banner paragraph
export const Paragraph = styled.p`
  font-size: 18px; 
  font-weight: bold;
  margin:0;
  ${ParaDesc}
`;

// header 
export const HeaderComp = styled.header`
background-color:#333;
padding:10px;
`

// header ul
export const ListBullet = styled.ul`
display:flex;
list-style:none;
margin:0;
padding:0;
`

// header ul li a
export const LinkAnchor = styled.a`
cursor:pointer;
color:#fff;
display:block;
padding:5px 10px;
`

// footer
export const FooterComp = styled.footer`
    background-color:#232323;
    color:#fff;
    padding:10px;
`