import { Container, Row, Col } from "react-bootstrap"

const LogoRow = () => {
  return (
    <section className="logo-row py-4">
      <Container>
        <Row className="justify-content-center">
          {[1, 2, 3, 4].map((item) => (
            <Col key={item} xs={6} md={3} className="text-center mb-3 mb-md-0">
              <div className="d-flex align-items-center justify-content-center">
                <div className="logo-container me-2">
                  <div className="logo-dot"></div>
                  <div className="logo-dot"></div>
                  <div className="logo-dot"></div>
                  <div className="logo-dot"></div>
                </div>
                <span className="fw-bold text-secondary">Starkners</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default LogoRow
