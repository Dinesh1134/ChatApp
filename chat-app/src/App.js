import React, { useState, useEffect } from 'react';
// In src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = () => {
      console.log('WebSocket connected');
      setWs(socket);
    };

    socket.onmessage = (event) => {
      const message = event.data.toString();
      animateText(message);
    };

    socket.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, []);

  const animateText = (text) => {
    const words = text.split(' '); // Split text into words
    let index = 0;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += '<br>'; // Add line break for multiple inputs

    function typeWriter() {
      if (index < words.length) {
        outputDiv.innerHTML += (index > 0 ? ' ' : '') + words[index]; // Append word
        index++;
        setTimeout(typeWriter, 100); // Adjust the speed here
      }
    }

    typeWriter();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() === '') return;

    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(inputText);
    }

    setInputText('');
  };

  return (
    <div className="App">

    <div className="chat-container fs-4-lg">
      <header>
        <h2>Chat<span className="header-txt">BOT</span></h2>
      </header>
        <div id="output" className="chat-window"></div>
        <form className='chat-input' onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
          />
          <button type="submit" className='btn btn-dark send-button'><i class="bi bi-send-fill send-icon"></i></button>
        </form>

      </div>
    </div>
  );
};

export default App;