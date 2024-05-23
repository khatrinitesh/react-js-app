import React, { useState } from 'react';

export default function TextAreaApp() {
    // Define a state variable to store the textarea content
    const [text, setText] = useState('');

  const handleChange  = (e) => {
    if(e.target.value.length <= 100){
        setText(e.target.value);
    }
  }
  return (
    <>
        <h2>Textarea with Character Limit</h2>
        <textarea
            value={text}
            onChange={handleChange}
            maxLength={100} // Set the maximum character limit
            rows={4} // Specify the number of rows for the textarea
            cols={40} // Specify the number of columns for the textarea
        />
        <p>
            Character Count: {text.length}/100
        </p>
    </>
  )
}
