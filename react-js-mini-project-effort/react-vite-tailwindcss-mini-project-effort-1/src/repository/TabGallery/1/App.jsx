import React,{useState } from 'react'

const TabsGalleryApp = () => {
    const tabData = [
        { id: 'nature', label: 'Nature', images: ['nature1.jpg', 'nature2.jpg', 'nature3.jpg'] },
        { id: 'animals', label: 'Animals', images: ['animal1.jpg', 'animal2.jpg', 'animal3.jpg'] },
        { id: 'cities', label: 'Cities', images: ['city1.jpg', 'city2.jpg', 'city3.jpg'] },
      ];
  return (
    <>
      <TabGallery tabData={tabData}/>
    </>
  )
}

export default TabsGalleryApp

const TabGallery = ({tabData}) => {


    const [selectedTab, setSelectedTab] = useState(tabData[0].id);

    const handleTabClick = (tabId) => {
        setSelectedTab(tabId);
    };

    return(
        <>
         <div className="tab-gallery">
            <div className="tab-buttons">
                {tabData.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={selectedTab === tab.id ? 'active' : ''}
                >
                    {tab.label}
                </button>
                ))}
            </div>
            <div className="image-list">
                {tabData.find((tab) => tab.id === selectedTab)?.images.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
                ))}
            </div>
            </div>
        </>
    )

}
