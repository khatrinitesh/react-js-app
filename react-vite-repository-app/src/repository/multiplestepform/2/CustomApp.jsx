import React,{useState} from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <MultiStepForm/>
    </>
  );
}

export default CustomApp;

// Step Components
const Register = ({ nextStep }) => (
    <div>
      <h2>Register</h2>
      <button onClick={nextStep}>Next</button>
    </div>
  );
  
  const Login = ({ nextStep }) => (
    <div>
      <h2>Login</h2>
      <button onClick={nextStep}>Next</button>
    </div>
  );
  
  const OTP = ({ nextStep, previousStep }) => (
    <div>
      <h2>OTP Verification</h2>
      <button onClick={previousStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
  
  const Location = ({ previousStep }) => (
    <div>
      <h2>Select Location</h2>
      <button onClick={previousStep}>Back</button>
      <button>Submit</button>
    </div>
  );

  // MultiStepForm Component
const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [isRegistering, setIsRegistering] = useState(true); // Flag for Register/Login
  
    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const previousStep = () => setStep((prevStep) => prevStep - 1);
  
    const renderStep = () => {
      switch (step) {
        case 1:
          return isRegistering ? (
            <Register nextStep={nextStep} />
          ) : (
            <Login nextStep={nextStep} />
          );
        case 2:
          return <OTP nextStep={nextStep} previousStep={previousStep} />;
        case 3:
          return <Location previousStep={previousStep} />;
        default:
          return null;
      }
    };
  
    return (
      <div>
        <ul className="steps">
          <li className={step === 1 ? 'active' : ''} onClick={() => setStep(1)}>Step 1</li>
          <li className={step === 2 ? 'active' : ''} onClick={() => setStep(2)}>Step 2</li>
          <li className={step === 3 ? 'active' : ''} onClick={() => setStep(3)}>Step 3</li>
        </ul>
        {renderStep()}
        <button onClick={() => setIsRegistering(!isRegistering)}>
          Switch to {isRegistering ? 'Login' : 'Register'}
        </button>
      </div>
    );
  };
