import React from "react";
import './style.css';

const AlertsApp = () => {
  return (
    <>
      <h1>UI - Material Design Alerts</h1>

      <h2>Only Message</h2>
      <div className="alert alert-success" role="alert">
        <button type="button" className="close-alert">
          ×
        </button>
        <p>Lorem Ipsum</p>
      </div>
      <div className="alert alert-warning" role="alert">
        <button type="button" className="close-alert">
          ×
        </button>
        Lorem Ipsum
      </div>
      <div className="alert alert-danger" role="alert">
        <button type="button" className="close-alert">
          ×
        </button>
        Lorem Ipsum
      </div>

      <h2>Message + Icon</h2>

      <div className="alert alert-success" role="alert">
        <button type="button" className="close-alert">
          ×
        </button>
        <i className="material-icons">warning</i>
        Lorem Ipsum
      </div>
      <div className="alert alert-warning" role="alert">
        <button type="button" className="close-alert">
          ×
        </button>
        <i className="material-icons">info</i>
        Lorem Ipsum
      </div>
      <div className="alert alert-danger" role="alert">
        <button type="button" className="close-alert">
          ×
        </button>
        <i className="material-icons">error</i>
        Lorem Ipsum
      </div>
    </>
  );
};

export default AlertsApp;
