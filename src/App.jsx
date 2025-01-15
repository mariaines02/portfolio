/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    console.log('App is mounting'); // Log de débogage
    return (
    <ReactLenis root>
        <Header />
        <main>
            <Hero />
            <About />
            <Skill />
            <Work/>
            <Contact/>
        </main>
        <Footer/>
    </ReactLenis>
    )
}

export default App;