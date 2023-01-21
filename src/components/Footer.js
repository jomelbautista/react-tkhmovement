import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaGoogle, FaInstagram, FaYelp } from "react-icons/fa"

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <Container className="footer-container">
        <Row className="gy-2">
          <Col md={4}>
            <h4>
              <a href="#home" className="footer-title text-white">
                South Bay Rehab and Performance
              </a>
            </h4>
            <ul className="d-flex">
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
          </Col>
          <Col md={3} className="ms-auto">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#clinic-information">Clinic Information</a>
              </li>
              <li>
                <a href="#services-scheduler">Services & Scheduler</a>
              </li>
              <li>
                <a href="#videos">Videos</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Contact</h4>
            <ul>
              <li>Email: takhuynhmovement@gmail.com</li>
              <li>Address: 21629 Stevens Creek Boulevard, Cupertino, CA 95014 (USA)</li>
              <li>Phone Number: +1 (650) 564-3538</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
