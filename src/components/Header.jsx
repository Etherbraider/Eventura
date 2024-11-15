import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";
// import ConnectWalletButton from "./Connectwallet";

function Header() {
  const navigate = useNavigate();

  const HandleHome = () => {
    navigate("/home");
  };

  const HandleAbout = () => {
    navigate("/about");
  };
  const Handlelogin=()=>{
    navigate("/login");
  };

  return (
    <div>
      <header className="header">
        <div className="logo" onClick={HandleHome}>
          <h1 id="Logo">Eventura</h1>
        </div>
        <nav className="nav-links">
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/bookings" className="nav-link">
            Bookings
          </Link>
          <Link to="/hosted" className="nav-link">
            Hosted
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <div className="login-con">
      <button className="login-btn" onClick={Handlelogin}>
        Login
      </button>
    </div>
          
          
        </nav>
      </header>
    </div>
  );
}

export default Header;
