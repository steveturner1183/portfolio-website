import NavBar from "./NavBar/NavBar.js";
import Hero from "./HeroSection/Hero.js";
import Info from "./Info/Info.js"
import ProjectManagement from "./ProjectManagement/ProjectManagement.js";
import SoftwareDevelopment from "./SoftwareDevelopment/SoftwareDevelopment.js";
import Contact from "./Contact/Contact.js";

export default function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Info />
            <SoftwareDevelopment />
            <ProjectManagement />
            <Contact /> 
        </div>
    )
}