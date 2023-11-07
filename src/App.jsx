import React from 'react'
import Registrationform from './pages/registration/Registrationform'
import Navbar from './Components/Navbar'
import { month ,year} from './pages/Button'
import Modal from './pages/reactmodal/Modal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './pages/registration/LoginForm'
import HandleForm from './pages/registration/HandleForm'
import Marriage from './pages/registration/Marriage'
import Swiper from './pages/registration/Swiper'
import Receipt from './Components/Receipt'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/Registrationform' element={<Registrationform/>}/>
    <Route path='/LoginForm' element={<LoginForm/>}/>
    <Route path='/HandleForm' element={<HandleForm/>}/>
    <Route path='/' element={<Marriage/>}/>
    <Route path='/Swiper' element={<Swiper/>}/>
    {/* <Route path='/Receipt' element={<Receipt/>}/> */}
    <Route/>
    </Routes>
    </BrowserRouter>
    
     
    </div>
  )
}

export default App
