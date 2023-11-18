import React from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return <div className="App">
    <Header />
      <div className="mainContent">
        <Outlet/>
      </div>
    <Footer />
  </div>
}

export default Layout