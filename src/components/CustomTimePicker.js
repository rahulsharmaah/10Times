import React, { useState } from 'react';

const CustomTimePicker = () => {
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState('AM');

  const handleHourChange = (e) => {
    const hour = parseInt(e.target.value, 10);
    setSelectedHour(hour);
  };

  const handleMinuteChange = (e) => {
    const minute = parseInt(e.target.value, 10);
    setSelectedMinute(minute);
  };

  const handlePeriodChange = (e) => {
    const period = e.target.value;
    setSelectedPeriod(period);
  };

  return (
    <div>
      <label htmlFor="hour">Hour:</label>
      <select id="hour" value={selectedHour} onChange={handleHourChange}>
        {Array.from({ length: 12 }, (_, index) => index + 1).map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>

      <label htmlFor="minute">Minute:</label>
      <select id="minute" value={selectedMinute} onChange={handleMinuteChange}>
        {Array.from({ length: 60 }, (_, index) => index).map((minute) => (
          <option key={minute} value={minute}>
            {minute.toString().padStart(2, '0')}
          </option>
        ))}
      </select>

      <label htmlFor="period">AM/PM:</label>
      <select id="period" value={selectedPeriod} onChange={handlePeriodChange}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>

      <p>
        Selected Time: {selectedHour.toString().padStart(2, '0')}:
        {selectedMinute.toString().padStart(2, '0')} {selectedPeriod}
      </p>
    </div>
  );
};

export default CustomTimePicker;
