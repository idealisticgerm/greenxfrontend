import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home'
// import About from './pages/About'
import Explore from './pages/Explore'
import News from './pages/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Statistics from './pages/Statistics.jsx'
import LeafDisease from './pages/LeafDisease.jsx'
import Disease from './components/Disease.jsx'
import Footer from './components/Footer.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import { Toaster } from 'react-hot-toast'
import PrivateRoute from './components/Routes/PrivateRoute'

const App = () => {
  return (

    <Router>
      <div className=''>
        <Navbar />
        <Toaster />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/explore" element={<Explore />} />
          {/* <Route path="/news" element={<News />} /> */}
          <Route path="/statistics" element={<PrivateRoute />}>
            <Route path="" element={<Statistics />} />
          </Route>
          {/* <Route path="/statistics" element={<Statistics />} /> */}
          <Route path="localhost:8501" element={<LeafDisease />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App