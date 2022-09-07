import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </Navbar>
      </div>
    </BrowserRouter>
  );
}

export default App;
