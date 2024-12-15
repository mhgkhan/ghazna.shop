import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AuthContext.jsx'
import { WishlistContextProvider } from './context/VishlistContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <WishlistContextProvider>
      <App />
      </WishlistContextProvider>
    </AppContextProvider>
  </StrictMode>,
)
