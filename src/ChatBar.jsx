import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    return (
      <footer>
        <input className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}
export default ChatBar;