import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const CallToAction = () => {
  return (
    <div className="call-to-action bg-overlay white-overlay pb100 pt85">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cal-to-wrap">
              <h1 className="section-title">
            Enter Your Email Address For Events &amp; News
              </h1>
              <form action="#">
                <div className="input-box">
                  <input
                    type="email"
                    placeholder="Enter your E-mail Address"
                    className="info"
                    name="email"
                  />
                  <button className="send-btn">
                  <FaPaperPlane />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
