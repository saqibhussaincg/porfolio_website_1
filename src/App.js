import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/porfolio/Portfolio';
import Service from './components/services/Service';
import Testimonial from './components/testimonials/Testimonial';

function App() {
  return (
    <>
     <Header />
     <Nav />
     <About />
     <Experience />
     <Service />
     <Portfolio />
     <Testimonial />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
