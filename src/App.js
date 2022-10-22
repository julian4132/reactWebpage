import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Login from "./views/Login"
import Signup from "./views/Signup"
import Profile from "./views/Profile"
import EditProfile from "./views/editProfile"
import EmailSent from "./views/emailSent"
import EmailSentEdit from "./views/emailSentEdit"
import ErrorEmailView from "./views/errorEmailView"
import ErrorEmail2View from "./views/errorEmail2View"
import AdminView from "./views/adminView"
import BanView from "./views/BanView"
{/*import Contact from "./Contact"*/}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/NUEVE/login" element={ <Login/> } />
        <Route path="/NUEVE/signup" element={ <Signup/> } />
        <Route path="/NUEVE/profile" element={ <Profile/> } />
        <Route path="/NUEVE/editProfile" element={ <EditProfile/> } />
        <Route path="/NUEVE/emailSent" element={ <EmailSent/> } />
        <Route path="/NUEVE/emailSentEdit" element={ <EmailSentEdit/> } />
        <Route path="/NUEVE/errorEmail" element={ <ErrorEmailView/> } />
        <Route path="/NUEVE/errorEmail2" element={ <ErrorEmail2View/> } />
        <Route path="/NUEVE/admin" element={ <AdminView/> } />
        <Route path="/NUEVE/ban/:userEmail" element={ <BanView/> } />


        <Route path="/NUEVE/*" element={ <Home/> } />
      </Routes>
    </div>
  )
}

export default App