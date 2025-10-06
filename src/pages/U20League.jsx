import React, { useState } from 'react'
import { Users, Calendar, Star, Trophy } from 'lucide-react'

const U20League = () => {
  const [activeTab, setActiveTab] = useState('teams')

  const teams = [
    { name: 'APR FC U20', city: 'Kigali', founded: 2018, position: 1, points: 39, played: 13, won: 13, drawn: 0, lost: 0, goalsFor: 30, goalsAgainst: 5 },
    { name: 'Rayon Sports U20', city: 'Kigali', founded: 2017, position: 2, points: 33, played: 13, won: 11, drawn: 0, lost: 2, goalsFor: 26, goalsAgainst: 8 },
    { name: 'Police FC U20', city: 'Kigali', founded: 2019, position: 3, points: 30, played: 13, won: 10, drawn: 0, lost: 3, goalsFor: 24, goalsAgainst: 10 },
    { name: 'AS Kigali U20', city: 'Kigali', founded: 2018, position: 4, points: 27, played: 13, won: 9, drawn: 0, lost: 4, goalsFor: 22, goalsAgainst: 12 },
    { name: 'Mukura Victory U20', city: 'Butare', founded: 2020, position: 5, points: 24, played: 13, won: 8, drawn: 0, lost: 5, goalsFor: 20, goalsAgainst: 14 },
    { name: 'Gasogi United U20', city: 'Kigali', founded: 2021, position: 6, points: 21, played: 13, won: 7, drawn: 0, lost: 6, goalsFor: 18, goalsAgainst: 16 },
    { name: 'Kiyovu Sports U20', city: 'Kigali', founded: 2019, position: 7, points: 18, played: 13, won: 6, drawn: 0, lost: 7, goalsFor: 16, goalsAgainst: 18 },
    { name: 'Marines FC U20', city: 'Kigali', founded: 2022, position: 8, points: 15, played: 13, won: 5, drawn: 0, lost: 8, goalsFor: 14, goalsAgainst: 20 },
    { name: 'Rutsiro FC U20', city: 'Rutsiro', founded: 2021, position: 9, points: 12, played: 13, won: 4, drawn: 0, lost: 9, goalsFor: 12, goalsAgainst: 22 },
    { name: 'Etoile de l\'Est U20', city: 'Rwamagana', founded: 2020, position: 10, points: 9, played: 13, won: 3, drawn: 0, lost: 10, goalsFor: 10, goalsAgainst: 24 },
    { name: 'Gorilla FC U20', city: 'Kigali', founded: 2022, position: 11, points: 6, played: 13, won: 2, drawn: 0, lost: 11, goalsFor: 8, goalsAgainst: 26 },
    { name: 'Rwamagana City U20', city: 'Rwamagana', founded: 2021, position: 12, points: 3, played: 13, won: 1, drawn: 0, lost: 12, goalsFor: 6, goalsAgainst: 28 }
  ]

  const topScorers = [
    { name: 'Jean Claude Nkurunziza', team: 'APR FC U20', goals: 9, assists: 2 },
    { name: 'Eric Rukundo', team: 'Rayon Sports U20', goals: 8, assists: 3 },
    { name: 'Patrick Nsabimana', team: 'Police FC U20', goals: 7, assists: 1 },
    { name: 'Alexis Mugisha', team: 'AS Kigali U20', goals: 6, assists: 2 },
    { name: 'Emmanuel Nkurunziza', team: 'Mukura Victory U20', goals: 5, assists: 1 }
  ]

  const recentMatches = [
    { home: 'APR FC U20', away: 'Rayon Sports U20', score: '2-1', date: '2023-12-13' },
    { home: 'Police FC U20', away: 'AS Kigali U20', score: '1-0', date: '2023-12-12' },
    { home: 'Mukura Victory U20', away: 'Gasogi United U20', score: '2-1', date: '2023-12-11' },
    { home: 'Kiyovu Sports U20', away: 'Marines FC U20', score: '1-1', date: '2023-12-10' },
    { home: 'Rutsiro FC U20', away: 'Etoile de l\'Est U20', score: '3-0', date: '2023-12-09' }
  ]

  const tabs = [
    { id: 'teams', label: 'Teams & Table', icon: Users },
    { id: 'scorers', label: 'Top Scorers', icon: Star },
    { id: 'matches', label: 'Recent Matches', icon: Calendar }
  ]

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ color: '#ea580c', marginBottom: '0.5rem', fontSize: '2rem' }}>
          Ferwafa U20 League
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.125rem' }}>
          Under-20 youth development league with 12 teams competing for the championship
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
              background: activeTab === tab.id ? '#ea580c' : 'transparent',
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
                    background: team.position <= 3 ? '#fff7ed' : team.position >= 10 ? '#fef2f2' : 'white'
                  }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold', color: team.position <= 3 ? '#ea580c' : team.position >= 10 ? '#dc2626' : '#1e293b' }}>
                      {team.position}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div className="team-logo" style={{ background: '#ea580c' }}>{team.name.charAt(0)}</div>
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
                    background: index < 3 ? '#ea580c' : '#64748b',
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
                  <div style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#ea580c' }}>{player.goals} goals</div>
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
                    background: '#ea580c', 
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

export default U20League