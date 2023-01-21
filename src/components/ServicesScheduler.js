import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Data
import { largeServiceDataArray, smallServiceDataArray } from "../data/serviceData"
import ServiceCardLarge from "./ServiceCardLarge"
import ServiceCardSmall from "./ServiceCardSmall"

const ServicesScheduler = () => {
  return (
    <section id="services-scheduler" className="services-scheduler">
      <Container>
        <Row className="mb-3 mx-auto">
          <Col>
            <h1 className="section-title text-center">Services & Scheduler</h1>
            <div className="section-description">
              <p className="section-description mb-0">Soft tissue work and adjustments are great and helpful but optimizing the movement pattern is what will have a lasting change.</p>
              <p className="text-brand">You will redirected to our booking platform, Jane App.</p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-evenly">
          <Col md={6}>
            {largeServiceDataArray.map((service) => (
              <ServiceCardLarge key={service.id} service={service} />
            ))}
          </Col>
          <Col md={6}>
            {smallServiceDataArray.map((service) => (
              <ServiceCardSmall key={service.id} service={service} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ServicesScheduler
