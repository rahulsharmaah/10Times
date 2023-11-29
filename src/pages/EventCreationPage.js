// src/App.js
import React from "react";
import Header from "../components/Header";
import EventCreationSection from "../components/EventCreationSection";
// import BgChanger from "../components/BgChanger";
// import IconAndCategory from "../components/IconAndCategory";
// import LocationSection from "../components/LocationSection";
// import DateSection from "../components/DateSection";

function EventCreationPage() {
  return (
    <div className="flex flex-col bg-gray-100 px-14 py-8 ml-40 mr-40  mt-20 mb-20 ">
      {/* Header at the top */}
      <Header />
      {/* Two divs side by side */}
      <div className="flex flex-row  bg-white flex-grow py-4 px-4 border rounded-lg">
        {/* First div */}
        <div className="flex-1 p-4">
          {/* Your content for the first div goes here */}
          Event Creation Section
          <EventCreationSection />
        </div>

        {/* Second div */}
        <div className="flex-1 bg-white p-4">
          Your content for the second div goes here
          {/* <BgChanger/> */}
        </div>
      </div>
      <div className=" flex-col w-auto flex-wrap bg-white p-4">
        <button className="bg-slate-900 text-white p-2 rounded-md">
          Create Event
        </button>
      </div>
    </div>
  );
}

export default EventCreationPage;
