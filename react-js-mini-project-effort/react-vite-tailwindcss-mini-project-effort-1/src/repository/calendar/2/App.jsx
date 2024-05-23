import React, { useState, useEffect } from "react";
import "./style.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CustomApp = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl font-semibold mb-4">Calendar Example</h1>
        <Calendar />
    </div>
    </>
  )
};

export default CustomApp;

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const generateCalendar = () => {
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    const firstDayOfWeek = firstDayOfMonth.getDay();

    const days = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
    }

    return days;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  useEffect(() => {
    console.log("Selected Date:", selectedDate);
    // Add your logic when a date is selected
  }, [selectedDate]);

  return (
    <>
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={handlePrevMonth} className="nav-button">
            &lt;
          </button>
          <h2 className="month-title">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <button onClick={handleNextMonth} className="nav-button">
            &gt;
          </button>
        </div>
        <div className="calendar-grid">
          {daysOfWeek.map((day) => (
            <div key={day} className="day-header">
              {day}
            </div>
          ))}
          {generateCalendar().map((date, index) => (
            <div
              key={index}
              onClick={() => handleDateClick(date)}
              className={`calendar-day ${date ? "" : "empty"} ${
                date && date.toDateString() === selectedDate?.toDateString()
                  ? "selected"
                  : ""
              }`}
            >
              {date && date.getDate()}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
