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
      setValidationError("");
    } else {
      setValidationError("End date cannot be earlier than start date");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start">
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
      <div className="flex flex-col mt-2 border m-2 px-4 py-4 rounded-md bg-gray-50 sm:w-full">
        <div className="flex flex-col sm:flex-row items-center mb-2 gap-1">
          <div className="text-lg sm:flex-1 font-medium text-gray-800">
            Start
          </div>

          {/* Date Picker Container */}
          <div className="sm:flex-1 sm:items-center pr-4">
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              dateFormat="MM/dd"
              className="px-2 py-2 text-gray border rounded-md bg-gray-100 w-full"
            />
          </div>

          {/* Time Picker Container */}
          <div className="sm:flex-1 items-center">
            <TimePicker
              value={startTime}
              onChange={(time) => setStartTime(time)}
              className="h-10 py-2 text-gray border rounded-md bg-gray-100 w-full"
              clearIcon={false}
              disableClock="true"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-1">
          <div className="text-lg sm:flex-1 font-medium text-gray-800">End</div>

          {/* Date Picker Container */}
          <div className="sm:flex-1 items-center justify-start pr-4">
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              dateFormat="MM/dd"
              className="px-2 py-2 text-gray-800 border rounded-md bg-gray-100 w-full"
            />
          </div>

          {/* Time Picker Container */}
          <div className="sm:flex-1 items-center justify-center">
            <TimePicker
              value={endTime}
              onChange={(time) => setEndTime(time)}
              className="text-gray-800 justify-center h-10 py-2 align-middle border-none rounded-md bg-gray-100 time-picker-container w-full"
              clearIcon={false}
              onFocus={() => setEndTime("00:00")}
              disableClock="true"
            />
          </div>
        </div>

        {validationError && (
          <div className="text-red-500 mt-2">{validationError}</div>
        )}
        <div className="flex items-center gap-3 py-3 border-b-2">
          <div className="h-6 w-6 rounded-full font-medium text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </div>
          <div className="pl-3 text-gray-500 font-medium">
            GMT +5:30 Kolkata
          </div>
        </div>
        <div className="flex items-center gap-3 py-3 border-b-2">
          <div className="h-6 w-6 rounded-full font-medium text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
              />
            </svg>
          </div>
          <div className="pl-3 text-gray-500 font-medium">
            Create Multi-Session Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSection;
