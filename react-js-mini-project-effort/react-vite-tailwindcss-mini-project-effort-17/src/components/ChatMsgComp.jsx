import React, { useState } from 'react';

const ChatMsgComp = () => {
  return (
    <>
      <MsgComp/>
    </>
  );
}

export default ChatMsgComp;

const MsgComp = () => {
     // State to manage the messages and input text
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
    // Handle the send message action
  const handleSendMessage = () => {
    if (inputText.trim() === '') return; // Don't send empty messages
    setMessages([...messages, { text: inputText, sender: 'You' }]); // Add message to the state
    setInputText(''); // Clear the input
  };
    return(
        <>
         <div className="chat-container">
      <div className="chat-box">
        <div className="chat-header">Chat</div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} sender={msg.sender} />
          ))}
        </div>
        <ChatInput 
          inputText={inputText} 
          setInputText={setInputText} 
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
        </>
    )
}

const Message = ({text,sender}) => {
    return(
        <>
        <div className={`message ${sender === 'You' ? 'sent' : 'received'}`}>
      <div className="message-bubble">{text}</div>
    </div>
        </>
    )
}

// ChatInput Component for the text area and send button
const ChatInput = ({ inputText, setInputText, handleSendMessage }) => {
    return (
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="send-button" onClick={handleSendMessage}>Send</button>
      </div>
    );
  };
  
