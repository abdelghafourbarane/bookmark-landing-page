import Header from "./components/header/Header.component";
import MainContainer from "./components/main-container/MainContainer.component";
import FeaturesSection from "./components/features-section/FeaturesSection.component";
import DownloadSection from "./components/download-section/DownloadSection.component";
import FaqSection from "./components/faq-section/FaqSection.component";

import "./App.css";
import Footer from "./components/footer/Footer.component";
import ContactSection from "./components/contact-section/ContactSection.component";
function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <FeaturesSection />
      <DownloadSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
