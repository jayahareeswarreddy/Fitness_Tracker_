import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { StableAuthProvider } from './contexts/StableAuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StableAuthProvider>
        <App />
      </StableAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
) 