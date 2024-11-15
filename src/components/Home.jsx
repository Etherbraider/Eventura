import { useNavigate } from "react-router-dom";
import addimg from "../assets/add.png";
import "../styles/Home.css";
import Eventcard from "../components/Eventcard";
import EventReminder from "./Eventreminder";
import searchimg from '../assets/search.png'

const Home = () => {
  const navigate = useNavigate();
  const HandleHost = () => {
    navigate("/host");
  };

  return (
    <div id="home">
      {/* <button className="hostbtn" onClick={HandleHost}>Host</button> */}

      <div id="home-top">
        <div id="host-container" onClick={HandleHost}>
          <img className="hostimg" src={addimg} alt="host" />
          <p>Host Your Event</p>
        </div>
        <div id="searchbar">
          <input
            className="search"
            type="text"
            placeholder="search here latest events "
          />
          <div></div>
          <img id="searchimg" src={searchimg} alt="" />
        </div>
        <div id="Calender-box"><EventReminder /></div>
      </div>

      <div  id="home-mid">
        <div>
          <h3 className="home-heads">Latest Events </h3>
        </div>
        <section id="card-container">
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
        </section>
      </div>

      <div id="home-end">
      <div>
          <h3 className="home-heads">Event Category</h3>
        </div>
        <section id="card-container">
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
        </section>
      </div>
    </div>
    
  );
};

export default Home;
