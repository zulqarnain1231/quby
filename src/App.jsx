import About from "./Components/Home/About";
import Announcement from "./Components/Home/Announcement/Announcement";
import Collaboration from "./Components/Home/Collaboration";
import Hero from "./Components/Home/Hero";
import Join from "./Components/Home/Join";
import KeyInovation from "./Components/Home/KeyInovation/KeyInovation";
import MailChimpForm from "./Components/Home/NewsLetter/MailChimpForm";
import Footer from "./Components/Shared/Navigations/Footer";
import Navbar from "./Components/Shared/Navigations/Navbar";

function App() {
  return (
    <main className="w-full h-full bg-black-main font-vastago overflow-hidden">
      <div className="w-full lg:h-[100dvh] bg-[url('/Assets/Hero/HeroBg.png')] bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <KeyInovation />
      <Join />
      <Announcement />
      <div className="w-full bg-[url('/Assets/FooterBg.png')] bg-cover bg-no-repeat bg-top -mt-96 pt-[320px]">
        <Collaboration />
        <MailChimpForm />
        <Footer />
      </div>
    </main>
  );
}

export default App;
