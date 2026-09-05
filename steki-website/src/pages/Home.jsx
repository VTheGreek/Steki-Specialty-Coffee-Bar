import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Gallery />
      </main>

      <Footer />
    </>
  );
}

export default Home;