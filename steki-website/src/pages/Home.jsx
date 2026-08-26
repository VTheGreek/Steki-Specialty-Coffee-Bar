import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureBanner from "../components/FeatureBanner";
import About from "../components/About";
import CoffeeSection from "../components/CoffeeSection";
import FoodSection from "../components/FoodSection";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeatureBanner />
        <About />
        <Menu />
        <CoffeeSection />
        <FoodSection />
      </main>

      <Footer />
    </>
  );
}

export default Home;