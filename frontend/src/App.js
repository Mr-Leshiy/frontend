import React, { useState } from "react";

import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import TicketsPage from "./components/TicketsPage/TicketsPage.js";
import Row from "./components/UI/Row/Row.js";
import CreateEventPage from "./components/CreateEventPage/CreateEventPage.js";

export const Pages = {
  tickets: "tickets",
  create_event: "create_event",
};

function App() {
  const [activePage, setActivePage] = useState(Pages.tickets);

  return (
    <>
      <Header />
      <Row>
        <Sidebar setPage={setActivePage} currentPage={activePage} />
        {activePage === Pages.tickets ? <TicketsPage /> : <></>}
        {activePage === Pages.create_event ? <CreateEventPage /> : <></>}
      </Row>
    </>
  );
}

export default App;
