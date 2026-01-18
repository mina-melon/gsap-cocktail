import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails.tsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <div className="h-dvh bg-black"></div>
    </main>
  );
}

export default App;
