import { Container, Row, Col, Table, Button } from "react-bootstrap"

const leaderboardData = [
  { rank: 1, name: "Philip Pedro", played: 60, wins: 42, lost: 18, draw: 2, points: 54902 },
  { rank: 2, name: "Michael Wilson", played: 34, wins: 32, lost: 0, draw: 2, points: 45908 },
  { rank: 3, name: "John Smith", played: 29, wins: 22, lost: 5, draw: 2, points: 30872 },
  { rank: 4, name: "James Watt", played: 28, wins: 21, lost: 5, draw: 2, points: 30906 },
  { rank: 5, name: "Robert Bruce", played: 32, wins: 12, lost: 5, draw: 3, points: 30511 },
]

const Leaderboard = () => {
  return (
    <section id="leaderboard" className="leaderboard-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center">
            <h2 className="section-title mb-3">Leaderboard</h2>
            <p className="section-subtitle mb-5">View Top ranked players and see where you are ranked in the world</p>

            <div className="leaderboard-table-container">
              <Table responsive className="leaderboard-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>User Name</th>
                    <th>Played</th>
                    <th>Wins</th>
                    <th>Lost</th>
                    <th>Draw</th>
                    <th>Point</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((player) => (
                    <tr key={player.rank}>
                      <td>
                        <div className={`rank-badge rank-${player.rank}`}>{player.rank}</div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar-placeholder me-2"></div>
                          <div>
                            <div>{player.name}</div>
                            <small className="text-muted">Rank #{player.rank}</small>
                          </div>
                        </div>
                      </td>
                      <td>{player.played}</td>
                      <td>{player.wins}</td>
                      <td>{player.lost}</td>
                      <td>{player.draw}</td>
                      <td>{player.points}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <Button variant="primary" className="see-more-btn mt-4">
              See More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Leaderboard
