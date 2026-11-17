import Approach from "./Components/Approach";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";

export default function Home() {
    return (
        <div>
            <Navbar />
            <main>
                <Hero />
                <Work />
                <Approach />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
