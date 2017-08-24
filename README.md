# Jonathan Sue's "Chatty App" Project (Lighthouse Labs)


## Background
This project was completed as part of the Week 5 requirements while I was a student in the Web Development bootcamp at Lighthouse Labs. Many of the web applications that are commonly used today have real-time functionality where the user does not have to reload the page in order to see updates. Major examples of these include Slack, Twitter and Facebook. The app I created, Chatty, will allow users to communicate with each other without having to register accounts. It uses React, a popular front-end library created and used heavily by Facebook as well as modern tools for Node including Webpack and Babel.


## Functional Requirements

- Primarily a client-side SPA (single-page app) built with ReactJS
  * Based on the HTML and CSS provided by Lighthouse Labs
  * Contains a chat log displaying messages and notifications
  * Contains an input field to change your name and an input field to send a message
- The client-side app communicates with a server via WebSockets for multi-user real-time updates
- No persistent database is involved; the focus is on the client-side experience


## Final Product

!["Screenshot of Home Page"](https://raw.githubusercontent.com/jonosue/chatty-app/master/docs/home-page.png)
!["Screenshot of Home Page with Two Users Online"](https://raw.githubusercontent.com/jonosue/chatty-app/master/docs/two-users-online.png)
!["Screenshot of Two Online Users Renaming Themselves"](https://raw.githubusercontent.com/jonosue/chatty-app/master/docs/users-rename.png)
!["Screenshot of User 1 Broadcasting a Message"](https://raw.githubusercontent.com/jonosue/chatty-app/master/docs/user1-message-to-all.png)
!["Screenshot of User 2 Broadcasting a Message"](https://raw.githubusercontent.com/jonosue/chatty-app/master/docs/user2-message-to-all.png)


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the client-side app using the `npm start` command. The app will be served at <http://localhost:3000/>.
4. Start the Websocket server by navigating to the `chatty-server` folder. Once again, use the `npm start` command. The server will be served at <http://localhost:3001/>.
4. Go to <http://localhost:3000/> in your browser.


## Dependencies, Scripts, and External Requirements/Resources

- babel-core
- babel-loader
- babel-preset-es2015
- babel-preset-react
- babel-preset-stage-0
- css-loader
- eslint
- eslint-plugin-react
- express
- node-sass
- react
- react-dom
- sass-loader
- sockjs-client
- style-loader
- uuid
- webpack
- webpack-dev-server
- ws


## Contact

Questions? Comments? Please tweet me at [@JonoSue](http://twitter.com/JonoSue).


*README: Last updated August 24, 2017*
