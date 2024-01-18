/* eslint-disable*/
import React from "react"
import { Route, Routes } from "react-router-dom"

import "./index.css"
import { defaultWindowSize, heightBottomNavbar } from "./config/WindowSize"

import LandingPage from "./page/LandingPage"
import BottomNavbar from "./component/BottomNavbar"





function App() {
  return (
    <div className="App">
      <div
        className="containter mx-auto h-screen "
        style={{ maxWidth: defaultWindowSize}}
      >
        <div className="h-[calc(100vh-74px)]">
          <Routes>
            <Route path="/" element={<LandingPage />} />

          </Routes>
        </div>
        <div style={{ height: heightBottomNavbar }}>
          <BottomNavbar/>
        </div>
      </div>
    </div>
  )
}

export default App



