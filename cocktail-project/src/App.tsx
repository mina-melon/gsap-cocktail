import gsap from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText);


function App() {
  

  return (
    <>
      <p className='text-sky-800 text-2xl'>Hello React</p>
    </>
  )
}

export default App
