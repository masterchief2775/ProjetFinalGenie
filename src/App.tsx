import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/Rencontre'
import Profile from './pages/Profil'
import Settings from './pages/Avis'
import Login from './pages/Login'
import NoPage from './pages/NoPage'
import Signin from './pages/Signin'
import FormulaireRendezVous from './pages/FormulaireRendezVous'
function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rencontre" element={<About />} />
            <Route path="/avis" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/formulaireRendezVous" element={<FormulaireRendezVous />} />

            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
