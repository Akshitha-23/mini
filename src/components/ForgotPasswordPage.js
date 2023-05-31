import React from 'react';
import './ForgotPasswordPage.css';

class ForgotPasswordPage extends React.Component {
  state = {
    email: '',
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Perform forgot password logic here, e.g., sending reset password request to the server
    console.log('Forgot Password submitted');
    console.log('Email:', this.state.email);
    // Reset the form after submission
    this.setState({ email: '' });
  };

  render() {
    return (
      <div className="forgot-password-page">
        <h1>Forgot Password</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
    );
  }
}

export default ForgotPasswordPage;
