// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import App from './App.jsx';

ReactDOM.render(<ChatBar />, document.getElementsByClassName('chatbar')[0]);
ReactDOM.render(<MessageList />, document.getElementsByClassName('messages')[0]);
ReactDOM.render(<Message />, document.getElementById('message-list'));
ReactDOM.render(<App />, document.getElementById('react-root'));