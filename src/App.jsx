import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import DataDeletion from './pages/DataDeletion'
import Registration from './pages/Registration'
import Agendar from './pages/Agendar'
import './App.css'

function App() {
  const location = useLocation()

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_title: document.title,
      })
    }
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/delete-data" element={<DataDeletion />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/agendar" element={<Agendar />} />
    </Routes>
  )
}

export default App
