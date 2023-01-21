import headshot from "../assets/img/headshot-doctor-white-bg.png"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Data
import { educationDataArray, experienceDataArray, certificationDataArray } from "../data/educationExperienceData"
import EducationCard from "./EducationCard"
import ExperienceCard from "./ExperienceCard"
import CertificationCard from "./CertificationCard"

const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <Row className="mb-3">
          <Col md={6}>
            <div className="d-flex justify-content-center align-items-center">
              <h1 className="section-title">About</h1>
            </div>
            <div className="text-title">Dr. Takashi Kumagai Huynh, D.C.</div>
            <small className="text-brand">Doctor of Chiropractic</small>
            <p>His motivation for healthcare stems from an extensive personal struggle against his own body during his adolescence. In his youth, he visited countless doctors and underwent various tests, where unfortunately none of the doctors were able to specify what was going on. After years of tests, one doctor was able to diagnose him with a rare genetic disorder in fifteen short minutes just by listening to his symptoms.</p>
            <p>From there on, he knew that he wanted to instill that same relief to his patients. In his free time, he loves being active by playing basketball and running with friends. He also enjoys cooking new recipes to eat… which drives him to keep being active!</p>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div className="headshot-container mx-auto">
              <img src={headshot} alt="Doctor Headshot" />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 mx-auto">
          <Col>
            <h2 className="text-center section-title mt-5">Education, Experience, & Certifications</h2>
          </Col>
        </Row>
        <Row className="mx-auto gy-5">
          <Col md={4}>
            {educationDataArray.map((education) => (
              <EducationCard key={education.id} education={education} />
            ))}
          </Col>
          <Col md={4}>
            {experienceDataArray.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </Col>
          <Col md={4}>
            <article className="about-card">
              <h2>Certifications</h2>
              <ul>
                {certificationDataArray.map((certification) => (
                  <CertificationCard key={certification.id} certification={certification} />
                ))}
              </ul>
              <p>and many more...</p>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
