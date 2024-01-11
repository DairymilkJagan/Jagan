import React, { Component } from 'react';
import './style.css';

class LoginClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.apiUrl = 'https://dev-qualdo.eastus.cloudapp.azure.com/iam/login';
  }

  validateForm = () => {
    const { email, password } = this.state;
    const errors = {};

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleLogin = async () => {
    if (this.validateForm()) {
      try {
        const response = await fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: this.state.email, password: this.state.password }),
        });

        if (response.ok) {
          // Handle successful login
          console.log('Login successful');
        } else {
          // Handle login failure
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  };

  render() {
    const { email, password, errors } = this.state;

    return (
      <div className="login-form-container">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default LoginClassForm;