import sbrpIntroVideo from "../assets/video/sbrp-clinic-showcase.mp4"

const Showcase = () => {
  return (
    <section id="home" className="showcase d-flex align-items-center">
      <video src={sbrpIntroVideo} playsInline autoPlay muted loop />
      <article className="showcase-text-container">
        <h1 className="fw-bold">Learn the Tools</h1>
        <p>to build a resilient body and live a pain-free life</p>

        <a href="https://southbayrandp.janeapp.com/#/staff_member/1/treatment/1" className="btn btn-brand" id="btn-showcase" target="_blank" rel="noopener noreferrer" width="1920px" height="1080px">
          Schedule an Appointment
        </a>
      </article>
    </section>
  )
}

export default Showcase
