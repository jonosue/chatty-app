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
    this.onUsername = this.onUsername.bind(this);
  }

  componentDidMount() {
    this.setState({
      user: this.props.user,
      previous_user: this.props.user
    })
  }

  onUsername(event) {
    this.setState({previous_user: this.state.user});
    if (this.state.previous_user !== event.target.value) {
      this.setState({ user: event.target.value }, function() {
        this.props.onNameChange({type: "postNotification", "content": (this.state.previous_user + " changed their name to " + this.state.user)});
        this.setState({previous_user: this.state.user});
      });
    }
  }

  onNameChange(event) {
    this.setState({previous_user: this.state.user});
    if ((event.key === 'Enter') && (this.state.previous_user !== event.target.value)) {
      this.setState({ user: event.target.value }, function() {
        this.props.onNameChange({type: "postNotification", "content": (this.state.previous_user + " changed their name to " + this.state.user)});
        this.setState({previous_user: this.state.user});
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
        <input className="chatbar-username" placeholder="Your Name (Optional)" onBlur={ this.onUsername } onKeyPress={ this.onNameChange } defaultValue={ this.props.user } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={ this.onPost } />
      </footer>
    );
  }
}
export default ChatBar;