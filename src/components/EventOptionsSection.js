// EventOptionsSection.js
import React from 'react';
import TicketSection from './TicketSection';

const EventOptionsSection = ({ multiSession, onToggleMultiSession }) => (
  <div className="mb-4">
    <TicketSection />
    <div className="flex items-center mb-2">
      <div className="w-1/6">ticket</div>
      <div className="w-1/3"> Multi-Session </div>
      <div className="w-1/">
        <input
          type="checkbox"
          id="multi-session-checkbox"
          checked={multiSession}
          onChange={onToggleMultiSession}
          className="mr-1"
        />
        { /* Icon of edit */ }
      </div>
    </div>
  </div>
);

export default EventOptionsSection;
