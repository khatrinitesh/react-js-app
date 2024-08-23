import React from 'react';

const Checkmark = ({ label, checked, onChange }) => {
    return (
      <div className="checkmark-container">
        <label className="checkmark-label">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onChange(!checked)}
            className="checkmark-input"
          />
          <span className="checkmark-box">
            {checked && <span className="checkmark-icon">✔</span>}
          </span>
          <span className="txt w-[calc(100%-24px)]">{label}</span>
        </label>
      </div>
    );
  };
export default Checkmark;
