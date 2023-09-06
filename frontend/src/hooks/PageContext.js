import React, { useState, createContext, useContext } from "react";

export const Pages = {
  tickets: "tickets",
  events: "events",
};

const PageContext = createContext(null);

const PageContextProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(Pages.tickets);

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
