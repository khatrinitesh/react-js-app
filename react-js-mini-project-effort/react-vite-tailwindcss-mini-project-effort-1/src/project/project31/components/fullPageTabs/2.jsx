import React,{useState} from 'react';

export default function FullPageTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
      setActiveTab(tabNumber);
    };
  return (
    <>
        <div className="tabs">
            <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
                Tab 1
            </div>
            <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
                Tab 2
            </div>
            <div className={`tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>
                Tab 3
            </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <p>Content for Tab 1</p>}
        {activeTab === 2 && <p>Content for Tab 2</p>}
        {activeTab === 3 && <p>Content for Tab 3</p>}
      </div>
    </>
  )
}
