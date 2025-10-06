
import Header from './component/header';
import ServicesSection from './component/ServicesSection';
import ProjectsPage from './component/projects';
import Resume from './component/resume';
import Myselfy from './component/myselfy';
import Contact from './component/contact';


export default function Home() {
  return (
    <main>
      <section id="home">
        <Header />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="projects">
        <ProjectsPage />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="my selfy">
        <Myselfy />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}