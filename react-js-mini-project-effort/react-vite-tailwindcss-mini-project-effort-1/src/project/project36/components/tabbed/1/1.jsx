import React, { useState } from 'react';

const tabs = [
    {
        id: 1,
        name: "Colorables",
        title: 'Colorables',
        text: "Nelsons folly lugger marooned hearties chantey lateen sail Yellow Jack gangplank starboard warp. Chantey Buccaneer log warp snow booty sloop square-rigged mutiny pressgang. Yard bring a spring upon her cable Sail ho clipper bounty careen galleon bilge rat reef handsomely."
    },
    {
        id: 2,
        name: "Logos",
        title: 'Acme Logos',
        text: "Barbary Coast hogshead port Sea Legs cackle fruit dead men tell no tales crimp poop deck transom flogging. Bilge water man-of-war lanyard sloop starboard hardtack no prey, no pay avast tender crack Jennys tea cup. Hogshead cog aft Corsair spanker pinnace bilge water swing the lead Jack Tar Plate Fleet."
    },
    {
        id: 3,
        name: "Blocks",
        title: 'Blocks wireframe',
        text: "Gangway boom coffer rigging tackle gabion Shiver me timbers aye draft barque. Scourge of the seven seas pressgang Blimey galleon six pounders yawl grapple jolly boat lugger Jack Ketch. Splice the main brace boatswain snow Chain Shot salmagundi keel crow's nest Shiver me timbers jib ye."
    }
];

export default function TabbedApp(props) {
  return (
      <Tabs tabs={props.tabs}/>
    <>
    </>
  )
}

function Tab(props) {
    return (	
        <div className={`tabs__content`}>
            <h3>{props.tab.title}</h3>
            <p>{props.tab.text}</p>
        </div>
    );
}

function Navigation(props) {

    return (
        <ul className={`tabs__nav`}>
            {props.tabs.map((item) => (
                <li key={item.id} className={`tabs__item`}>
                    <button className={`tabs__button ${(props.activeTabId === item.id) ? 'active' : ''}`}
                            onClick={() => props.onNavClick(item.id)}>
                        {item.name}
                    </button>
                </li>
            ))}
        </ul>
    );
}
function Tabs(props) {
    const [activeTabId, setActiveTab] = React.useState(props.tabs[0].id);

    const activeTab = React.useMemo(() => (
        props.tabs.find((tab) => (
            tab.id === activeTabId
        ))
    ), [activeTabId, props.tabs]);

    return (

        <div className={`tabs`}>
            <Navigation tabs={props.tabs} onNavClick={setActiveTab}
                        activeTabId={activeTabId}/>
            <Tab tab={activeTab}/>
        </div>
    );
}