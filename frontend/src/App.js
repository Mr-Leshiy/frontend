import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Tickets from "./components/Tickets/Tickets.js";
import Row from "./components/UI/Row/Row.js";

function App() {
  return (
    <>
      <Header />
      <Row>
        <Sidebar />
        <Tickets />
      </Row>
    </>
  );
}

export default App;
