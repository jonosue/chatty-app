import React, {Component} from 'react';

class ChatBar extends Component {

  constructor() {
    super();

    this.state = {
      message: '',
      user: '',
      previous_user: ''
    }

    this.onPost = this.onPost.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      user: this.props.user
    })
  }

  onNameChange(event) {
    this.setState({previous_user: this.state.user});
    if (event.key === 'Enter') {
      this.setState({ user: event.target.value }, function() {
        this.props.onNameChange({type: "postNotification", "content": (this.state.previous_user + " changed their name to " + this.state.user)});
      });
    }
  }

  onPost(event) {
    if (event.key === 'Enter') {
      this.setState({ message: event.target.value }, function() {
        this.props.onNewPost({type: "postMessage", username: this.state.user || 'Anonymous', content: this.state.message});
      });
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" onKeyPress={ this.onNameChange } defaultValue={ this.props.user } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={ this.onPost } />
      </footer>
    );
  }
}
export default ChatBar;