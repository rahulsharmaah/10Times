// src/api/mockApi.js
const events = [];

const createEvent = (event) => {
  events.push(event);
};

const getEvents = () => {
  return events;
};

export default {
  createEvent,
  getEvents,
};
