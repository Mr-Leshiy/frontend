import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import TicketsPage from "./components/TicketsPage/TicketsPage.js";
import Row from "./components/UI/Row/Row.js";

function App() {
  return (
    <>
      <Header />
      <Row>
        <Sidebar />
        <TicketsPage />
      </Row>
    </>
  );
}

export default App;
