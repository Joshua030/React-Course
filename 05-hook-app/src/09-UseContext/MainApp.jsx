import { Link, Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./Context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage.jsx"
import { NavBar } from "./NavBar"

export const MainApp = () => {
  return (
      <UserProvider>
   <h1>MainApp</h1>
   <NavBar/>
   <hr />

   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="about" element={<AboutPage/>}/>
    <Route path="login" element={<LoginPage/>}/>
    {/* <Route path="/*" element={<LoginPage/>}/> */}
    <Route path="/*" element={<Navigate to="/about" />} />

   </Routes>
   </UserProvider>
  )
}
