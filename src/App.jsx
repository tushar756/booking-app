import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Bachlorform from './pages/Forms/Bachlorform'
import Birthdayform from './pages/Forms/Birthdayform'
import Weddingform from './pages/Forms/Weddingform'
import Youcostumfom from './pages/Forms/Youcostumfom'
import { Service } from './pages/Service'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Service/>}/>
    <Route path="/bachlorform" element ={<Bachlorform/>}/>
    <Route path="/birthdayform" element ={<Birthdayform/>}/>
    <Route path="/weddingform" element ={<Weddingform/>}/>
    <Route path="/youcostum" element ={<Youcostumfom/>}/>

    </Routes>

    </BrowserRouter>
  )
}

export default App
