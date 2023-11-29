// EventCreationSection.js
import React, { useState } from "react";
// import IconAndCategory from "./IconAndCategory";
import DateSection from "./DateSection";
import LocationSection from "./LocationSection";
import EventOptionsSection from "./EventOptionsSection";
import TicketSection from "./TicketSection";
// import BgChanger from "./BgChanger";

const EventCreationSection = () => {
  const [eventName, setEventName] = useState("");
  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="flex p-1 flex-col">
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={handleEventNameChange}
          onClick={(e) =>
            e.target.classList.add("text-2xl", "placeholder-current")
          }
          onFocus={(e) =>
            e.target.classList.add("text-2xl", "placeholder-current")
          }
          onBlur={(e) =>
            e.target.classList.remove("text-2xl", "placeholder-current")
          }
          className="py-4 my-2 text-4xl font-medium text-gray-500 border-none rounded-md outline-none "
        />
        <DateSection />
        <LocationSection />
        <p className="text-gray-400 font-medium pt-1 pb-3">Event Options</p>
        <EventOptionsSection />
      </div>
      <div className="w-full p-4">
        {/* Image selection and theme options */}
        <div className="w-full p-4">{/* Your content goes here */}</div>
      </div>
    </div>
  );
};

export default EventCreationSection;
