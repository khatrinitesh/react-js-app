import React, { useState } from "react";

const AlertsComp = () => {
    const [isAlertVisible,setIsAlertVisible] = useState(false);

    const showAlert = () => {
        setIsAlertVisible(true)
    }
    const closeAlert  = () => {
        setIsAlertVisible(false)
    }
  return (
    <>
     <h2 className="text-[50px] font-bold">Alerts</h2>
    <button onClick={showAlert}>Show Alert</button>
    {isAlertVisible && <CustomAlert onClose={closeAlert}>
        <h2>Alert Message</h2>
        <p>Laboris excepteur aliqua excepteur eu tempor officia non.</p></CustomAlert>}
    </>
  )
};

export default AlertsComp;

const CustomAlert = ({ children, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-md">
            {children}
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};
