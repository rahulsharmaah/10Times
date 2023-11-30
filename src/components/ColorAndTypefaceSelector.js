import React, { useEffect, useRef, useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const Dropdown = ({ items, selected, onSelect, label, text }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSelect = (value) => {
    onSelect(value);
    setDropdownVisible(false);
  };

  return (
    <div className="flex items-center mb-2 border-b-2 pb-2  ">
      <div
        className={`h-6 w-6 rounded-full font-medium text-slate-800 ${selected}`}
      >
        {text}
      </div>
      <div className="pl-3">{label}</div>
      <div
        className="ml-auto flex flex-row items-center justify-center space-x-2 relative"
        onClick={toggleDropdown}
      >
        <span className="mr-2">Edit</span>
        <div className="relative">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400 cursor-pointer"
            aria-hidden="true"
          />
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {items.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => handleSelect(item.value)}
                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 z-10 ${item.value}`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ColorAndTypefaceSelector = () => {
  const [selectedColor, setSelectedColor] = useState("bg-blue-500");
  const [selectedTypeface, setSelectedTypeface] = useState("font-sans");

  const colors = [
    { name: "Blue", value: "bg-blue-500" },
    { name: "Red", value: "bg-red-500" },
    { name: "Green", value: "bg-green-500" },
  ];

  const typefaces = [
    { name: "Sans-serif", value: "font-sans" },
    { name: "Serif", value: "font-serif" },
    { name: "Mono", value: "font-mono" },
  ];

  return (
    <>
      <div className="mb-4 bg-gray-50 text-gray-500  rounded-lg font-medium p-2  ">
        <Dropdown
          items={colors}
          selected={selectedColor}
          onSelect={setSelectedColor}
          label="Color"
        />
        <Dropdown
          text="Ag"
          items={typefaces}
          selected={selectedTypeface}
          onSelect={setSelectedTypeface}
          label="Typeface"
        />
      </div>
    </>
  );
};

export default ColorAndTypefaceSelector;
