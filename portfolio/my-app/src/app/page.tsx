
import Header from './component/header';
import ServicesSection  from './component/ServicesSection'; 
import ProjectsPage  from './component/projects';
import Resume from './component/resume';  
import Myselfy from './component/myselfy'; 
import Contact from './component/contact';


export default function Home() {
  return (
    <main>
    <Header />
    <ServicesSection />
    <ProjectsPage />
    <Resume />
    <Myselfy />
    <Contact />
    </main>
  )
}