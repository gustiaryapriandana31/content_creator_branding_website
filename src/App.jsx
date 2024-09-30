import HeroSection from "./components/pages/HeroSections"
import ContentCreatorTravels from "./components/pages/ContentCreatorTravels";
import Footer from "./components/layouts/Footer";
import Contact from "./components/pages/Contact";
import Header from "./components/layouts/Header";
import PageTransition from "./components/pages/PageTransition";
import StairTransition from "./components/pages/StairTransition";
import Info from "./components/layouts/Info";

function App() {

  return (
    <>
      <Header/>
      <StairTransition />
      <PageTransition>
        <HeroSection />
        <ContentCreatorTravels />
        <Contact/>
        <Info />
        <Footer />
      </PageTransition>
    </>
  );
}

export default App
