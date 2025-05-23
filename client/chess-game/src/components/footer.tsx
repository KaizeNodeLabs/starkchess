import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <div className="logo-container me-2">
                <div className="logo-dot"></div>
                <div className="logo-dot"></div>
                <div className="logo-dot"></div>
                <div className="logo-dot"></div>
              </div>
              <span className="fw-bold">Starkners</span>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
            <div className="d-flex justify-content-center justify-content-md-end">
              <p className="mb-0 me-3">©2023 Starkners</p>
              <a href="#" className="text-decoration-none">
                Terms & Conditions
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
