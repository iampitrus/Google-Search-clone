import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ResultContextProvider from "./contexts/ResultContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>
);
