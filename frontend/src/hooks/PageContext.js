import React, { useState, createContext, useContext } from "react";

export const Pages = {
  tickets: "tickets",
  ticket: "ticket",
  events: "events",
  event: "event",
};

const PageContext = createContext(null);

const PageContextProvider = ({ children }) => {
  const [activePage, setActivePage] = useState({
    type: Pages.tickets,
    props: {},
  });

  return (
    <PageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  return context;
};

export default PageContextProvider;
