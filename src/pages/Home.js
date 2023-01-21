import About from '../components/About'
import ClinicInformation from '../components/ClinicInformation'
import Footer from '../components/Footer'
import ServicesScheduler from '../components/ServicesScheduler'
import Showcase from '../components/Showcase'
import Testimonials from '../components/Testimonials'
import Videos from '../components/Videos'
import SectionConnector from '../components/SectionConnector'

const Home = () => {
  return (
    <main className="home">
      <Showcase />
      <About />
      <SectionConnector />
      <ClinicInformation />
      <SectionConnector />
      <ServicesScheduler />
      <SectionConnector />
      <Videos />
      <SectionConnector />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default Home