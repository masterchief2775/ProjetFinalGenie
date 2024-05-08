import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Home from './pages/Home'

import Profile from './pages/Profil'
import ModProfile from './pages/ModProfil'
import Login from './pages/Login'
import NoPage from './pages/NoPage'
import Signin from './pages/Signin'
import FormulaireAvis from './pages/FormulaireAvis'
import Avis from './pages/Avis'
import Rencontre from './pages/Rencontre'
import FormulaireRendezVous from './pages/FormulaireRendezVous'
import FormulaireRendezVousGroupe from './pages/FormulaireRendezVousGroupe'

const client = new ApolloClient({
  uri: 'http://52.242.29.209:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  
  return (
    <>

      <BrowserRouter>
        <ApolloProvider client={client}>
          <Header />
          <div className='h-[100%] bg-[#092d74]'>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/avis" element={<Avis />} />
              <Route path="/rencontre" element={<Rencontre />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/profile/me" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/formulaireRendezVous/:id" element={<FormulaireRendezVous />} />
              <Route path="/formulaireAvis/:id" element={<FormulaireAvis />} />
              <Route path="/formulaireRendezVousGroupe" element={<FormulaireRendezVousGroupe />} />
              <Route path="/modProfile" element={<ModProfile />} />


              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
          <Footer/>
        </ApolloProvider>
      </BrowserRouter>

    </>
  )
}

export default App
