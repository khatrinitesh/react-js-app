import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Define custom styled NavLink component
const StyledNavLink = styled(NavLink)`
  /* Add your styling for NavLink here */
  color: #fff;
  text-decoration: none;
  padding: 10px;
  
  &.active {
    /* Add your styling for active NavLink here */
    font-weight: bold;
    background-color:red;
  }
`;

export default StyledNavLink;