import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const messageLoop = this.props.messages.map(function(messages, i){
      return <Message name={messages.username} content={messages.content} key={messages.id} />;
    })
    return (
      <main className="messages">
        <div id="message-list">
          { messageLoop }
        </div>
      </main>
    );
  }
}
export default MessageList;