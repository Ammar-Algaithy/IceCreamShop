// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

// ✅ import your pages (not the icons)
import Home from './pages/Home'
import MenuPage from './pages/Menu'
import Flavors from './pages/Flavors'
import Locations from './pages/Locations'
import About from './pages/About'
import ContactPage from './pages/Contact'

// (optional) if you need the icons somewhere else, alias them:
// import { Home as HomeIcon, Menu as MenuIcon, Contact as ContactIcon } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/flavors" element={<Flavors />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
