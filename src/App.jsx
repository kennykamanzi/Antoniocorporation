import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Home, Trophy, Users, Calendar, BarChart3, Newspaper } from 'lucide-react'
import HomePage from './pages/HomePage'
import PremierLeague from './pages/PremierLeague'
import SecondDivision from './pages/SecondDivision'
import ThirdDivision from './pages/ThirdDivision'
import WomensFirstDivision from './pages/WomensFirstDivision'
import WomensSecondDivision from './pages/WomensSecondDivision'
import U20League from './pages/U20League'
import U17League from './pages/U17League'

function Navigation() {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/premier-league', label: 'Premier League', icon: Trophy },
    { path: '/second-division', label: 'Second Division', icon: Trophy },
    { path: '/third-division', label: 'Third Division', icon: Trophy },
    { path: '/womens-first', label: "Women's First", icon: Users },
    { path: '/womens-second', label: "Women's Second", icon: Users },
    { path: '/u20-league', label: 'U20 League', icon: Calendar },
    { path: '/u17-league', label: 'U17 League', icon: Calendar },
  ]

  return (
    <nav className="nav">
      {navItems.map(({ path, label, icon: Icon }) => (
        <Link
          key={path}
          to={path}
          className={location.pathname === path ? 'active' : ''}
        >
          <Icon size={16} style={{ marginRight: '0.5rem' }} />
          {label}
        </Link>
      ))}
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <Trophy size={24} />
                Rwandan Football Hub
              </div>
              <Navigation />
            </div>
          </div>
        </header>
        
        <main className="main">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/premier-league" element={<PremierLeague />} />
              <Route path="/second-division" element={<SecondDivision />} />
              <Route path="/third-division" element={<ThirdDivision />} />
              <Route path="/womens-first" element={<WomensFirstDivision />} />
              <Route path="/womens-second" element={<WomensSecondDivision />} />
              <Route path="/u20-league" element={<U20League />} />
              <Route path="/u17-league" element={<U17League />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App