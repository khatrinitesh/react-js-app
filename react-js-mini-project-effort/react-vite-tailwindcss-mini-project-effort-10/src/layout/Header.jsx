import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="innerHeader flex justify-between items-center">
            <Link to="/" className="iconBack">Back</Link>
            <div className="logoBlock">
                Logo
            </div>
            <Link to="/" className="iconBack">&#9776;</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
