import React from 'react'

export default function SplitNavigation() {
  return (
    <>
    <LeftSidebar/>
    <TopBar/>
    <main className='content'>
        Content
    </main>
    </>
  )
}

const LeftSidebar = () => {
    return (
      <aside className="left-sidebar">
        Left sidebar
      </aside>
    );
  };

  
  const TopBar = () => {
    return (
      <nav className="top-bar">
        Topbar
      </nav>
    );
  };