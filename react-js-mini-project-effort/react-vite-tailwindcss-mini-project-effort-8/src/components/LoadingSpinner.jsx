import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-10 bg-[rgba(0,0,0,.7)] flex items-center justify-center">
      <div className="loader absolute top-1/2 left-1/2">
      </div>
    </div>
  );
};

export default LoadingSpinner;
