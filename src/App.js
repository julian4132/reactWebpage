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
        <Route path="login" element={ <Login/> } />
        <Route path="signup" element={ <Signup/> } />
        <Route path="profile" element={ <Profile/> } />
        <Route path="editProfile" element={ <EditProfile/> } />
        <Route path="emailSent" element={ <EmailSent/> } />
        <Route path="emailSentEdit" element={ <EmailSentEdit/> } />
        <Route path="errorEmail" element={ <ErrorEmailView/> } />
        <Route path="errorEmail2" element={ <ErrorEmail2View/> } />
        <Route path="admin" element={ <AdminView/> } />
        <Route path="ban/:userEmail" element={ <BanView/> } />


        <Route path="*" element={ <Home/> } />
      </Routes>
    </div>
  )
}

export default App