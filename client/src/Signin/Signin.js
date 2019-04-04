import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:5000/api/auth/login';
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log('LOGIN RESPONSE', res);
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/users');
      })
      .catch(error => {
        console.error('LOGIN ERROR', error);
      });
  };

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              value={this.state.username}
              onChange={this.handleInputChange}
              id="username"
              type="text"
            />
          </div>
          <div>
          <label>Password</label>
            <input
              value={this.state.password}
              onChange={this.handleInputChange}
              id="password"
              type="password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </>
    );
  }

}

export default Login;