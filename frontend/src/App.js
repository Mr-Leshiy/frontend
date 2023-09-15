import React from "react";

import "./App.css";

import PageContextProvider from "./hooks/PageContext";

import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import PageHandler from "./components/PageHandler/PageHandler";
import EventsContextProvider from "./hooks/EventsContext";

function App() {
  return (
    <PageContextProvider>
      <div className="app">
        <Header />
        <div className="container">
          <Sidebar />
          <EventsContextProvider>
            <PageHandler />
          </EventsContextProvider>
        </div>
      </div>
    </PageContextProvider>
  );
}

export default App;
