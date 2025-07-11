import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MessagesPage = ({ receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`/api/messages/${receiverId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessages(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMessages();
  }, [receiverId]);

  const sendMessage = async () => {
    try {
      await axios.post('/api/messages', {
        receiverId,
        content: newMsg
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessages(prev => [...prev, { content: newMsg, sender: { _id: 'me' }, sentAt: new Date() }]);
      setNewMsg('');
    } catch (err) {
      console.error('Error sending message', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Messages</h2>
      <div className="h-64 border rounded p-3 overflow-y-scroll mb-4 bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.sender._id === 'me' ? 'text-right' : 'text-left'}`}>
            <span className="inline-block bg-white p-2 rounded shadow">{msg.content}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Type your message"
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 rounded">Send</button>
      </div>
    </div>
  );
};

export default MessagesPage;
