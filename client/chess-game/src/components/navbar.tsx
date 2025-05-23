import { Container, Nav, Navbar as BootstrapNavbar, Button } from "react-bootstrap"

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" variant="dark" className="py-3">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="d-flex align-items-center">
          <div className="logo-container me-2">
            <div className="logo-dot"></div>
            <div className="logo-dot"></div>
            <div className="logo-dot"></div>
            <div className="logo-dot"></div>
          </div>
          <span className="fw-bold">Starkners</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="mx-3">
              Home
            </Nav.Link>
            <Nav.Link href="#leaderboard" className="mx-3">
              Leaderboard
            </Nav.Link>
            <Nav.Link href="#how-to-play" className="mx-3">
              How to Play
            </Nav.Link>
          </Nav>
          <Button variant="primary" className="connect-wallet-btn">
            Connect Wallet
          </Button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
