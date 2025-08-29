
import './App.css';
import Navbar from './Navbar.jsx';
import Slideshow from './home_page/Slide.jsx';
import Intro from './home_page/Introduction.jsx';
import Informations from './about_us/Informations.jsx';
import Services from './Servies_page/Services.jsx';
import Numbercounters from './Servies_page/Numbercounters.jsx';
import ContactForm from './contact-page/Contact_form.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <section id="home">
          <Slideshow />
          <Intro />
        </section>
        <section id="about-us">
          <Informations />
        </section>
        <section id="services">
          <Services />
          <Numbercounters />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
