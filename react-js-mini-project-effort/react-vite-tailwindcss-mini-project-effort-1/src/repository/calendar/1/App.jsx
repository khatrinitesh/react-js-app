import React, { useState } from 'react';

const CalendarApp = () => {
  return (
    <>
      <Calendar/>
    </>
  )
}

export default CalendarApp

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
  
    const getDaysInMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate();
    };
  
    const getFirstDayOfMonth = (year, month) => {
      return new Date(year, month, 1).getDay();
    };
  
    const handlePrevMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };
  
    const handleNextMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };
  
    const renderDays = () => {
      const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
      const firstDayOfMonth = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());
      const days = [];
  
      for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className="empty-day"></div>);
      }
  
      for (let day = 1; day <= daysInMonth; day++) {
        days.push(
          <div key={day} className="day">
            {day}
          </div>
        );
      }
  
      return days;
    };
  
    return (
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>&lt;</button>
          <span>{new Date(currentDate).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="days-of-week">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="calendar-grid">{renderDays()}</div>
      </div>
    );
  };