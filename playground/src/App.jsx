// import "./App.css";
import BouncyBox from "./components/BouncyBox.jsx";
import GlowingButton from "./components/GlowingButton.jsx";
import AnimatedCard from "./components/AnimatedCard.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadingBox from "./components/FadingBox.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import DancingBoxes from "./components/DancingBoxes.jsx";
import DancingCircles from "./components/DancingCircles.jsx";
import ChangingColors from "./components/ChangingColors.jsx";
import ChangingNav from "./components/ChangingNav.jsx";

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  return (
    <div className="body">
      {/*<BouncyBox />*/}
      {/*<GlowingButton />*/}
      {/*<AnimatedCard />*/}
      {/*<FadingBox />*/}
      {/*<ProgressBar />*/}

      {/*<DancingCircles />*/}
      {/*<div className={"panel"} />*/}
      {/*<ChangingColors />*/}
      {/*<div className={"panel"} />*/}
      {/*/!*<DancingBoxes />*!/*/}
      <ChangingNav />
    </div>
  );
}

export default App;
