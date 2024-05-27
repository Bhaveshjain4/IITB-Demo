import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"
import Home from "../pages/Home"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
