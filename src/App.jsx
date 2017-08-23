import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

const chattySocket = new WebSocket("ws://localhost:3001")

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: 'Bob',
      messages: [],
      socket: chattySocket
    };

    this.onNewPost = this.onNewPost.bind(this);
  }

  componentDidMount() {
    this.socket;
  }

  onNewPost(content) {
    const messages = this.state.messages.concat(content);
    this.setState({messages: messages});
    chattySocket.send(JSON.stringify(content));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.currentUser} onNewPost={this.onNewPost} />
      </div>
    );
  }
}
export default App;
