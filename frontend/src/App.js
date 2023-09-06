import React, { useRef, useLayoutEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import PageContextProvider from "./hooks/PageContext";
import PageHandler from "./components/PageHandler/PageHandler";

function App() {
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (headerRef.current && containerRef.current) {
      const headerHeight = headerRef.current.getBoundingClientRect().height;
      containerRef.current.style.height = `calc(100vh - ${headerHeight}px)`;
    }
  }, []);

  return (
    <PageContextProvider>
      <div className="app">
        <Header header_ref={headerRef} />
        <div ref={containerRef} className="container">
          <Sidebar />
          <PageHandler />
        </div>
      </div>
    </PageContextProvider>
  );
}

export default App;
