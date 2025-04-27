import { Outlet, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <Router>
      {" "}
      <Navbar />
      <Outlet />
      <Home />
    </Router>
  );
}

export default App;
