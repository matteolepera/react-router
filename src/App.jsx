import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
