import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Login from "./views/Login"
import Signup from "./views/Signup"
import Profile from "./views/Profile"
{/*import Contact from "./Contact"*/}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="signup" element={ <Signup/> } />
        <Route path="profile" element={ <Profile/> } />

        <Route path="*" element={ <Home/> } />
      </Routes>
    </div>
  )
}

export default App