import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureBanner from "../components/FeatureBanner";
import About from "../components/About";
import CoffeeSection from "../components/CoffeeSection";
import FoodSection from "../components/FoodSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeatureBanner />
        <About />
        <CoffeeSection />
        <FoodSection />
      </main>

      <Footer />
    </>
  );
}

export default Home;