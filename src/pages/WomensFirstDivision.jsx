import React, { useState } from 'react'
import { Users, Calendar, Star, Heart } from 'lucide-react'

const WomensFirstDivision = () => {
  const [activeTab, setActiveTab] = useState('teams')

  const teams = [
    { name: 'AS Kigali Women', city: 'Kigali', founded: 2015, position: 1, points: 36, played: 12, won: 12, drawn: 0, lost: 0, goalsFor: 28, goalsAgainst: 3 },
    { name: 'APR FC Women', city: 'Kigali', founded: 2018, position: 2, points: 30, played: 12, won: 10, drawn: 0, lost: 2, goalsFor: 24, goalsAgainst: 6 },
    { name: 'Rayon Sports Women', city: 'Kigali', founded: 2016, position: 3, points: 27, played: 12, won: 9, drawn: 0, lost: 3, goalsFor: 22, goalsAgainst: 8 },
    { name: 'Police FC Women', city: 'Kigali', founded: 2017, position: 4, points: 24, played: 12, won: 8, drawn: 0, lost: 4, goalsFor: 20, goalsAgainst: 10 },
    { name: 'Mukura Victory Women', city: 'Butare', founded: 2019, position: 5, points: 21, played: 12, won: 7, drawn: 0, lost: 5, goalsFor: 18, goalsAgainst: 12 },
    { name: 'Gasogi United Women', city: 'Kigali', founded: 2020, position: 6, points: 18, played: 12, won: 6, drawn: 0, lost: 6, goalsFor: 16, goalsAgainst: 14 },
    { name: 'Kiyovu Sports Women', city: 'Kigali', founded: 2018, position: 7, points: 15, played: 12, won: 5, drawn: 0, lost: 7, goalsFor: 14, goalsAgainst: 16 },
    { name: 'Marines FC Women', city: 'Kigali', founded: 2021, position: 8, points: 12, played: 12, won: 4, drawn: 0, lost: 8, goalsFor: 12, goalsAgainst: 18 },
    { name: 'Rutsiro FC Women', city: 'Rutsiro', founded: 2020, position: 9, points: 9, played: 12, won: 3, drawn: 0, lost: 9, goalsFor: 10, goalsAgainst: 22 },
    { name: 'Etoile de l\'Est Women', city: 'Rwamagana', founded: 2019, position: 10, points: 6, played: 12, won: 2, drawn: 0, lost: 10, goalsFor: 8, goalsAgainst: 24 }
  ]

  const topScorers = [
    { name: 'Grace Uwimana', team: 'AS Kigali Women', goals: 10, assists: 3 },
    { name: 'Marie Claire Uwamahoro', team: 'APR FC Women', goals: 8, assists: 4 },
    { name: 'Jeanne Nyirahabimana', team: 'Rayon Sports Women', goals: 7, assists: 2 },
    { name: 'Claudine Uwimana', team: 'Police FC Women', goals: 6, assists: 3 },
    { name: 'Vestine Mukamana', team: 'Mukura Victory Women', goals: 5, assists: 2 }
  ]

  const recentMatches = [
    { home: 'AS Kigali Women', away: 'APR FC Women', score: '2-0', date: '2023-12-14' },
    { home: 'Rayon Sports Women', away: 'Police FC Women', score: '1-0', date: '2023-12-13' },
    { home: 'Mukura Victory Women', away: 'Gasogi United Women', score: '2-1', date: '2023-12-12' },
    { home: 'Kiyovu Sports Women', away: 'Marines FC Women', score: '1-1', date: '2023-12-11' },
    { home: 'Rutsiro FC Women', away: 'Etoile de l\'Est Women', score: '3-0', date: '2023-12-10' }
  ]

  const tabs = [
    { id: 'teams', label: 'Teams & Table', icon: Users },
    { id: 'scorers', label: 'Top Scorers', icon: Star },
    { id: 'matches', label: 'Recent Matches', icon: Calendar }
  ]

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ color: '#7c3aed', marginBottom: '0.5rem', fontSize: '2rem' }}>
          Women's First Division
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.125rem' }}>
          Top tier of women's football in Rwanda with 10 teams competing for the championship
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
              background: activeTab === tab.id ? '#7c3aed' : 'transparent',
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
                    background: team.position <= 3 ? '#faf5ff' : team.position >= 8 ? '#fef2f2' : 'white'
                  }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold', color: team.position <= 3 ? '#7c3aed' : team.position >= 8 ? '#dc2626' : '#1e293b' }}>
                      {team.position}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div className="team-logo" style={{ background: '#7c3aed' }}>{team.name.charAt(0)}</div>
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
                    background: index < 3 ? '#7c3aed' : '#64748b',
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
                  <div style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#7c3aed' }}>{player.goals} goals</div>
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
                    background: '#7c3aed', 
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

export default WomensFirstDivision