// LocationSection.js
import React, { useState } from "react";

const LocationSection = () => {
  const [Location, setLocation] = useState("");
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="flex items-center mb-4">
      <div className="w-12 p-1 justify-center border rounded-md">
        <svg
          class="h-8 w-8 justify-center text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Add Event Location"
        className="w-full p-2 m-2  bg-gray-100 border text-gray-500 rounded-md border-none rounded-md outline-none"
        value={Location}
        onChange={handleLocationChange}
        onClick={(e) =>
          e.target.classList.add("text-2xl", "placeholder-current")
        }
        onFocus={(e) =>
          e.target.classList.add("text-2xl", "placeholder-current")
        }
        onBlur={(e) =>
          e.target.classList.remove("text-2xl", "placeholder-current")
        }
      />
    </div>
  );
};
export default LocationSection;
