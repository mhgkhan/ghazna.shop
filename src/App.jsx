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


function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/vishlist' element={<Vishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<ERRpage />} />
        </Routes>


      </BrowserRouter>
      <Menu />
    </>
  )
}

export default App
