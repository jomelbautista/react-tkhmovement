import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Data
import { clinicInformationDataArray } from "../data/clinicInformationData"
import InformationCard from "./InformationCard"

const ClinicInformation = () => {
  return (
    <section id="clinic-information" className="clinic-information">
      <Container>
        <Row className="mb-3 mx-auto">
          <Col>
            <h1 className="section-title text-center">Clinic Information</h1>
          </Col>
        </Row>
        <Row className="justify-content-evenly gy-3">
          {clinicInformationDataArray.map((information) => (
            <Col lg={4} sm={6}>
              <InformationCard key={information.id} information={information} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ClinicInformation
