import { lazy } from "react"
const Hero = lazy(() => import('../components/heroSecthion/Hero'));
const About = lazy(() => import('../components/heroSecthion/About'));
const Skills = lazy(() => import('../components/heroSecthion/Skills'));
const Portfolio = lazy(() => import('../components/heroSecthion/Portfolio'));

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
        </>
    )
}

export default Home
