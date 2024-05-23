import React, { useState } from 'react'
import PatientData from './PatientData'
import './App.css'
import Header from "./Header"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="App">
      <Header />
      <PatientData />
    </div>
  )
}

export default App
