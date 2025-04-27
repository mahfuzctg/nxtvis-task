import { Outlet, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <Router>
      {" "}
      <Navbar />
      <Outlet />
    </Router>
  );
}

export default App;
