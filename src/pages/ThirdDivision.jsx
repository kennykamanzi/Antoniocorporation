import React, { useState } from 'react'
import { Trophy, Users, Calendar, Star } from 'lucide-react'

const ThirdDivision = () => {
  const [activeTab, setActiveTab] = useState('teams')

  const teams = [
    { name: 'Gisagara FC', city: 'Gisagara', founded: 2016, position: 1, points: 40, played: 13, won: 13, drawn: 1, lost: 0, goalsFor: 26, goalsAgainst: 4 },
    { name: 'Kamonyi FC', city: 'Kamonyi', founded: 2014, position: 2, points: 36, played: 13, won: 11, drawn: 3, lost: 0, goalsFor: 24, goalsAgainst: 6 },
    { name: 'Rusizi FC', city: 'Rusizi', founded: 2015, position: 3, points: 33, played: 13, won: 10, drawn: 3, lost: 0, goalsFor: 22, goalsAgainst: 8 },
    { name: 'Ngoma FC', city: 'Ngoma', founded: 2017, position: 4, points: 30, played: 13, won: 9, drawn: 3, lost: 1, goalsFor: 20, goalsAgainst: 10 },
    { name: 'Kayonza FC', city: 'Kayonza', founded: 2013, position: 5, points: 27, played: 13, won: 8, drawn: 3, lost: 2, goalsFor: 18, goalsAgainst: 12 },
    { name: 'Gatsibo FC', city: 'Gatsibo', founded: 2018, position: 6, points: 24, played: 13, won: 7, drawn: 3, lost: 3, goalsFor: 16, goalsAgainst: 14 },
    { name: 'Rwamagana FC', city: 'Rwamagana', founded: 2012, position: 7, points: 22, played: 13, won: 6, drawn: 4, lost: 3, goalsFor: 15, goalsAgainst: 13 },
    { name: 'Kicukiro FC', city: 'Kicukiro', founded: 2019, position: 8, points: 20, played: 13, won: 6, drawn: 2, lost: 5, goalsFor: 14, goalsAgainst: 16 },
    { name: 'Nyarugenge FC', city: 'Nyarugenge', founded: 2016, position: 9, points: 18, played: 13, won: 5, drawn: 3, lost: 5, goalsFor: 13, goalsAgainst: 17 },
    { name: 'Gasabo FC', city: 'Gasabo', founded: 2015, position: 10, points: 16, played: 13, won: 4, drawn: 4, lost: 5, goalsFor: 12, goalsAgainst: 18 },
    { name: 'Muhanga FC', city: 'Muhanga', founded: 2017, position: 11, points: 14, played: 13, won: 4, drawn: 2, lost: 7, goalsFor: 11, goalsAgainst: 20 },
    { name: 'Rulindo FC', city: 'Rulindo', founded: 2014, position: 12, points: 12, played: 13, won: 3, drawn: 3, lost: 7, goalsFor: 10, goalsAgainst: 22 },
    { name: 'Gakenke FC', city: 'Gakenke', founded: 2018, position: 13, points: 10, played: 13, won: 2, drawn: 4, lost: 7, goalsFor: 9, goalsAgainst: 24 },
    { name: 'Nyabihu FC', city: 'Nyabihu', founded: 2016, position: 14, points: 8, played: 13, won: 2, drawn: 2, lost: 9, goalsFor: 8, goalsAgainst: 26 }
  ]

  const topScorers = [
    { name: 'Jean Paul Nkurunziza', team: 'Gisagara FC', goals: 6, assists: 2 },
    { name: 'Eric Rukundo', team: 'Kamonyi FC', goals: 5, assists: 3 },
    { name: 'Patrick Nsabimana', team: 'Rusizi FC', goals: 5, assists: 1 },
    { name: 'Alexis Mugisha', team: 'Ngoma FC', goals: 4, assists: 2 },
    { name: 'Emmanuel Nkurunziza', team: 'Kayonza FC', goals: 4, assists: 1 }
  ]

  const recentMatches = [
    { home: 'Gisagara FC', away: 'Kamonyi FC', score: '1-0', date: '2023-12-13' },
    { home: 'Rusizi FC', away: 'Ngoma FC', score: '2-1', date: '2023-12-12' },
    { home: 'Kayonza FC', away: 'Gatsibo FC', score: '1-1', date: '2023-12-11' },
    { home: 'Rwamagana FC', away: 'Kicukiro FC', score: '2-0', date: '2023-12-10' },
    { home: 'Nyarugenge FC', away: 'Gasabo FC', score: '1-1', date: '2023-12-09' }
  ]

  const tabs = [
    { id: 'teams', label: 'Teams & Table', icon: Users },
    { id: 'scorers', label: 'Top Scorers', icon: Star },
    { id: 'matches', label: 'Recent Matches', icon: Calendar }
  ]

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ color: '#dc2626', marginBottom: '0.5rem', fontSize: '2rem' }}>
          Third Division
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.125rem' }}>
          Third tier of Rwandan football league system with 14 teams competing for promotion
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
              background: activeTab === tab.id ? '#dc2626' : 'transparent',
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
                    background: team.position <= 2 ? '#fef2f2' : team.position >= 13 ? '#fef2f2' : 'white'
                  }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold', color: team.position <= 2 ? '#dc2626' : team.position >= 13 ? '#dc2626' : '#1e293b' }}>
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
                    background: index < 3 ? '#dc2626' : '#64748b',
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
                  <div style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#dc2626' }}>{player.goals} goals</div>
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
                    background: '#dc2626', 
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

export default ThirdDivision