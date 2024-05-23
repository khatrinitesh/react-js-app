import React, { useState } from "react";

export default function CustomApp() {
    const [showRules, setShowRules] = useState(false);

    const toggleRules = () => {
        setShowRules(!showRules);
      };
    
  return (
    <>
     <button className="flat-black-button" onClick={toggleRules}>
        {showRules ? 'How to Hide' : 'How to Show'}
      </button>
      {showRules ? (
        <div>
          <p className="flat-black-button-content">
            To get under way, click 'Start'. Once you have started the quiz,
            type an answer into the box and either hit enter or click the submit
            button. If you are right, it will fill in the correct slot in the
            table. Keep entering more answers until you've successfully
            completed the quiz - or the timer runs out. If you do not want to
            play any more, just hit the 'Give up!' button. You can then reveal
            the answers you missed - or have another go.
          </p>
        </div>
      ) : null}
    </>
  )
}
