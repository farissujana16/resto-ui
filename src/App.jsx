import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Hero1 from "./components/Hero1.jsx";
import Hero2 from "./components/Hero2.jsx";
import HowTo from "./components/HowTo.jsx";
import Menu from "./components/Menu.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Banner></Banner>
      <Navbar></Navbar>
      <Hero1></Hero1>
      <Hero2></Hero2>
      <HowTo></HowTo>
      <Menu></Menu>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
