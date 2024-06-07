# Chatbot Application

This is a simple chatbot application built using React for the frontend and Node.js with WebSocket for the backend. The application allows users to interact with a chatbot through a text input field and view the conversation history in a chat window.

## Features

- Basic layout for the chatbot interface
- Text input field for users to type their messages
- Chat window to display the conversation history
- Simulated text streaming logic to echo the user's input
- Responsive design for different screen sizes
- WebSocket connection between frontend and backend for real-time communication

## Project Structure

The project directory is organized as follows:


test-chatbot/
│
├── chat-app/             # React app for the frontend
│   ├── public/
│   ├── src/
│   │   ├── App.js        # Main component for the chatbot interface
│   │   └── App.css       # CSS styles for the chatbot interface
│   │   ├── ...           # other files
│   ├── package.json      # npm dependencies and scripts for the frontend
│   └── ...
│
└── server/                # Node.js server for the backend
    ├── server.js         # WebSocket server logic
    ├── package.json      # npm dependencies and scripts for the backend
    └── ...


## Getting Started

To run the chatbot application locally, follow these steps:

1. Clone this repository to your local machine:

   bash
   git clone <repository-url>
   

2. Navigate to the chat-app directory and install dependencies:

   bash
   cd test-chatbot/chat-app
   npm install
   

3. Start the React development server:

   bash
   npm start
   

4. Open another terminal window/tab, navigate to the server directory, and install dependencies:

   bash
   cd ../server
   npm install
   

5. Start the Node.js server:

   bash
   npm start
   

6. Open your web browser and visit http://localhost:3000 to view the chatbot application.

## Technologies Used

- React.js
- Node.js
- WebSocket
- Bootstrap

## live deom for UI

https://chatapplication-60029957276.development.catalystserverless.in/app/index.html


