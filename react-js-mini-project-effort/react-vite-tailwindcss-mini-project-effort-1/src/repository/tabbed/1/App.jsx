import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./custom.css";
import styled from "styled-components";

const Button = styled.button`
  background: #bf4f74;
  border-radius: 3px;
  border: none;
  color: white;
`;

const TomatoButton = styled(Button)`
  background: tomato;
`;

const CustomApp = () => {
  return (
    <>
      <TomatoButton>Tomato Button</TomatoButton>
      <br />
      <Button>Adsdasdd</Button>
    </>
  );
};

export default CustomApp;

// const TabbedAnimation = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabStyles = useSpring({
//     transform: `translateX(${activeTab * 100}%)`,
//   });

//   return (
//     <div className="tabbed-container">
//       <div className="tabs">
//         {tabs.map((tab, index) => (
//           <div
//             key={index}
//             className={`tab ${index === activeTab ? "active" : ""}`}
//             onClick={() => setActiveTab(index)}
//           >
//             {tab}
//           </div>
//         ))}
//       </div>
//       <animated.div className="tab-content" style={tabStyles}>
//         {tabs.map((tab, index) => (
//           <div key={index} className="tab-pane">
//             {tab} Content
//           </div>
//         ))}
//       </animated.div>
//     </div>
//   );
// };
