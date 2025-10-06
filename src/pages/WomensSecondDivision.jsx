import React, { useState } from 'react'
import { Users, Calendar, Star, Heart } from 'lucide-react'

const WomensSecondDivision = () => {
  const [activeTab, setActiveTab] = useState('teams')

  const teams = [
    { name: 'Kigali City Women', city: 'Kigali', founded: 2020, position: 1, points: 32, played: 10, won: 10, drawn: 2, lost: 0, goalsFor: 24, goalsAgainst: 4 },
    { name: 'Huye Women FC', city: 'Huye', founded: 2019, position: 2, points: 28, played: 10, won: 9, drawn: 1, lost: 0, goalsFor: 22, goalsAgainst: 6 },
    { name: 'Musanze Women FC', city: 'Musanze', founded: 2021, position: 3, points: 25, played: 10, won: 8, drawn: 1, lost: 1, goalsFor: 20, goalsAgainst: 8 },
    { name: 'Rubavu Women FC', city: 'Rubavu', founded: 2020, position: 4, points: 22, played: 10, won: 7, drawn: 1, lost: 2, goalsFor: 18, goalsAgainst: 10 },
    { name: 'Nyagatare Women FC', city: 'Nyagatare', founded: 2021, position: 5, points: 19, played: 10, won: 6, drawn: 1, lost: 3, goalsFor: 16, goalsAgainst: 12 },
    { name: 'Rwamagana Women FC', city: 'Rwamagana', founded: 2019, position: 6, points: 16, played: 10, won: 5, drawn: 1, lost: 4, goalsFor: 14, goalsAgainst: 14 },
    { name: 'Gicumbi Women FC', city: 'Gicumbi', founded: 2022, position: 7, points: 13, played: 10, won: 4, drawn: 1, lost: 5, goalsFor: 12, goalsAgainst: 16 },
    { name: 'Nyanza Women FC', city: 'Nyanza', founded: 2020, position: 8, points: 10, played: 10, won: 3, drawn: 1, lost: 6, goalsFor: 10, goalsAgainst: 18 }
  ]

  const topScorers = [
    { name: 'Grace Mukamana', team: 'Kigali City Women', goals: 8, assists: 2 },
    { name: 'Marie Claire Uwimana', team: 'Huye Women FC', goals: 7, assists: 3 },
    { name: 'Jeanne Nyirahabimana', team: 'Musanze Women FC', goals: 6, assists: 1 },
    { name: 'Claudine Uwamahoro', team: 'Rubavu Women FC', goals: 5, assists: 2 },
    { name: 'Vestine Mukamana', team: 'Nyagatare Women FC', goals: 4, assists: 1 }
  ]

  const recentMatches = [
    { home: 'Kigali City Women', away: 'Huye Women FC', score: '2-1', date: '2023-12-13' },
    { home: 'Musanze Women FC', away: 'Rubavu Women FC', score: '1-0', date: '2023-12-12' },
    { home: 'Nyagatare Women FC', away: 'Rwamagana Women FC', score: '2-2', date: '2023-12-11' },
    { home: 'Gicumbi Women FC', away: 'Nyanza Women FC', score: '1-1', date: '2023-12-10' },
    { home: 'Kigali City Women', away: 'Musanze Women FC', score: '3-0', date: '2023-12-09' }
  ]

  const tabs = [
    { id: 'teams', label: 'Teams & Table', icon: Users },
    { id: 'scorers', label: 'Top Scorers', icon: Star },
    { id: 'matches', label: 'Recent Matches', icon: Calendar }
  ]

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ color: '#db2777', marginBottom: '0.5rem', fontSize: '2rem' }}>
          Women's Second Division
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.125rem' }}>
          Second tier of women's football in Rwanda with 8 teams competing for promotion
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
              background: activeTab === tab.id ? '#db2777' : 'transparent',
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
                    background: team.position <= 2 ? '#fdf2f8' : team.position >= 7 ? '#fef2f2' : 'white'
                  }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold', color: team.position <= 2 ? '#db2777' : team.position >= 7 ? '#dc2626' : '#1e293b' }}>
                      {team.position}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div className="team-logo" style={{ background: '#db2777' }}>{team.name.charAt(0)}</div>
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
                    background: index < 3 ? '#db2777' : '#64748b',
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
                  <div style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#db2777' }}>{player.goals} goals</div>
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
                    background: '#db2777', 
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

export default WomensSecondDivision