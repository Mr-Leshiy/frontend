import React, { useState } from "react";

import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import TicketsPage from "./components/TicketsPage/TicketsPage.js";
import Row from "./components/UI/Row/Row.js";

export const Pages = {
  tickets: "tickets",
  events: "events",
};

function App() {
  const [activePage, setActivePage] = useState(Pages.tickets);

  return (
    <>
      <Header />
      <Row>
        <Sidebar setPage={setActivePage} currentPage={activePage} />
        {activePage === Pages.tickets ? <TicketsPage /> : <></>}
      </Row>
    </>
  );
}

export default App;
