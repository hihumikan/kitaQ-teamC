import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";
import Timeline from "./pages/Timeline";
import OnePostPage from "./pages/OnePostPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/onePostPage" element={<OnePostPage />} />
            <Route path="/onePostPage/:id" element={<OnePostPage />} />
          </Routes>
        </Navbar>
      </div>
    </BrowserRouter>
  );
}

export default App;
