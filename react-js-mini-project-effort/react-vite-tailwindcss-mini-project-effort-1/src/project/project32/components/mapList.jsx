import React, { Component } from 'react'

export default class MapList extends Component {

    state = {
        items: [
            {id:1,name:"item 1"},
            {id:2,name:"item 2"},
            {id:3,name:"item 3"},
            {id:4,name:"item 4"},
        ]
    }
  render() {
    return (
      <div>
        <h1>My list of Items</h1>
        <ul>
            {this.state.items.map(item => {
                <li key={item.id}>{item.name}</li>
            })}
        </ul>
      </div>
    )
  }
}
