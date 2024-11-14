import Header from "./component/Header";
import Feedback from "./section/Feedback";
import Designsit from "./section/Design";
import Hero from "./section/Hero";
import Pixel from "./section/Pixel";
import Client from "./section/Client";
import Demo from "./section/Demo";
import Marketing from "./section/Marketing";
import Business from "./section/Business";
import Footer from "./component/Footer";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mangeclient from "./section/Manageclient";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 500,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Client />
      <Mangeclient />
      <Pixel />
      <Business />
      <Designsit />
      <Feedback />
      <Marketing />
      <Demo />
      <Footer />
    </>
  );
}

export default App;
