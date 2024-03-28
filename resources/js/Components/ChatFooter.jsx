import React, { useState } from 'react';

const ChatFooter = () => {
    const [message, setMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            // Send message logic
            setMessage('');
        }
    };

    return (
        <form className="chat__footer" onSubmit={handleSendMessage}>
            <input
                type="text"
                className="chat__input"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="chat__send">
                Send
            </button>
        </form>
    );
};

export default ChatFooter;