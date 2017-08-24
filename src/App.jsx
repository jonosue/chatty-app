import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: "Bob"},
      messages: [],
      online: 0
    };

    this.onNewPost = this.onNewPost.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onmessage = event => {
      const receivedMessage = JSON.parse(event.data);
      if (receivedMessage.type = "onlineStatus") {
        this.setState({online: Number(receivedMessage.status)});
      }
      else {
        const newMessage = this.state.messages.concat(receivedMessage);
        this.setState({messages: newMessage});
      }
    }
  }

  onNewPost(content) {
    this.socket.send(JSON.stringify(content));
  };

  onNameChange(content) {
    this.socket.send(JSON.stringify(content));
  };

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <span className="navbar-online">{this.state.online} users online</span>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.currentUser.name} onNewPost={this.onNewPost} onNameChange={this.onNameChange} />
      </div>
    );
  }
}
export default App;
