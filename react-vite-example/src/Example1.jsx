import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Example1 = () => {
    const [translation, setTranslation] = useState('');
    const [inputText, setInputText] = useState('Hello, world!'); // Default text for translation
    useEffect(() => {
        const fetchTranslation = async () => {
          try {
            const response = await axios.post(
              'https://text-translator2.p.rapidapi.com/translate',
              { text: inputText, to: 'es' }, // Example: Translate to Spanish ('es')
              {
                headers: {
                  'Content-Type': 'application/json',
                  'X-RapidAPI-Key': 'b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f', // Replace with your API key
                  'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
                },
              }
            );
    
            setTranslation(response.data.translated_text);
          } catch (error) {
            console.error('Error fetching translation:', error);
          }
        };
    
        fetchTranslation();
      }, [inputText]); // Trigger translation when inputText changes
  return (
    <>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div>
        <strong>Translation:</strong> {translation}
      </div>
    </>
  )
}

export default Example1
