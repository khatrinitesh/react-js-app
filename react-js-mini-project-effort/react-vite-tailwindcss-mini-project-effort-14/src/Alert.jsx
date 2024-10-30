import React, { useState } from "react";

const AlertComp = () => {
  const [showAlert, setShowAlert] = useState(false);
//   open
  const handleShowAlert = () => {
    setShowAlert(true);
  };

//   close
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <h1>Custom Alert Example</h1>
      <button onClick={handleShowAlert}>Show Custom Alert</button>
      {showAlert && (
        <CustomAlert
          onClose={handleCloseAlert}>
            <h3>sdsaddasd</h3>
            <p>Do tempor ex officia dolor consectetur.</p>
          </CustomAlert>
      )}
    </>
  );
};

export default AlertComp;

const CustomAlert = ({ children, onClose }) => {
  return (
    <>
      <div style={styles.overlay}>
        <div style={styles.alertBox}>
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    background: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  },
};
