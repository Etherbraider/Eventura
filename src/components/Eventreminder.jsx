import React, { useState, useEffect, useRef } from "react";
import "../styles/EventReminder.css"; 
import EventCalendar from "./Calender";
import calendarimg from "../assets/calendar.png"; 

const EventReminder = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar); 
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const upcomingEvents = [
    { name: "Music Fest 2024", date: "25/07/2024" },
    { name: "Tech Conference", date: "10/08/2024" },
    { name: "Art Exhibition", date: "05/09/2024" },
    
  ];

  return (
    <div className="event-reminder">
      <div id="reminder-head">
        <h4>Upcoming Events</h4>
        <div onClick={handleCalendarToggle} className="calendar-icon">
          <img id="calendarimg" src={calendarimg} alt="Calendar" />
        </div>
      </div>

      {showCalendar && (
        <div className="calendar-popup" ref={calendarRef}>
          <EventCalendar />
        </div>
      )}

      {upcomingEvents.map((event, index) => (
        <div key={index} className="event-item">
          <p>
            <strong>{event.name}</strong>
          </p>
          <p>Date: {event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EventReminder;
