import React from "react";
import './style.css';

const CalloutApp = () => {
  return (
    <>
      <div className="ms-Callout ms-Callout--arrowTop">
        <div className="ms-Callout-main">
          <div className="ms-Callout-header">
            <p className="ms-Callout-title">Callout Top Arrow</p>
          </div>
          <button className="ms-Callout-close">
            <i className="ms-Icon ms-Icon--x"></i>
          </button>
          <div className="ms-Callout-inner">
            <div className="ms-Callout-content">
              <p className="ms-Callout-subText ms-Callout-subText--s">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-Callout ms-Callout--arrowRight">
        <div className="ms-Callout-main">
          <div className="ms-Callout-header">
            <p className="ms-Callout-title">Callout Right Arrow</p>
          </div>
          <div className="ms-Callout-inner">
            <div className="ms-Callout-content">
              <p className="ms-Callout-subText ms-Callout-subText--s">
                Notice how the close button is optional.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-Callout ms-Callout--arrowLeft">
        <div className="ms-Callout-main">
          <div className="ms-Callout-header">
            <p className="ms-Callout-title">Callout Left Arrow</p>
          </div>
          <button className="ms-Callout-close">
            <i className="ms-Icon ms-Icon--x"></i>
          </button>
          <div className="ms-Callout-inner">
            <div className="ms-Callout-content">
              <p className="ms-Callout-subText ms-Callout-subText--s">
                Notice how this callout does not have a close button.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-Callout ms-Callout--arrowBottom">
        <div className="ms-Callout-main">
          <div className="ms-Callout-header">
            <p className="ms-Callout-title">Callout Bottom Arrow</p>
          </div>
          <button className="ms-Callout-close">
            <i className="ms-Icon ms-Icon--x"></i>
          </button>
          <div className="ms-Callout-inner">
            <div className="ms-Callout-content">
              <p className="ms-Callout-subText ms-Callout-subText--s">
                Notice how this callout does not have a close button.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalloutApp;
