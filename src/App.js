import { useState } from "react";

import Header from "./components/header/Header.component";
import MainContainer from "./components/main-container/MainContainer.component";
import FeaturesSection from "./components/features-section/FeaturesSection.component";
import DownloadSection from "./components/download-section/DownloadSection.component";
import FaqSection from "./components/faq-section/FaqSection.component";

import "./App.css";
import Footer from "./components/footer/Footer.component";
import ContactSection from "./components/contact-section/ContactSection.component";
import Modal from "./components/modal/Modal.component";
function App() {
  const [menuClicked, setMenuClicked] = useState(false);

  const onMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  console.log(menuClicked);
  return (
    <div className="App">
      {menuClicked && <Modal clickMenu={() => onMenuClick()} />}
      <Header clickMenu={() => onMenuClick()} showModal={menuClicked} />
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
