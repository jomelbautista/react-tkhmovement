import { Container } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
import { testimonialDataArray } from "../data/testimonalData"

const TestimonialCarousel = () => {
  return (
    <Carousel>
      {testimonialDataArray.map((testimonial) => (
        <Carousel.Item key={testimonial.id}>
          <Container className="testimonial w-75 h-100 mx-auto">
            <article className="testimonial-body-container">
              <h2 className="name">{testimonial.name}</h2>
              <div className="stars">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </div>
              <p className="date text-brand">{testimonial.time}</p>
              <p className="text">{testimonial.text}</p>
            </article>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default TestimonialCarousel
