import React, { useState } from "react";
import DateSection from "./DateSection";
import LocationSection from "./LocationSection";
import EventOptionsSection from "./EventOptionsSection";
import IconAndCategory from "./IconAndCategory";

const EventCreationSection = () => {
  const [eventName, setEventName] = useState("");

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handlePlaceholderStyle = (e, add) => {
    e.target.classList[add ? "add" : "remove"](
      "text-2xl",
      "placeholder-current"
    );
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="flex">
        <IconAndCategory />
      </div>

      <div className="flex p-1 flex-col">
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={handleEventNameChange}
          onClick={(e) => handlePlaceholderStyle(e, true)}
          onFocus={(e) => handlePlaceholderStyle(e, true)}
          onBlur={(e) => handlePlaceholderStyle(e, false)}
          className="py-4 my-2 text-4xl font-medium text-gray-700 border-none rounded-md outline-none "
        />
        <DateSection />
        <LocationSection />
        <p className="text-gray-400 font-medium pt-1 pb-3">Event Options</p>
        <EventOptionsSection />
      </div>
    </div>
  );
};

export default EventCreationSection;
