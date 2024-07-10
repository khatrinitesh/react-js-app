import React, { useEffect, useState } from "react";

const CountDownComp = ({ end, icon,title }) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    if (isCounting && count < end) {
      const timeoutId = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, 50); // Adjust delay if needed

      return () => clearTimeout(timeoutId);
    } else {
      setIsCounting(false);
    }
  }, [count, end, isCounting,title]);

  return (
   
          <div className="col-lg-2 col-md-4">
            <div className="counter d-flex flex-column align-items-center justify-content-center text-center">
                <div className="count-icon">
              <img src={icon} alt="Icon" className="counter-icon" />
              </div>
              <div className="d-inline">
              <h3>
                <span className="counter-value d-block">{count}</span>
              </h3>
              <p>{title}</p>
              </div>
            </div>
          </div>
  );
};

export default CountDownComp;
