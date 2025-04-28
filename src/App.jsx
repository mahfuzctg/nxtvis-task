import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/home/HomePage";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <Router>
      {" "}
      <Navbar />
      <HomePage />
      <Footer />
    </Router>
  );
}

export default App;
