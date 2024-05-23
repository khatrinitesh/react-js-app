import React from 'react';

export default function hover(props) {
  return (
    <div>
      <button onMouseLeave={props.increment}>Click on:{props.count}</button>
    </div>
  )
}
