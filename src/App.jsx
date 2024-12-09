import './App.css'
import Home from './pages/Home'
import Header from './components/ui/Header'
import Menu from './components/ui/Menu'
import { BrowserRouter, Routes, Route } from 'react-router'


function App() {

  return (
    <>
      <Header />
      <Home />
      <Menu />
    </>
  )
}

export default App
