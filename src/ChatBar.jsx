import React, {Component} from 'react';

class ChatBar extends Component {

  constructor() {
    super();

    this.state = {
      message: '',
      user: ''
    }

    this.onPost = this.onPost.bind(this);
    this.onUsername = this.onUsername.bind(this);
  }

  onUsername(event) {
    this.setState({
      user: event.target.value
    })
  }

  onPost(event) {
    if (event.key === 'Enter') {
      this.setState({ message: event.target.value }, function() {
        const userValidate = (this.state.user || 'Anonymous');
        this.props.onNewPost({username: userValidate, content: this.state.message});
      });
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" onKeyUp={ this.onUsername } value={ this.setState.user }/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={ this.onPost } value={ this.setState.message }/>
      </footer>
    );
  }
}
export default ChatBar;