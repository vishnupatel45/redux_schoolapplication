import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/login/login'
import Addstudent from './component/addstudent/addstudent'
import Dashpage from './component/dashbord/dashbord'
import NotFound from './component/notfound/notfound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/update' element={<Addstudent/>} />
          <Route path='/profile' element={<Dashpage/>} />
          <Route path='/notfound' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
