import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SignIn from '../Signin/Signin';
import SignUp from '../Signup/Signup';
import Users from '../Users/Users'

export default class Home extends Component {

    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/');
      };

  render() {
    return (
      <div>
        <h2> 🐯 Welcome to the Jungle 🐯 </h2>
       <header>
        <NavLink to='/signup'>Sign Up</NavLink>
        &nbsp;|&nbsp;
        <NavLink to ='/signin'>Sign In</NavLink>
        &nbsp;|&nbsp;
        <NavLink to ='/users'>Users</NavLink>
        <button onClick={this.logout}>Logout</button>
       </header>
       <main>
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/users' component={Users} />
       </main>
      </div>
    )
  }
}
