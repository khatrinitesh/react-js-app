import React from 'react';
import Fruits from './fruits';

export default class CustomApp extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {
        fruits: [
          {
            type:'apple',
            amount:10,
            color:'green',
            id: 0
          },
          {
            type:'tomato',
            amount:'25',
            color:'red',
            id: 1
          }
        ]
      };
    }
  renderFruits = () => {
    const { fruits } = this.state;
      return fruits.map((item, index) =>
        <Fruits
          key={item.id}
            index={index} 
              type={item.type}
                amount={item.amount}
                  color={item.color}
                    id={item.id}
                      increment={this.increment}
                        decrement={this.decrement}
         />
          );
    }
    increment = (index) => {
      let fruits = this.state.fruits.slice();
      console.log(fruits);
      ++fruits[index].amount;
      this.setState({fruits});
    }
  
     decrement = (index) => {
      let fruits = this.state.fruits.slice();
      console.log(fruits);
      --fruits[index].amount;
      this.setState({fruits});
    }
    render() { 
      return (
        <div>
            {this.renderFruits()}
        </div>
      );
    }
  }

