import React from 'react';
import './style.css';

const BadgesApp = () => {
  return (
    <>
      <Badge count={3}/>
      <Badge count={0}/>
    </>
  )
}

export default BadgesApp

const Badge = ({ count }) => {
    return (
      <div className="badge">
        {count > 0 ? (
          <span className="badge-count">{count}</span>
        ) : (
          <span className="badge-empty">Empty</span>
        )}
      </div>
    );
  };
