import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import "./index.css";
import App from "./App";

Modal.setAppElement(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
