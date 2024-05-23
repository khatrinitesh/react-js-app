import React from 'react';
import './style.css';

const ChatMsgApp = () => {
    return (
        <>
            <div className="chat-container">
                <Message text="Hello!" isSender={false} />
                <Message text="Hi there!" isSender={true} />
            </div>
        </>
    )
}

export default ChatMsgApp

const Message = ({ text, isSender }) => {
    return (
        <div className={`message ${isSender ? 'sender' : 'receiver'}`}>
            <p>{text}</p>
        </div>
    );
};