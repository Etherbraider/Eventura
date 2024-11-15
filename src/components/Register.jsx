import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login-page'); // Navigates to the login page
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
      <button className="btn" onClick={handleLoginClick}>
        Go to Login
      </button>
    </div>
  );
};

export default Register;
