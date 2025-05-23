import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section className="hero-section py-5 bg-dark text-white text-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-1 fw-bold">
              YOUR MOVE, <span className="text-danger">YOUR GAME.</span>
            </h1>
            <p className="lead mt-4">Experience chess like never before by Starkners</p>
            <Button variant="primary" className="play-now-btn mt-4 btn-lg">
              Play Now
            </Button>
          </Col>
          <Col md={6} className="text-center mt-5 mt-md-0">
            <div className="checkerboard-container">
              <img
                src="../images/checkers-board.png" // Reference the image from the public folder
                alt="Checkerboard"
                className="img-fluid rounded"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;