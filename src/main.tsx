import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ThemeMode from './ThemeMode'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeMode>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeMode>
)
