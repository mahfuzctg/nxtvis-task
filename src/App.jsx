import { Outlet, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <Router>
      {" "}
      <Navbar />
      <Outlet />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
