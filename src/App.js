import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Login from "./views/Login"
{/*import Contact from "./Contact"*/}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="login" element={ <Login/> } />
        {/*<Route path="contact" element={ <Contact/> } />*/}
      </Routes>
    </div>
  )
}

export default App