import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import sbrpLogo from "../assets/img/south-bay-rehab-performance-logo.png"
import { FaGoogle, FaInstagram, FaYelp } from "react-icons/fa"

const CustomNav = () => {
  return (
    <Navbar expand="lg" id="navbar" className="fixed-top">
      <Container className="navbar-container justify-content-between align-items-center">
        <Navbar.Brand href="#" className="brand-img-container">
            <img src={sbrpLogo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#clinic-information">Clinic Information</Nav.Link>
            <Nav.Link href="#services-scheduler">Services & Scheduler</Nav.Link>
            <Nav.Link href="#videos">Videos</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
          <ul className="d-flex my-auto">
              <li className="nav-item">
                <a className="social-icon" href="https://www.instagram.com/dr.takhuynh.dc/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li className="nav-item">
                <a className="social-icon" href="https://www.instagram.com/dr.takhuynh.dc/" target="_blank" rel="noopener noreferrer">
                  <FaYelp />
                </a>
              </li>
              <li className="nav-item">
                <a className="social-icon" href="https://www.google.com/search?hl=en-US&gl=us&q=South+Bay+Rehab+and+Performance,+21629+Stevens+Creek+Blvd,+Cupertino,+CA+95014&ludocid=2591568071588085950&lsig=AB86z5V4qEBt6z_a03fT7OKh5Ryw#lrd=0x808fb58e41eadc7b:0x23f7196e2e4080be,1" target="_blank" rel="noopener noreferrer">
                  <FaGoogle />
                </a>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNav
