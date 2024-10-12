import React, { useState } from "react";
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState("register"); // Track the active tab
  const [isSubmitted, setIsSubmitted] = useState(false);  // Track form submission

  // Handle form submit to show the OTP field
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
     <div className="app-container">
      {/* Tab Headers */}
      <div className="tabs">
        <div
          className={`tab ${activeTab === "register" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("register")}
        >
          Register
        </div>
        <div
          className={`tab ${activeTab === "home" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("home")}
        >
          Home
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "register" && (
          <div>
            <h2>Register</h2>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required />
                </div>
                <button type="submit">Submit</button>
              </form>
            ) : (
              <div>
                <p>OTP has been sent to your email.</p>
                <div className="form-group">
                  <label htmlFor="otp">Enter OTP:</label>
                  <input type="text" id="otp" required />
                </div>
                <button type="submit">Verify OTP</button>
              </div>
            )}
          </div>
        )}

        {activeTab === "home" && (
          <div>
            <h2>Home</h2>
            <p>Welcome to the home tab!</p>
          </div>
        )}
      </div>

      {/* Basic Styles */}
      <style>{`
        .app-container {
          width: 300px;
          margin: 50px auto;
          font-family: Arial, sans-serif;
        }
        .tabs {
          display:flex;
          gap:10px;
          cursor: pointer;
        }
        .tab {
          flex: 1;
          
          padding: 10px;
          text-align: center;
          border-bottom: 2px solid #000;
        }
        .active-tab {
          border-bottom: 2px solid blue;
          font-weight: bold;
        }
        .tab-content {
          margin-top: 20px;
        }
        .form-group {
          margin-bottom: 10px;
        }
        input {
          width: 100%;
          padding: 5px;
          margin-top: 5px;
        }
        button {
          padding: 5px 10px;
          cursor: pointer;
          background-color: blue;
          color: white;
          border: none;
        }
      `}</style>
    </div>
    </>
  )
}

export default App
