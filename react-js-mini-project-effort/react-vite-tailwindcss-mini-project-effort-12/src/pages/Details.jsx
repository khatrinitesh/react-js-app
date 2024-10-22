import React, { useState } from "react";
import LocationComp from "./LocationComp";
import Register from "./register";
import Login from "./login";
import Otp from "./otp";
import { Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

const Details = () => {
  const [isRegistered, setIsRegistered] = useState(null);
  // State to manage the active step
  const [activeStep, setActiveStep] = useState(1); // Default to step 1

  return (
    <>
      <div className="detailsBlock">
      <ul className="listBulletLine px-[24px] md:px-[100px] flex gap-[14px] mb-[25px]">
            <li>
              <Link
                className={`linkLine inline-flex ${activeStep >= 1 ? "activeLine" : ""
                  }`}
              >1</Link>
            </li>
            <li>
              <Link
                className={`linkLine inline-flex ${activeStep >= 2 ? "activeLine" : ""
                  }`}
              >2</Link>
            </li>
            <li>
              <Link
                className={`linkLine inline-flex ${activeStep >= 3 ? "activeLine" : ""
                  }`}
              >3</Link>
            </li>
          </ul>
      </div>
      <div className="innerDetails">
        {/* Conditional rendering based on currentStep */}
        {activeStep === 1 && (
          <div className="step1 stepContent" id="step1">
            {isRegistered === null ? (
              <>
              
                <Register setActiveStep={setActiveStep} onSubmit={() => setActiveStep(2)} setIsRegistered={setIsRegistered} />
              </>
            ) : (
              <>
             
                <Login setActiveStep={setActiveStep} onSubmit={() => setActiveStep(2)} setIsRegistered={setIsRegistered} />
              </>
            )}
          </div>
        )}
        {activeStep === 2 && (
          <div className="step2 stepContent" id="step2">
               {/* Back button for step 2 */}
               <button onClick={() => setActiveStep(1)}>Back</button>
            <Otp setActiveStep={setActiveStep} onSubmit={() => setActiveStep(3)} />
            
          </div>
        )}
        {activeStep === 3 && (
          <div className="step3 stepContent" id="step3">
              {/* Back button for step 3 */}
              <button onClick={() => setActiveStep(2)}>Back</button>
            <LocationComp setActiveStep={setActiveStep} />
          </div>
        )}
      </div>
      <ToastContainer/>
    </>
  );
};

export default Details;
