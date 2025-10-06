import React from 'react'
import { Link } from 'react-router-dom'
import { Trophy, Users, Calendar, BarChart3, Newspaper, TrendingUp } from 'lucide-react'

const HomePage = () => {
  const leagues = [
    {
      title: 'Rwandan Premier League',
      description: 'Top tier of Rwandan football with 16 professional teams',
      teams: 16,
      path: '/premier-league',
      icon: Trophy,
      color: '#1e40af'
    },
    {
      title: 'Second Division',
      description: 'Second tier of Rwandan football league system',
      teams: 12,
      path: '/second-division',
      icon: Trophy,
      color: '#059669'
    },
    {
      title: 'Third Division',
      description: 'Third tier of Rwandan football league system',
      teams: 14,
      path: '/third-division',
      icon: Trophy,
      color: '#dc2626'
    },
    {
      title: "Women's First Division",
      description: 'Top tier of women\'s football in Rwanda',
      teams: 10,
      path: '/womens-first',
      icon: Users,
      color: '#7c3aed'
    },
    {
      title: "Women's Second Division",
      description: 'Second tier of women\'s football in Rwanda',
      teams: 8,
      path: '/womens-second',
      icon: Users,
      color: '#db2777'
    },
    {
      title: 'Ferwafa U20 League',
      description: 'Under-20 youth development league',
      teams: 12,
      path: '/u20-league',
      icon: Calendar,
      color: '#ea580c'
    },
    {
      title: 'U17 League',
      description: 'Under-17 youth development league',
      teams: 16,
      path: '/u17-league',
      icon: Calendar,
      color: '#0891b2'
    }
  ]

  const newsItems = [
    {
      title: 'APR FC Wins 2023 Premier League Title',
      summary: 'APR FC secured their 20th league title with a 2-1 victory over Rayon Sports in the final match of the season.',
      date: '2023-12-15'
    },
    {
      title: 'Rwanda National Team Qualifies for AFCON 2024',
      summary: 'The Amavubi secured their spot in the Africa Cup of Nations with a thrilling 3-2 victory over Senegal.',
      date: '2023-11-20'
    },
    {
      title: 'Women\'s League Expansion Announced',
      summary: 'FERWAFA announces expansion of women\'s football with new teams joining the first division.',
      date: '2023-12-01'
    },
    {
      title: 'Youth Development Program Launched',
      summary: 'New initiative to develop young talent across all age groups in Rwandan football.',
      date: '2023-11-28'
    }
  ]

  const stats = [
    { label: 'Total Teams', value: '88', icon: Trophy },
    { label: 'Active Leagues', value: '7', icon: BarChart3 },
    { label: 'Registered Players', value: '2,500+', icon: Users },
    { label: 'Matches This Season', value: '340+', icon: Calendar }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        color: 'white',
        padding: '3rem 0',
        borderRadius: '0.75rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          Rwandan Football Hub
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          Your comprehensive source for Rwandan football news, statistics, and league information across all divisions and age groups.
        </p>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <h2>Football in Rwanda</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <stat.icon size={32} style={{ color: '#1e40af', marginBottom: '0.5rem' }} />
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Leagues Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#1e40af', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
          All Leagues & Divisions
        </h2>
        <div className="league-grid">
          {leagues.map((league, index) => (
            <Link key={index} to={league.path} style={{ textDecoration: 'none' }}>
              <div className="league-card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <league.icon size={24} style={{ color: league.color, marginRight: '0.75rem' }} />
                  <h3>{league.title}</h3>
                </div>
                <p>{league.description}</p>
                <div className="teams-count">{league.teams} teams</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* News Section */}
      <div className="news-section">
        <h2>Latest News</h2>
        <div className="news-grid">
          {newsItems.map((news, index) => (
            <div key={index} className="news-item">
              <h3>{news.title}</h3>
              <p>{news.summary}</p>
              <div style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                {new Date(news.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage