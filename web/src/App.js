import "./App.css"
import Navbar from "./components/Navbar"
import HomePage from "./pages/homePage"

function App() {
  return (
    <div className='App'>
      <Navbar>
        <HomePage></HomePage>
      </Navbar>
    </div>
  )
}

export default App
