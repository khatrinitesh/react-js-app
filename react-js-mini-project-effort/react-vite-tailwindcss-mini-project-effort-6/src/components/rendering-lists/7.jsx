import React, { useState } from 'react'


// using conditional rendering with functions
const ConditionalRendering = () => {
    const [status,setStatus] = useState('loading');

    const renderCount = () => {
        switch(status){
            case 'loading' : return <p>Loading..</p>;
            case 'success' : return <p>Default success..</p>;
            case 'error' : return <p>Error..</p>;
            default:return  null;
        }
    }

    const handleSuccess = () => {
        setStatus('success')
    }
    const handleError = () => {
        setStatus('error')
    }
    const handleLoading = () => {
        setStatus('loading')
    }
    
  return (
    <div>
      {renderCount()}
      <button onClick={handleSuccess}>set success</button>
      <br/>
      <button onClick={handleError}>set Errir</button>
      <br/>
      <button onClick={handleLoading}>set loading</button>
    </div>
  )
}

export default ConditionalRendering
