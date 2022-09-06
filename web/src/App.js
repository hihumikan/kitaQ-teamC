import "./App.css";
import Navbar from "./components/Navbar";

function App({ children }) {
  return (
    <div className="App">
      <Navbar>{children}</Navbar>
    </div>
  );
}

export default App;
