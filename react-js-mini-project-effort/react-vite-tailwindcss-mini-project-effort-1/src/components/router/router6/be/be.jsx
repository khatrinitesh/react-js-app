import React from 'react'
import { Outlet } from 'react-router-dom'

import LeftMenu from './layout/leftmenu';

export default function BE() {
  return (
    <div>
      <h2>Back-End layout</h2>
      <LeftMenu/>
      <div className='main_content'>
        <Outlet/>
      </div>
    </div>
  )
}
