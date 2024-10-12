import React, { useState } from 'react';
import  DatePicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const CustomApp = () => {
    const [startDate, setStartDate] = useState(new Date());

    const formatDate = (date) => {
      return date ? format(date, 'EEE, dd MMM') : 'Select a date';
    };
  
    return (
      <>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
           dateFormat="EEE, dd MMM"
          customInput={
            <input
              className="border p-2"
              readOnly
              value={formatDate(startDate)}
              placeholder="Select a date"
            />
          }
        />
      </>
    );
}

export default CustomApp;


