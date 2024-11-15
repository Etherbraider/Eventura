import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register'); // Navigates to the register page
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      <button className="btn" onClick={handleRegisterClick}>
        Go to Register
      </button>
    </div>
  );
};

export default Login;
