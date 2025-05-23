import { Container, Row, Col } from "react-bootstrap"

const SocialMedia = () => {
  return (
    <section className="social-media-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="text-center">
            <div className="social-media-container p-4">
              <h2 className="section-title mb-4">Join Our Social Media Community</h2>
              <div className="social-icons d-flex justify-content-center mt-4">
                <a href="#" className="social-icon-link me-3">
                  <div className="social-icon telegram-icon">T</div>
                </a>
                <a href="#" className="social-icon-link me-3">
                  <div className="social-icon twitter-icon">X</div>
                </a>
                <a href="#" className="social-icon-link">
                  <div className="social-icon discord-icon">D</div>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SocialMedia
