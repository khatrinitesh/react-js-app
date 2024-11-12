import React, { useState } from 'react';

const CalendarComp = () => {
  return (
    <>
      <Calendar/>
    </>
  );
}

export default CalendarComp;

// Utility functions to handle date logic
const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 0); // The last date of the given month
    return date.getDate();
  };
  
  const getFirstDayOfMonth = (month, year) => {
    const date = new Date(year, month - 1, 1); // Get the first day of the given month
    return date.getDay();
  };

  
  const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null); // Track the selected date
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // Current month
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Current year
  
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
  
    // Generate an array of days to display in the calendar grid
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
  
    // Handle navigation to the next or previous month
    const goToNextMonth = () => {
      if (currentMonth === 12) {
        setCurrentMonth(1);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    };
  
    const goToPreviousMonth = () => {
      if (currentMonth === 1) {
        setCurrentMonth(12);
        setCurrentYear(currrentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    };
  
    // Handle day click
    const handleDayClick = (day) => {
      setSelectedDate(new Date(currentYear, currentMonth - 1, day));
    };
  
    // Get current date to highlight it
    const today = new Date();
    const isToday = (day) => {
      return today.getDate() === day && today.getMonth() + 1 === currentMonth && today.getFullYear() === currentYear;
    };
  
    return (
      <div>
        <h2>
          {new Date(currentYear, currentMonth - 1).toLocaleString('default', { month: 'long' })} {currentYear}
        </h2>
  
        <div>
          <button onClick={goToPreviousMonth}>Previous</button>
          <button onClick={goToNextMonth}>Next</button>
        </div>
  
        <div className="calendar-grid">
          {/* Empty cells before the first day of the month */}
          {[...Array(firstDayOfMonth).keys()].map((_, index) => (
            <div key={`empty-${index}`} className="calendar-day empty"></div>
          ))}
  
          {/* Generate the days of the month */}
          {days.map((day) => (
            <div
              key={day}
              className={`calendar-day ${isToday(day) ? 'today' : ''} ${selectedDate?.getDate() === day ? 'selected' : ''}`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </div>
          ))}
        </div>
  
        {selectedDate && (
          <div>
            <h3>Selected Date: {selectedDate.toDateString()}</h3>
          </div>
        )}
      </div>
    );
  };
  
