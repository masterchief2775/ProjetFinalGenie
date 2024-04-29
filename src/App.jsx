import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Home from './pages/Home'

import Profile from './pages/Profil'

import Login from './pages/Login'
import NoPage from './pages/NoPage'
import Signin from './pages/Signin'
import FormulaireAvis from './pages/FormulaireAvis'
import Avis from './pages/Avis'
import Rencontre from './pages/Rencontre'
import FormulaireRendezVous from './pages/FormulaireRendezVous'

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
          <div>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/avis" element={<Avis />} />
              <Route path="/rencontre" element={<Rencontre />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/formulaireAvis" element={<FormulaireAvis />} />
              <Route path="/formulaireRendezVous" element={<FormulaireRendezVous />} />
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
