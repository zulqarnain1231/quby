import Hero from "./Components/Home/Hero";
import Navbar from "./Components/Shared/Navigations/Navbar";

function App() {
  return (
    <main className="w-full h-full bg-black-main font-vastago">
      <div className="w-full lg:h-[100dvh] bg-[url('/Assets/Hero/HeroBg.png')] bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}

export default App;
