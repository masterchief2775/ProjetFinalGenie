import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/Settings'
import Login from './pages/Login'
import NoPage from './pages/NoPage'
function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
