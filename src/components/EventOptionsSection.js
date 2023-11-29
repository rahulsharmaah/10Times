// EventOptionsSection.js
import React from "react";
import EditIcon from "./EditIcon";
import { TicketIcon } from "./TicketIcon";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const EventOptionsSection = () => (
  <div className="mb-4 bg-gray-100 text-gray-500 border rounded-lg font-medium p-2">
    <div className="flex items-center mb-2 border-b-2 pb-1">
      <div>
        <TicketIcon />
      </div>
      <div className="pl-3"> Tickets </div>
      <div className="ml-auto flex flex-row items-center justify-center">
        <span className="mr-2">Free</span>
        <span>
          <EditIcon />
        </span>
      </div>
    </div>
    {/* ... (other similar blocks) */}
    <div className="flex items-center mb-2  border-gray-200 border-b-2 pb-1">
      <div>
        <TicketIcon />
      </div>
      <div className="pl-3"> Required Approval </div>
      <div className="ml-auto flex flex-row items-center justify-center">
        <label
          htmlFor="AcceptConditions"
          className="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
        >
          <input
            type="checkbox"
            id="AcceptConditions"
            className="peer sr-only"
          />
          <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
          <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
        </label>
      </div>
    </div>
    {/* othr */}
    <div className="flex items-center mb-2 border-b-2 pb-1">
      <div>
        <TicketIcon />
      </div>
      <div className="pl-3"> Capacity </div>
      <div className="ml-auto flex flex-row items-center justify-center">
        <span className="mr-2">Unlimited</span>
        <span>
          <EditIcon />
        </span>
      </div>
    </div>
    {/* visibility */}
    <div className="flex items-center mb-2">
      <div>
        <TicketIcon />
      </div>
      <div className="pl-3"> Visibility </div>
      <div className="ml-auto flex flex-row items-center justify-center">
        <span className="mr-2">Edit</span>
        <span>
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  </div>
);

export default EventOptionsSection;
