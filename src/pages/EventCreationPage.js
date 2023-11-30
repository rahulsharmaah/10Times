import React, { useState } from "react";
import Header from "../components/Header";
import EventCreationSection from "../components/EventCreationSection";
import { PageHeader } from "../components/PageHeader";
import ImageUploader from "../components/ImageUploader";
import ThemeSelector from "../components/ThemeSelector";
import ColorAndTypefaceSelector from "../components/ColorAndTypefaceSelector";

function EventCreationPage() {
  const [theme, setTheme] = useState(null);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const containerClasses = `flex flex-col bg-gray-50 px-14 py-8 ml-40 mr-40 mt-10 mb-20 sm:ml-0-mr-0 ${theme}`;

  return (
    <>
      <PageHeader title="Create Event" />
      <div className={containerClasses}>
        {/* Header at the top */}
        <Header />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 bg-white py-4 px-4 border rounded-lg">
          <div className="flex-1 p-4">
            <EventCreationSection />
          </div>
          <div className="flex-1 p-4">
            <ImageUploader />
            <ThemeSelector onThemeChange={handleThemeChange} />
            <ColorAndTypefaceSelector />
          </div>
          <div className="flex-col w-auto flex-wrap p-1">
            <button className="bg-slate-900 text-white p-2 rounded-md" style={{ width: "100%" }}>
              Create Event
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCreationPage;
