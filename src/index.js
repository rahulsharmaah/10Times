import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import EventCreationPage from "./pages/EventCreationPage";
// import EventCreationPage from "./pages/EventCreationPage";
// import EventListPage from "./pages/EventList";
// import Layout from "./components/Layout";
// import EventComponent from "./components/EventForm";
const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<Layout />}>
    <Route>
      <Route path="/" element={<EventCreationPage />}/>
      <Route path="/events-listing" element={<EventCreationPage />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
