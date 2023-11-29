import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

const DateSection = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [validationError, setValidationError] = useState("");

  const selectedMonth = startDate.toLocaleString("default", { month: "short" });
  const selectedDate = startDate.getDate();

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setValidationError(""); // Clear validation error when start date changes
  };

  const handleEndDateChange = (date) => {
    if (date >= startDate) {
      setEndDate(date);
      setValidationError(""); // Clear validation error when end date changes
    } else {
      setValidationError("End date cannot be earlier than start date");
    }
  };

  return (
    <div className="flex flex-row">
      {/* Selected Month and Date */}
      <div className="flex flex-col items-center mt-2 rounded-lg">
        <div className="flex flex-col items-center align-top justify-start border rounded-lg">
          <p className="bg-gray-500 text-white text-center p-2">
            {selectedMonth}
          </p>
          <p className="mt-1 bg-white text-black p-2">{selectedDate}</p>
        </div>
      </div>

      {/* Start Date and End Date */}
      <div className="flex flex-col items-center mt-2 border m-2 px-4 py-4 rounded-md bg-gray-100">
        <div className="flex items-center mb-2 gap-1">
          <div className="text-lg flex-1 font-medium text-gray-800">Start</div>

          {/* Date Picker Container */}
          <div className="flex-1 items-center pr-4">
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              dateFormat="MM/dd"
              className="px-2 py-2 text-gray border rounded-md bg-gray-200 w-full"
            />
          </div>

          {/* Time Picker Container */}
          <div className="flex-1 items-center">
            <TimePicker
              value={startTime}
              onChange={(time) => setStartTime(time)}
              className="h-10 py-2 text-gray border rounded-md bg-gray-200 w-full"
              clearIcon={false}
              disableClock="true"
            />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="flex-1 text-lg font-medium text-gray-800">End</div>

          {/* Date Picker Container */}
          <div className="flex-1 items-center justify-start pr-4">
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              dateFormat="MM/dd"
              className="px-2 py-2 text-gray-800 border rounded-md bg-gray-200 w-full"
            />
          </div>

          {/* Time Picker Container */}
          <div className="flex-1 items-center justify-center">
            <TimePicker
              value={endTime}
              onChange={(time) => setEndTime(time)}
              className="text-gray-800 justify-center h-10 py-2 align-middle border-none rounded-md bg-gray-200 time-picker-container w-full"
              clearIcon={false}
              onFocus={() => setEndTime("00:00")}
              disableClock="true"
            />
          </div>
        </div>

        {validationError && (
          <div className="text-red-500 mt-2">{validationError}</div>
        )}
      </div>
    </div>
  );
};

export default DateSection;
