import React from 'react';
import { Outlet } from 'react-router-dom';

import LeftSidebar from './components/leftsidebar';
import Admin from './admin';

export default function BELayout() {
  return (
    <>
      <LeftSidebar/>
      <Admin/>
    </>
  )
}
