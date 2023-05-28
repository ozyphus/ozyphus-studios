import React, { useState } from 'react';
import axios from 'axios'; // You might need to install this package

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        const response = await axios.post('/api/openai', {
            message: input
        });

        setMessages([...messages, { text: input, user: 'Me' }, { text: response.data.message, user: 'OpenAI' }]);
        setInput('');
    };

    return (
        <div>
            <ul>
                {messages.map((message, i) => <li key={i}><strong>{message.user}:</strong> {message.text}</li>)}
            </ul>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatBox;
