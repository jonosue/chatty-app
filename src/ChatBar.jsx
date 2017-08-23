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

  componentDidMount() {
    this.setState({
      user: this.props.user
    })
  }

  onUsername(event) {
    this.setState({
      user: event.target.value
    })
  }

  onPost(event) {
    if (event.key === 'Enter') {
      this.setState({ message: event.target.value }, function() {
        this.props.onNewPost({username: this.state.user || 'Anonymous', content: this.state.message});
      });
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" onBlur={ this.onUsername } defaultValue={ this.props.user } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={ this.onPost } />
      </footer>
    );
  }
}
export default ChatBar;