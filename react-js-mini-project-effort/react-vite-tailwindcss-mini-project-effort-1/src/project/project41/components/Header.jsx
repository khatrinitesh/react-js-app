import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({sectionTitle}) => {
  return (
    <header>
      <div className="container">
        <div className='innerHeader d-flex justify-content-between'>
            <Link to="/">
                Logo
            </Link>
            <h2 className='justify-self-center'>{sectionTitle}</h2>
        </div>
      </div>
    </header>
  )
}

export default Header
