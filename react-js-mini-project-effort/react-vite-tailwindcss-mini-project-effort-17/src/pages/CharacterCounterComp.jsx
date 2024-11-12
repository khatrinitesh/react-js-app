import React, { useState } from 'react';

const CharacterCounterComp = () => {

      // State to manage the input text and character count
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);

  const MAX_CAR_LIMIT = 20; // maximum character limit

  const handleInputChange = (event) => {
    event.preventDefault();
    const newText = event.target.value 
    if(newText.length <= MAX_CAR_LIMIT){
        setText(newText);
        setCharCount(newText.length)
    }
  }
  return (
    <>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Character Counter</h1>
      <textarea
        value={text}
        onChange={handleInputChange}
        rows="6"
        cols="50"
        placeholder="Start typing here..."
        style={{ padding: '10px', fontSize: '16px', width: '100%' }}
      />
      <div style={{ marginTop: '10px', fontSize: '18px' }}>
        <strong>Character Count: {charCount}</strong>
      </div>
    </div>
    </>
  );
}

export default CharacterCounterComp;
