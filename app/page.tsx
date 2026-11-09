import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Systems from "./Components/Systems";
import Workflow from "./Components/Workflow";

export default function Home() {
    return (
        <div>
            <Navbar />
            <main>
                <Hero />
                <Systems />
                <Workflow />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
