import React from 'react'

export default function RespondingEventsApp() {
  return (
    <>
     <ResponseEvents/>
    </>
  )
}

class ResponseEvents extends React.Component{
    constructor() {
        super();
        this.state = {
          message: 'Click the button to change me!',
        };
      }

      // Event handler for the button click
      handleClick = () => {
       this.setState({
            message:'Button Clicked'
       })
      }

      // Event handler for the form submission
      handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            message:'Form Submitted'
        });
      }

    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick={this.handleClick}>Click Me</button>
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Submit Form" />
            </form>
            </>
        )
    }
}