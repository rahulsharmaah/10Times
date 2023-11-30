import React, { useState } from "react";
const ThemeSelector = ({ onThemeChange }) => {
  const themes = [
    { name: "Abstract", color: "bg-gray-100", font: "font-sans" },
    {
      name: "Minimal",
      color: "bg-gradient-to-t from-amber-500 to-red-300",
      font: "font-serif",
    },
    {
      name: "Quantum",
      color: "bg-gradient-to-r from-sky-300 to-sky-300",
      font: "font-mono",
    },
    {
      name: "Holiday",
      color: "bg-gradient-to-r from-amber-200 to-yellow-500",
      font: "font-serif",
    },
  ];

  const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleThemeSelection = (index) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedThemeIndex(index);
      onThemeChange(themes[index].color);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="mt-4 mb-4">
      <h2 className="text-lg font-medium text-gray-400 mb-2">Select Theme</h2>
      <div className="flex w-full flex-wrap gap-4">
        {themes.map((theme, index) => (
          <div
            key={index}
            onClick={() => handleThemeSelection(index)}
            className={`flex flex-col items-center cursor-pointer  ${
              selectedThemeIndex === index ? "border-2 border-slate-900" : ""
            } p-2 rounded-md `}
          >
            <div
              className={`bg-gray-400 border rounded-md px-2 py-2 ${theme.color}`}
            >
              <p className={"text-white"}>Title {index + 1}</p>
              <div className="w-full h-1 bg-gray-100 my-1"></div>
              <div className="w-8 h-1 bg-gray-100 my-1"></div>
              <div className="w-6 h-1 bg-gray-100 my-1"></div>
            </div>
            <p
              className={`${
                selectedThemeIndex === index ? "text-black" : "text-gray-300"
              }`}
            >
              {theme.name}
            </p>
          </div>
        ))}
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
          Loading...
        </div>
      )}
      {/* <div
        className={`mt-2 ${themes[selectedThemeIndex].color} p-2 rounded-md ${themes[selectedThemeIndex].font}`}
      >
        <p className="text-white">Theme Preview</p>
      </div> */}
    </div>
  );
};

export default ThemeSelector;
