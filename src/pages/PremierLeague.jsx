import React, { useState } from 'react'
import { Trophy, Users, Calendar, BarChart3, TrendingUp, Star } from 'lucide-react'

const PremierLeague = () => {
  const [activeTab, setActiveTab] = useState('teams')

  const teams = [
    { name: 'APR FC', city: 'Kigali', founded: 1993, colors: 'Blue & White', position: 1, points: 45, played: 15, won: 14, drawn: 3, lost: 0, goalsFor: 32, goalsAgainst: 8 },
    { name: 'Rayon Sports', city: 'Kigali', founded: 1968, colors: 'Blue & White', position: 2, points: 38, played: 15, won: 12, drawn: 2, lost: 1, goalsFor: 28, goalsAgainst: 12 },
    { name: 'Police FC', city: 'Kigali', founded: 2000, colors: 'Blue & Yellow', position: 3, points: 35, played: 15, won: 11, drawn: 2, lost: 2, goalsFor: 25, goalsAgainst: 10 },
    { name: 'AS Kigali', city: 'Kigali', founded: 1987, colors: 'Green & White', position: 4, points: 32, played: 15, won: 10, drawn: 2, lost: 3, goalsFor: 22, goalsAgainst: 15 },
    { name: 'Mukura Victory Sports', city: 'Butare', founded: 1963, colors: 'Red & White', position: 5, points: 29, played: 15, won: 9, drawn: 2, lost: 4, goalsFor: 20, goalsAgainst: 18 },
    { name: 'Gasogi United', city: 'Kigali', founded: 2010, colors: 'Orange & Black', position: 6, points: 26, played: 15, won: 8, drawn: 2, lost: 5, goalsFor: 18, goalsAgainst: 16 },
    { name: 'Kiyovu Sports', city: 'Kigali', founded: 1963, colors: 'Green & White', position: 7, points: 24, played: 15, won: 7, drawn: 3, lost: 5, goalsFor: 19, goalsAgainst: 17 },
    { name: 'Marines FC', city: 'Kigali', founded: 2015, colors: 'Navy & White', position: 8, points: 22, played: 15, won: 6, drawn: 4, lost: 5, goalsFor: 16, goalsAgainst: 14 },
    { name: 'Rutsiro FC', city: 'Rutsiro', founded: 2012, colors: 'Purple & White', position: 9, points: 20, played: 15, won: 6, drawn: 2, lost: 7, goalsFor: 15, goalsAgainst: 20 },
    { name: 'Etoile de l\'Est', city: 'Rwamagana', founded: 2005, colors: 'Red & Yellow', position: 10, points: 18, played: 15, won: 5, drawn: 3, lost: 7, goalsFor: 14, goalsAgainst: 19 },
    { name: 'Gorilla FC', city: 'Kigali', founded: 2018, colors: 'Black & White', position: 11, points: 16, played: 15, won: 4, drawn: 4, lost: 7, goalsFor: 12, goalsAgainst: 18 },
    { name: 'Rwamagana City', city: 'Rwamagana', founded: 2016, colors: 'Blue & Red', position: 12, points: 14, played: 15, won: 4, drawn: 2, lost: 9, goalsFor: 11, goalsAgainst: 22 },
    { name: 'Musanze FC', city: 'Musanze', founded: 2014, colors: 'Green & Yellow', position: 13, points: 12, played: 15, won: 3, drawn: 3, lost: 9, goalsFor: 10, goalsAgainst: 24 },
    { name: 'Espoir FC', city: 'Kigali', founded: 2011, colors: 'White & Blue', position: 14, points: 10, played: 15, won: 2, drawn: 4, lost: 9, goalsFor: 8, goalsAgainst: 25 },
    { name: 'Sunrise FC', city: 'Kigali', founded: 2017, colors: 'Yellow & Black', position: 15, points: 8, played: 15, won: 2, drawn: 2, lost: 11, goalsFor: 7, goalsAgainst: 28 },
    { name: 'Bugesera FC', city: 'Bugesera', founded: 2013, colors: 'Red & White', position: 16, points: 5, played: 15, won: 1, drawn: 2, lost: 12, goalsFor: 6, goalsAgainst: 30 }
  ]

  const topScorers = [
    { name: 'Jean Claude Ndayishimiye', team: 'APR FC', goals: 12, assists: 4 },
    { name: 'Jacques Tuyisenge', team: 'Rayon Sports', goals: 10, assists: 6 },
    { name: 'Danny Usengimana', team: 'Police FC', goals: 9, assists: 3 },
    { name: 'Emmanuel Imanishimwe', team: 'AS Kigali', goals: 8, assists: 5 },
    { name: 'Kevin Muhire', team: 'Mukura Victory Sports', goals: 7, assists: 4 }
  ]

  const recentMatches = [
    { home: 'APR FC', away: 'Rayon Sports', score: '2-1', date: '2023-12-15' },
    { home: 'Police FC', away: 'AS Kigali', score: '1-0', date: '2023-12-14' },
    { home: 'Mukura Victory Sports', away: 'Gasogi United', score: '2-2', date: '2023-12-13' },
    { home: 'Kiyovu Sports', away: 'Marines FC', score: '1-1', date: '2023-12-12' },
    { home: 'Rutsiro FC', away: 'Etoile de l\'Est', score: '3-1', date: '2023-12-11' }
  ]

  const tabs = [
    { id: 'teams', label: 'Teams & Table', icon: Users },
    { id: 'scorers', label: 'Top Scorers', icon: Star },
    { id: 'matches', label: 'Recent Matches', icon: Calendar }
  ]

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ color: '#1e40af', marginBottom: '0.5rem', fontSize: '2rem' }}>
          Rwandan Premier League
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.125rem' }}>
          Top tier of Rwandan football with 16 professional teams competing for the championship
        </p>
      </div>

      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '2rem',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '0.5rem'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              border: 'none',
              background: activeTab === tab.id ? '#1e40af' : 'transparent',
              color: activeTab === tab.id ? 'white' : '#64748b',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Teams & Table Tab */}
      {activeTab === 'teams' && (
        <div className="team-list">
          <h2>League Table</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              background: 'white',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Pos</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Team</th>
                  <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>P</th>
                  <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>W</th>
                  <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>D</th>
                  <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>L</th>
                  <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>GF</th>
                  <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>GA</th>
                  <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>GD</th>
                  <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>Pts</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team, index) => (
                  <tr key={index} style={{ 
                    borderBottom: '1px solid #f1f5f9',
                    background: team.position <= 4 ? '#f0f9ff' : team.position >= 13 ? '#fef2f2' : 'white'
                  }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold', color: team.position <= 4 ? '#1e40af' : team.position >= 13 ? '#dc2626' : '#1e293b' }}>
                      {team.position}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div className="team-logo">{team.name.charAt(0)}</div>
                        <div>
                          <div style={{ fontWeight: '500' }}>{team.name}</div>
                          <div style={{ fontSize: '0.875rem', color: '#64748b' }}>{team.city}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>{team.played}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>{team.won}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>{team.drawn}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>{team.lost}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>{team.goalsFor}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>{team.goalsAgainst}</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: team.goalsFor - team.goalsAgainst > 0 ? '#059669' : team.goalsFor - team.goalsAgainst < 0 ? '#dc2626' : '#64748b' }}>
                      {team.goalsFor - team.goalsAgainst > 0 ? '+' : ''}{team.goalsFor - team.goalsAgainst}
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Top Scorers Tab */}
      {activeTab === 'scorers' && (
        <div className="team-list">
          <h2>Top Scorers</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {topScorers.map((player, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem',
                background: '#f8fafc',
                borderRadius: '0.5rem',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: index < 3 ? '#1e40af' : '#64748b',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.125rem'
                  }}>
                    {index + 1}
                  </div>
                  <div>
                    <div style={{ fontWeight: '500', fontSize: '1.125rem' }}>{player.name}</div>
                    <div style={{ color: '#64748b', fontSize: '0.875rem' }}>{player.team}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#1e40af' }}>{player.goals} goals</div>
                  <div style={{ color: '#64748b', fontSize: '0.875rem' }}>{player.assists} assists</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Matches Tab */}
      {activeTab === 'matches' && (
        <div className="team-list">
          <h2>Recent Matches</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentMatches.map((match, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem',
                background: '#f8fafc',
                borderRadius: '0.5rem',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontWeight: '500' }}>{match.home}</div>
                  <div style={{ 
                    background: '#1e40af', 
                    color: 'white', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '0.375rem',
                    fontWeight: 'bold'
                  }}>
                    {match.score}
                  </div>
                  <div style={{ fontWeight: '500' }}>{match.away}</div>
                </div>
                <div style={{ color: '#64748b', fontSize: '0.875rem' }}>
                  {new Date(match.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PremierLeague