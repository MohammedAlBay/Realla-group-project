import React from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatPage = () => {
    return (
        <div className="chat__container">
            <div className="chat__sidebar">
                <ChatBar />
            </div>
            <div className="chat__main">
                <ChatBody />
                <ChatFooter />
            </div>
        </div>
    );
};

export default ChatPage;