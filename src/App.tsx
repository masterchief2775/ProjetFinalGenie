import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import Profile from './pages/Profil'

import Login from './pages/Login'
import NoPage from './pages/NoPage'
import Signin from './pages/Signin'
import FormulaireAvis from './pages/FormulaireAvis'
import Avis from './pages/Avis'
import Rencontre from './pages/Rencontre'
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
            <Route path="/avis" element={<Avis />} />
            <Route path="/rencontre" element={<Rencontre />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/formulaireAvis" element={<FormulaireAvis/>}/>
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
