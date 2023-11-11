import About from "./Components/Home/About";
import Hero from "./Components/Home/Hero";
import Join from "./Components/Home/Join";
import KeyInovation from "./Components/Home/KeyInovation/KeyInovation";
import Navbar from "./Components/Shared/Navigations/Navbar";

function App() {
  return (
    <main className="w-full h-full bg-black-main font-vastago">
      <div className="w-full lg:h-[100dvh] bg-[url('/Assets/Hero/HeroBg.png')] bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <KeyInovation />
      <Join />
    </main>
  );
}

export default App;
