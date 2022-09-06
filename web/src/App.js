import "./App.css";
import Navbar from "./components/Navbar";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Timeline />
      </Navbar>
    </div>
  );
}

export default App;
