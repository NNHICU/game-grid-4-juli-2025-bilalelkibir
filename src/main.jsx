import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Minecraft from './pages/minecraft.jsx'
import Domein from './pages/domein.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="minecraft" element={<Minecraft />} />
          <Route path="domein" element={<Domein />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)