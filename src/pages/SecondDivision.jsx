import React, { useState } from 'react'
import { Trophy, Users, Calendar, Star } from 'lucide-react'

const SecondDivision = () => {
  const [activeTab, setActiveTab] = useState('teams')

  const teams = [
    { name: 'Rwanda United', city: 'Kigali', founded: 2015, position: 1, points: 42, played: 14, won: 13, drawn: 3, lost: 0, goalsFor: 28, goalsAgainst: 6 },
    { name: 'Kirehe FC', city: 'Kirehe', founded: 2012, position: 2, points: 38, played: 14, won: 12, drawn: 2, lost: 0, goalsFor: 25, goalsAgainst: 8 },
    { name: 'Huye FC', city: 'Huye', founded: 2010, position: 3, points: 35, played: 14, won: 11, drawn: 2, lost: 1, goalsFor: 22, goalsAgainst: 9 },
    { name: 'Nyagatare FC', city: 'Nyagatare', founded: 2014, position: 4, points: 32, played: 14, won: 10, drawn: 2, lost: 2, goalsFor: 20, goalsAgainst: 12 },
    { name: 'Rubavu FC', city: 'Rubavu', founded: 2013, position: 5, points: 29, played: 14, won: 9, drawn: 2, lost: 3, goalsFor: 18, goalsAgainst: 14 },
    { name: 'Karongi FC', city: 'Karongi', founded: 2016, position: 6, points: 26, played: 14, won: 8, drawn: 2, lost: 4, goalsFor: 16, goalsAgainst: 15 },
    { name: 'Nyanza FC', city: 'Nyanza', founded: 2011, position: 7, points: 24, played: 14, won: 7, drawn: 3, lost: 4, goalsFor: 17, goalsAgainst: 16 },
    { name: 'Ruhango FC', city: 'Ruhango', founded: 2017, position: 8, points: 22, played: 14, won: 6, drawn: 4, lost: 4, goalsFor: 15, goalsAgainst: 13 },
    { name: 'Gicumbi FC', city: 'Gicumbi', founded: 2015, position: 9, points: 20, played: 14, won: 6, drawn: 2, lost: 6, goalsFor: 14, goalsAgainst: 18 },
    { name: 'Nyamasheke FC', city: 'Nyamasheke', founded: 2018, position: 10, points: 18, played: 14, won: 5, drawn: 3, lost: 6, goalsFor: 13, goalsAgainst: 19 },
    { name: 'Nyaruguru FC', city: 'Nyaruguru', founded: 2014, position: 11, points: 16, played: 14, won: 4, drawn: 4, lost: 6, goalsFor: 12, goalsAgainst: 20 },
    { name: 'Burera FC', city: 'Burera', founded: 2019, position: 12, points: 14, played: 14, won: 4, drawn: 2, lost: 8, goalsFor: 11, goalsAgainst: 22 }
  ]

  const topScorers = [
    { name: 'Jean Baptiste Mugisha', team: 'Rwanda United', goals: 8, assists: 3 },
    { name: 'Eric Nkurunziza', team: 'Kirehe FC', goals: 7, assists: 4 },
    { name: 'Patrick Niyonshuti', team: 'Huye FC', goals: 6, assists: 2 },
    { name: 'Alexis Rukundo', team: 'Nyagatare FC', goals: 6, assists: 1 },
    { name: 'Emmanuel Nsabimana', team: 'Rubavu FC', goals: 5, assists: 3 }
  ]

  const recentMatches = [
    { home: 'Rwanda United', away: 'Kirehe FC', score: '2-0', date: '2023-12-14' },
    { home: 'Huye FC', away: 'Nyagatare FC', score: '1-1', date: '2023-12-13' },
    { home: 'Rubavu FC', away: 'Karongi FC', score: '3-1', date: '2023-12-12' },
    { home: 'Nyanza FC', away: 'Ruhango FC', score: '2-2', date: '2023-12-11' },
    { home: 'Gicumbi FC', away: 'Nyamasheke FC', score: '1-0', date: '2023-12-10' }
  ]

  const tabs = [
    { id: 'teams', label: 'Teams & Table', icon: Users },
    { id: 'scorers', label: 'Top Scorers', icon: Star },
    { id: 'matches', label: 'Recent Matches', icon: Calendar }
  ]

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ color: '#059669', marginBottom: '0.5rem', fontSize: '2rem' }}>
          Second Division
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.125rem' }}>
          Second tier of Rwandan football league system with 12 teams competing for promotion
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
              background: activeTab === tab.id ? '#059669' : 'transparent',
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
                    background: team.position <= 2 ? '#f0fdf4' : team.position >= 11 ? '#fef2f2' : 'white'
                  }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold', color: team.position <= 2 ? '#059669' : team.position >= 11 ? '#dc2626' : '#1e293b' }}>
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
                    background: index < 3 ? '#059669' : '#64748b',
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
                  <div style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#059669' }}>{player.goals} goals</div>
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
                    background: '#059669', 
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

export default SecondDivision