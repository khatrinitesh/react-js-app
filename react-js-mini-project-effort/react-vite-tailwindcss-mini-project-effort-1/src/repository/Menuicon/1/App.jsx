import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const MenuIconApp = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // Add any side effects or cleanup code here if needed
        // This effect will run whenever menuOpen changes
    }, [menuOpen]);

    const handleMenuToggle = () => {
        setMenuOpen(prevState => !prevState);
    };


  return (
    <>
      <IconButton onClick={handleMenuToggle} color="inherit">
                <MenuIcon />
            </IconButton>

            {menuOpen && (
                <div>
                    {/* Your menu content goes here */}
                    <p>Menu Item 1</p>
                    <p>Menu Item 2</p>
                    <p>Menu Item 3</p>
                </div>
            )}
    </>
  )
}

export default MenuIconApp
