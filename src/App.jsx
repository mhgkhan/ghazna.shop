import './App.css'
import Home from './pages/Home'
import Header from './components/ui/Header'
import Menu from './components/ui/Menu'
import { BrowserRouter, Routes, Route } from 'react-router'
import Vishlist from './pages/Vishlist'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Search from './pages/Search'
import ERRpage from './pages/ERRpage'
// import { useContext, useState } from 'react'
import Login from './pages/Login'
import { Navigate } from "react-router-dom"
import { useAppContext } from './context/AuthContext'
import Register from './pages/Register'



function App() {



  const { token } = useAppContext();



  return (

    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/wishlist' element={<Vishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={token ? <Navigate to={'/profile'} /> : <Register />} />
          <Route path='/login' element={token ? <Navigate to={'/profile'} /> : <Login />} />
          <Route path='/profile' element={token ? <Profile /> : <Navigate to={'/login'} />}>
            <Route path='/products/' element={<Profile />} />
            <Route path='/settings/' element={<Profile />} />
            <Route path='/editprofile/' element={<Profile />} />
            <Route path='/notifications/' element={<Profile />} />
            <Route path='/history/' element={<Profile />} />
          </Route>
          <Route path='/products/' element={<Login />}>
            <Route path=':id' element={<Login />} />
          </Route>
          <Route path='*' element={<ERRpage />} />
        </Routes>
        <Menu />
      </BrowserRouter>
    </>
  )
}

export default App
