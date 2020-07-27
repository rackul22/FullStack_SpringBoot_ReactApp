import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';
import AutheticatedRoute from './AutheticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import WelcomeComponent from './WelcomeComponent';
import TodoComponent from './TodoComponent.jsx';

class TodoApp extends Component {
  render() {
    return (
      <div className='TodoApp'>
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path='/' exact component={LoginComponent} />
              <Route path='/login' component={LoginComponent} />
              <AutheticatedRoute
                path='/welcome/:name'
                component={WelcomeComponent}
              />
              <AutheticatedRoute path='/todos/:id' component={TodoComponent} />
              <AutheticatedRoute path='/todos' component={ListTodosComponent} />
              <AutheticatedRoute path='/logout' component={LogoutComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

// function ShowInvalidCredentials(props) {
//   if (props.hasLoginFailed) {
//     return <div>Invalid Credentials</div>;
//   }
//   return null;
// }

// function ShowLoginSuccesful(props) {
//   if (props.showSuccessMessage) {
//     return <div>Login Successful</div>;
//   }
//   return null;
// }

export default TodoApp;
