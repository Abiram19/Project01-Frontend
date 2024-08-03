// src/components/Calendar/Calendar.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);
  const [availableSlots, setAvailableSlots] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    generateCalendar();
    fetchAvailableSlots();
  }, [currentDate]);

  const fetchAvailableSlots = async () => {
    // Mocking API response
    const mockData = {
      "2024-07-30": 3,
      "2024-07-31": 2,
      // ... other dates
    };
    setAvailableSlots(mockData);
  };

  const generateCalendar = () => {
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    const startDate = startOfMonth.getDay();
    const totalDays = endOfMonth.getDate();

    const daysArray = [];
    for (let i = 0; i < startDate; i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), i)
      );
    }
    setDays(daysArray);
  };

  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDayClick = (day) => {
    if (day && day >= new Date(new Date().setHours(0, 0, 0, 0))) {
      const formattedDate = day.toLocaleDateString("en-CA"); // Format as YYYY-MM-DD
      navigate(`/bookingStation01/timeslot/${formattedDate}`);
    }
  };

  const renderDay = (day) => {
    if (!day) return <div className="day empty"></div>;

    const formattedDate = day.toLocaleDateString("en-CA");
    const available = availableSlots[formattedDate] || 0;
    const isPast = day < new Date(new Date().setHours(0, 0, 0, 0));

    return (
      <div className="day" onClick={() => handleDayClick(day)} key={day}>
        <div>{day.getDate()}</div>
        {isPast ? (
          <div className="status na">N/A</div>
        ) : (
          <div className="status book">
            <button>Book</button>
            <div className="slots">{available} slots left</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePreviousMonth}>Previous Month</button>
        <div className="current-month">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </div>
        <button onClick={handleNextMonth}>Next Month</button>
      </div>
      <div className="days-grid">
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day) => (
          <div className="day-name" key={day}>
            {day}
          </div>
        ))}
        {days.map((day, index) => renderDay(day, index))}
      </div>
    </div>
  );
};

export default Calendar;
