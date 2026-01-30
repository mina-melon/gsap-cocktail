import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import SlidingBoxes from "./components/SlidingBoxes";
import {Routes, Route} from 'react-router';
import SnippingBoxes from "./components/SnippingBoxes";
import NaughtyBoxes from "./components/NaughtyBoxes";

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger)

  return (
    <main className='w-[100%] bg-red-200'>
    
    <Routes>
      <Route path='/' element={<SlidingBoxes/>}/>
      <Route path='/snip' element={<SnippingBoxes/>}/>
      <Route path='/naughty' element={<NaughtyBoxes/>}/>
    </Routes>
    </main>
  )
}

export default App
