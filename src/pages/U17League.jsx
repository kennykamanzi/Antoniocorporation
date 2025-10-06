import React, { useState } from 'react'
import { Users, Calendar, Star, Trophy } from 'lucide-react'

const U17League = () => {
  const [activeTab, setActiveTab] = useState('teams')

  const teams = [
    { name: 'APR FC U17', city: 'Kigali', founded: 2019, position: 1, points: 42, played: 14, won: 14, drawn: 0, lost: 0, goalsFor: 32, goalsAgainst: 6 },
    { name: 'Rayon Sports U17', city: 'Kigali', founded: 2018, position: 2, points: 36, played: 14, won: 12, drawn: 0, lost: 2, goalsFor: 28, goalsAgainst: 8 },
    { name: 'Police FC U17', city: 'Kigali', founded: 2020, position: 3, points: 33, played: 14, won: 11, drawn: 0, lost: 3, goalsFor: 26, goalsAgainst: 10 },
    { name: 'AS Kigali U17', city: 'Kigali', founded: 2019, position: 4, points: 30, played: 14, won: 10, drawn: 0, lost: 4, goalsFor: 24, goalsAgainst: 12 },
    { name: 'Mukura Victory U17', city: 'Butare', founded: 2021, position: 5, points: 27, played: 14, won: 9, drawn: 0, lost: 5, goalsFor: 22, goalsAgainst: 14 },
    { name: 'Gasogi United U17', city: 'Kigali', founded: 2022, position: 6, points: 24, played: 14, won: 8, drawn: 0, lost: 6, goalsFor: 20, goalsAgainst: 16 },
    { name: 'Kiyovu Sports U17', city: 'Kigali', founded: 2020, position: 7, points: 21, played: 14, won: 7, drawn: 0, lost: 7, goalsFor: 18, goalsAgainst: 18 },
    { name: 'Marines FC U17', city: 'Kigali', founded: 2023, position: 8, points: 18, played: 14, won: 6, drawn: 0, lost: 8, goalsFor: 16, goalsAgainst: 20 },
    { name: 'Rutsiro FC U17', city: 'Rutsiro', founded: 2022, position: 9, points: 15, played: 14, won: 5, drawn: 0, lost: 9, goalsFor: 14, goalsAgainst: 22 },
    { name: 'Etoile de l\'Est U17', city: 'Rwamagana', founded: 2021, position: 10, points: 12, played: 14, won: 4, drawn: 0, lost: 10, goalsFor: 12, goalsAgainst: 24 },
    { name: 'Gorilla FC U17', city: 'Kigali', founded: 2023, position: 11, points: 9, played: 14, won: 3, drawn: 0, lost: 11, goalsFor: 10, goalsAgainst: 26 },
    { name: 'Rwamagana City U17', city: 'Rwamagana', founded: 2022, position: 12, points: 6, played: 14, won: 2, drawn: 0, lost: 12, goalsFor: 8, goalsAgainst: 28 },
    { name: 'Musanze FC U17', city: 'Musanze', founded: 2021, position: 13, points: 3, played: 14, won: 1, drawn: 0, lost: 13, goalsFor: 6, goalsAgainst: 30 },
    { name: 'Espoir FC U17', city: 'Kigali', founded: 2022, position: 14, points: 0, played: 14, won: 0, drawn: 0, lost: 14, goalsFor: 4, goalsAgainst: 32 },
    { name: 'Sunrise FC U17', city: 'Kigali', founded: 2023, position: 15, points: 0, played: 14, won: 0, drawn: 0, lost: 14, goalsFor: 2, goalsAgainst: 34 },
    { name: 'Bugesera FC U17', city: 'Bugesera', founded: 2022, position: 16, points: 0, played: 14, won: 0, drawn: 0, lost: 14, goalsFor: 0, goalsAgainst: 36 }
  ]

  const topScorers = [
    { name: 'Jean Baptiste Nkurunziza', team: 'APR FC U17', goals: 11, assists: 3 },
    { name: 'Eric Rukundo', team: 'Rayon Sports U17', goals: 10, assists: 4 },
    { name: 'Patrick Nsabimana', team: 'Police FC U17', goals: 9, assists: 2 },
    { name: 'Alexis Mugisha', team: 'AS Kigali U17', goals: 8, assists: 3 },
    { name: 'Emmanuel Nkurunziza', team: 'Mukura Victory U17', goals: 7, assists: 2 }
  ]

  const recentMatches = [
    { home: 'APR FC U17', away: 'Rayon Sports U17', score: '3-1', date: '2023-12-13' },
    { home: 'Police FC U17', away: 'AS Kigali U17', score: '2-0', date: '2023-12-12' },
    { home: 'Mukura Victory U17', away: 'Gasogi United U17', score: '2-1', date: '2023-12-11' },
    { home: 'Kiyovu Sports U17', away: 'Marines FC U17', score: '1-1', date: '2023-12-10' },
    { home: 'Rutsiro FC U17', away: 'Etoile de l\'Est U17', score: '3-0', date: '2023-12-09' }
  ]

  const tabs = [
    { id: 'teams', label: 'Teams & Table', icon: Users },
    { id: 'scorers', label: 'Top Scorers', icon: Star },
    { id: 'matches', label: 'Recent Matches', icon: Calendar }
  ]

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ color: '#0891b2', marginBottom: '0.5rem', fontSize: '2rem' }}>
          U17 League
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.125rem' }}>
          Under-17 youth development league with 16 teams competing for the championship
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
              background: activeTab === tab.id ? '#0891b2' : 'transparent',
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
                    <td style={{ padding: '1rem', fontWeight: 'bold', color: team.position <= 4 ? '#0891b2' : team.position >= 13 ? '#dc2626' : '#1e293b' }}>
                      {team.position}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div className="team-logo" style={{ background: '#0891b2' }}>{team.name.charAt(0)}</div>
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
                    background: index < 3 ? '#0891b2' : '#64748b',
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
                  <div style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#0891b2' }}>{player.goals} goals</div>
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
                    background: '#0891b2', 
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

export default U17League