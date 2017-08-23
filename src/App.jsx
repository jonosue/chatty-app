import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: "Bob"},
      messages: []
    };

    this.onNewPost = this.onNewPost.bind(this);
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onmessage = event => {
      const incomingMessage = JSON.parse(event.data);
      const newMessage = this.state.messages.concat(incomingMessage);
      this.setState({messages: newMessage});
    }
  }

  onNewPost(content) {
    this.socket.send(JSON.stringify(content));
  };

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.currentUser.name} onNewPost={this.onNewPost} />
      </div>
    );
  }
}
export default App;
