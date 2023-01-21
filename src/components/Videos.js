import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import VideoCard from "./VideoCard"

// Data
import { videoDataArray } from "../data/videoData"

const Videos = () => {
  return (
    <section id="videos" className="videos">
      <Container>
        <Row className="mb-3 mx-auto">
          <Col>
            <h1 className="section-title text-center">Videos</h1>
          </Col>
        </Row>
        <Row className="d-flex align-items-start justify-content-between gy-3">
          {videoDataArray.map((video) => (
            <Col md={4}>
              <VideoCard key={video.id} video={video} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Videos
