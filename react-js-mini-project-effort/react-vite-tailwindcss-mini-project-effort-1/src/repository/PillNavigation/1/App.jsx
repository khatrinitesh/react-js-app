import React,{useState} from 'react'

const PillNavigationApp = () => {
  return (
    <>
      <PillNavigation/>
    </>
  )
}

export default PillNavigationApp

const PillNavigation = () => {
    const [activeTab, setActiveTab] = useState('Home');
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <div className="pill-navigation">
        <button
          className={activeTab === 'Home' ? 'active' : ''}
          onClick={() => handleTabClick('Home')}
        >
          Home
        </button>
        <button
          className={activeTab === 'About' ? 'active' : ''}
          onClick={() => handleTabClick('About')}
        >
          About
        </button>
        <button
          className={activeTab === 'Contact' ? 'active' : ''}
          onClick={() => handleTabClick('Contact')}
        >
          Contact
        </button>
      </div>
    );
  };
  
