import { Container, Navbar, Image } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" style={{height: "87px"}}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src="/logo.png" className="d-inline-block align-top" alt="React Bootstrap logo" />
        </Navbar.Brand>
        <div style={{ position: "relative" }}>
          <Image src='/notification.svg' alt="Notification" />
          <span className="notification-badge">5</span>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent;
