import React from "react";

import "./App.css";

import EventsContextProvider from "./hooks/EventsContext";
import EventImagesContextProvider from "./hooks/EventImagesContext";
import PageContextProvider from "./hooks/PageContext";

import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import PageHandler from "./components/PageHandler/PageHandler";

function App() {
  return (
    <PageContextProvider>
      <div className="app">
        <Header />
        <div className="container">
          <Sidebar />
          <EventsContextProvider>
            <EventImagesContextProvider>
              <PageHandler />
            </EventImagesContextProvider>
          </EventsContextProvider>
        </div>
      </div>
    </PageContextProvider>
  );
}

export default App;
