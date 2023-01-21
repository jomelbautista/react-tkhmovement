import TestimonialCarousel from "./TestimonialCarousel"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <Container>
        <Row className="mb-3 mx-auto">
          <Col>
            <h1 className="section-title text-center">Testimonials</h1>
            <div className="section-description">
              <p className="section-description mb-0">To view more testimonials or to leave a review, please visit our <a href="https://www.yelp.com/biz/south-bay-rehab-and-performance-cupertino-5" className="text-brand" target="_blank" rel="noopener noreferrer">Yelp</a> page or our <a href="https://www.google.com/search?hl=en-US&gl=us&q=South+Bay+Rehab+and+Performance,+21629+Stevens+Creek+Blvd,+Cupertino,+CA+95014&ludocid=2591568071588085950&lsig=AB86z5V4qEBt6z_a03fT7OKh5Ryw#lrd=0x808fb58e41eadc7b:0x23f7196e2e4080be,1" className="text-brand" target="_blank" rel="noopener noreferrer"> Google Reviews</a> page.</p>
              <p className="text-brand">Thank You! Any feedback is appreciated.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <TestimonialCarousel />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
