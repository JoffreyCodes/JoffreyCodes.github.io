import NavBarPanel from "../NavBar/NavBar";
import Pagetop from "../Pagetop/Pagetop";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import ContactMe from "../ContactMe/ContactMe";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

import './Layout.css'

function Layout() {
  return (
    <>
      <section id="navbar">
          <NavBarPanel/>
      </section>
      <section id="pagetop">
          <Pagetop/>
      </section>
    <div className="overlay">
      <section id="about">
          <AboutMe />        
      </section>
      <hr/>
      <section id="projects">
          <Projects />
        </section>
        <hr/>
      <section id="skills">
          <Skills />
        </section>
        <hr/>
      <section id="contact">
        <ContactMe />
      </section>
      <section id="footer">  
        <Footer />
      </section>  
    </div>
    
    </>
  )
}
export default Layout