import React,{ useContext }  from 'react';
import A from './a';
export default function C() {

    const Color = useContext(Color)
    const Size = useContext(Size)
  return (
    <div>
      <Color.Consumer>
      {(color) => {
        return(
            <Size.Consumer>
                {(size) => {
                    return <div>{color} {size}</div>
                }}
            </Size.Consumer>
        )
      }}
      </Color.Consumer>
    </div>
  )
}
