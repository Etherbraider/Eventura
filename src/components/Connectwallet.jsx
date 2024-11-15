import React, { useState, useEffect } from "react";
import Web3 from "web3";
import profileimg from "../assets/profile.png";
import "../styles/Header.css";
// import Profile from "./profile";
const ConnectWalletButton = () => {
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [balance, setBalance] = useState(null); // State to store the balance

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        // Create Web3 instance
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
      } else {
        alert("Please install MetaMask!");
      }
    };

    initWeb3();
  }, []);

  const ConnectWallet = async () => {
    if (web3) {
      try {
        // Request account access
        const accounts = await web3.eth.requestAccounts();
        setAccount(accounts[0]);
        console.log("Connected account:", accounts[0]);

        // Fetch balance in Wei and convert to Ether
        const balanceWei = await web3.eth.getBalance(accounts[0]);
        const balanceInEther = web3.utils.fromWei(balanceWei, "ether");
        setBalance(balanceInEther); // Set the Ether balance in state
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    }
  };
  return (
    <div>
      {account ? (

        <div>
          <div>
            <img id="profileimg" src={profileimg} alt="" />
            <div id="profile-submenu">
            <ul>
              <li>
                <p>Connected Account: {account}</p>
              </li>
              <li>
                <p>Balance: {balance} ETH</p>
              </li>
              <li>
                <button
                  className=""
                  onClick={() => setAccount(null)}
                >
                  Disconnect
                </button>
              </li>
            </ul>
          </div>
          </div>
         
        </div>
      ) : (
        <button className="login-btn" onClick={ConnectWallet}>
          login
        </button>
      )}
    </div>
  );
};

export default ConnectWalletButton;


// <div>
// {account ? (
//   <div>
//     <div>
//       <img id="profileimg" src={profileimg} alt="" />
//       <div id="profile-submenu">
//       <ul>
//         <li>
//           <p>Connected Account: {account}</p>
//         </li>
//         <li>
//           <p>Balance: {balance} ETH</p>
//         </li>
//         <li>
//           <button
//             className="connect-wallet-button"
//             onClick={() => setAccount(null)}
//           >
//             Disconnect
//           </button>
//         </li>
//       </ul>
//     </div>
//     </div>
   
//   </div>
// ) : (
//   <button className="connect-wallet-button" onClick={ConnectWallet}>
//     Connect Wallet
//   </button>



