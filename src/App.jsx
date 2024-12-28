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
import CheckEmailVerification from './pages/CheckEmailVerification'
import Products from './pages/Products/Products'
import Product from './pages/Products/Product'



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
          <Route path='/profile' element={token ? <Profile /> : <Navigate to={'/login'} />} />
          <Route path='/checkemailverification' element={token ? <CheckEmailVerification /> : <Navigate to={'/login'} />} />
          <Route path='/products/' element={<Products />} />
          <Route path='/product/' element={<Product />}>
            <Route path=':id' element={<Product />} />
          </Route>
          <Route path='*' element={<ERRpage />} />
        </Routes>
        <Menu />
      </BrowserRouter>
    </>
  )
}

export default App
