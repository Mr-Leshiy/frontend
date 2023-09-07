import React from "react";

import "./App.css";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import PageContextProvider from "./hooks/PageContext";
import PageHandler from "./components/PageHandler/PageHandler";

function App() {
  return (
    <PageContextProvider>
      <div className="app">
        <Header />
        <div className="container">
          <Sidebar />
          <PageHandler />
        </div>
      </div>
    </PageContextProvider>
  );
}

export default App;
