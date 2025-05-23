import { Container, Row, Col, Button } from "react-bootstrap";

const HowToPlay = () => {
  return (
    <section id="how-to-play" className="how-to-play-section py-5 bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0 text-center">
            <div className="game-pieces-image">
              <img
                src="../images/checkers-pieces.png" // Reference from public folder
                alt="Game Pieces"
                className="img-fluid rounded"
              />
            </div>
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h2 className="section-title mb-4">How to Play</h2>
            <p className="mb-4">
              Pieces can only move diagonally on the dark squares. The light squares of the board are never used.
              Regular pieces can only move diagonally forward one square.
            </p>
            <Button variant="primary" className="read-guide-btn btn-lg">
              Read Guide
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowToPlay;