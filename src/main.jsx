import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reactLogo from './react.png';
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById("root"))

root.render(
  
  <div>
    <img src={reactLogo} alt="React Logo" />
    <h1>Hello</h1>

  </div>
)
