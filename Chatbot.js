import React, { useState } from 'react';
import axios from 'axios';



const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        if (!input) return;
        const newMessages = [...messages, { text: input, sender: 'user' }];
        setMessages(newMessages);
        setInput('');

        try {
            //const response = await axios.post('/api/message', { message: input });
            const response = await axios.post('http://localhost:5000/api/message', { message: input });
            setMessages([...newMessages, { text: response.data.reply, sender: 'bot' }]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="container">
            <ul className="collection">
                {messages.map((msg, index) => (
                    <li key={index} className={`collection-item ${msg.sender === 'user' ? 'right-align' : ''}`}>
                        {msg.text}
                    </li>
                ))}
            </ul>
            <div className="input-field">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && sendMessage()}
                />
                <button className="btn waves-effect waves-light" onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
