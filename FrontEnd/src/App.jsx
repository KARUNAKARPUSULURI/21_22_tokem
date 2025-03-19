import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App