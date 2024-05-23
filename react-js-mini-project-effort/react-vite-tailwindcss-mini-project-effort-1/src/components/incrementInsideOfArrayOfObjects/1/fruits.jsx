import React, { Component } from 'react';

class Fruits extends Component {

increment = () => {
  const { index, increment } = this.props;
  increment(index);
}

decrement = () => {
  const { index, decrement } = this.props;
  decrement(index);
}


  render() {
    const { type, id, amount, color} = this.props;
    return(
      <div>
       <span>
         {type}
          <ul>
            <li>amount: {amount} </li>
            <li>color: {color} </li>
          </ul>
          <button onClick={this.increment}> + </button>
          <button onClick={this.decrement}> - </button>
       </span>
      </div>
    );
  }
}

export default Fruits;