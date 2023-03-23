import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Stock from "./pages/Stock";
import Ticker from "./pages/Ticker";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stocks" element={<Stock />} />
        <Route path="stocks/:symbol" element={<Ticker />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
