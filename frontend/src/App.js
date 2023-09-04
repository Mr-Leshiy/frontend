import React, { useState, useRef, useLayoutEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import TicketsPage from "./components/TicketsPage/TicketsPage.js";
import EventsPage from "./components/EventsPage/EventsPage.js";
import PageContextProvider, {
  Pages,
  usePageContext,
} from "./hooks/PageContext";

const PageHandler = () => {
  const { activePage } = usePageContext();

  return (
    <>
      {activePage === Pages.tickets ? <TicketsPage /> : null}
      {activePage === Pages.events ? <EventsPage /> : null}
    </>
  );
};

function App() {
  const [activePage, setActivePage] = useState(Pages.tickets);
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
