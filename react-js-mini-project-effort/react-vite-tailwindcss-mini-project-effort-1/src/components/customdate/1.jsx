import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

export default function CustomApp() {
  const [startDate, setStartDate] = useState();

  return (
    <div>
      <DatePicker
        placeholderText="DD-mm-yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}
