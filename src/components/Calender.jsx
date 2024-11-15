import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../styles/Calendar.css"; // Custom CSS for Calendar component

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={date}
        className="calendar"
      />
      
    </div>
  );
};

export default EventCalendar;
