import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DatePickerComp = () => {
  return (
    <>
      <DatePicker/>
    </>
  );
}

export default DatePickerComp;

const DatePicker = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
    // Function to toggle calendar visibility
    const toggleCalendar = () => setShowCalendar((prev) => !prev);
  
    // Function to generate days for the selected month and year
    const getDaysInMonth = (month, year) => {
      const date = new Date(year, month + 1, 0); // Get last day of the month
      const days = [];
      for (let i = 1; i <= date.getDate(); i++) {
        days.push(i);
      }
      return days;
    };
  
    // Handle selecting a date
    const handleSelectDate = (day) => {
      const date = new Date(currentYear, currentMonth, day);
      setSelectedDate(date);
      setShowCalendar(false); // Close calendar after date selection
    };
  
    // Handle changing the month
    const changeMonth = (direction) => {
      const newMonth = currentMonth + direction;
      if (newMonth < 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else if (newMonth > 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(newMonth);
      }
    };
  
    // Get the days of the current month
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  
    return (
      <DatePickerContainer>
        {/* Input Field */}
        <InputField
          type="text"
          value={selectedDate ? selectedDate.toLocaleDateString() : ''}
          onClick={toggleCalendar}
          placeholder="Select a date"
          readOnly
        />
  
        {/* Calendar Popup */}
        {showCalendar && (
          <CalendarContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Calendar Header with Month and Year */}
            <CalendarHeader>
              <ArrowButton onClick={() => changeMonth(-1)}>❮</ArrowButton>
              <span>{months[currentMonth]} {currentYear}</span>
              <ArrowButton onClick={() => changeMonth(1)}>❯</ArrowButton>
            </CalendarHeader>
  
            {/* Calendar Grid with Days */}
            <CalendarGrid>
              {daysInMonth.map((day) => (
                <DayButton
                  key={day}
                  selected={selectedDate && selectedDate.getDate() === day}
                  onClick={() => handleSelectDate(day)}
                >
                  {day}
                </DayButton>
              ))}
            </CalendarGrid>
          </CalendarContainer>
        )}
      </DatePickerContainer>
    );
  };
  

// Styled Components for DatePicker UI
const DatePickerContainer = styled.div`
  position: relative;
  display: inline-block;
  font-family: Arial, sans-serif;
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 200px;
  border: 2px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  
  &:focus {
    border-color: #007bff;
  }
`;

const CalendarContainer = styled(motion.div)`
  position: absolute;
  top: 40px;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  width: 250px;
  padding: 10px;
  z-index: 1000;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 8px;
`;

const DayButton = styled.button`
  padding: 10px;
  font-size: 14px;
  background: ${(props) => (props.selected ? '#007bff' : 'transparent')};
  color: ${(props) => (props.selected ? '#fff' : '#333')};
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  color: #333;
  
  &:hover {
    background-color: #f0f0f0;
    border-radius: 50%;
  }
`;

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];