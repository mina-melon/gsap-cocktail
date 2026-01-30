import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

export default function SlidingBoxes() {
  useGSAP(() => {
    gsap.to(".scroll", {
      y: 100,
      opacity: 1,
      ease: "bounce.out",
      duration: 2,
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "top 20%",
      },
    });

    const cards = gsap.utils.toArray('.box');
    cards.forEach((e, i) => {
      const card = cards[i];

      gsap.to(card, {
        transformOrigin: 'top center',
        rotationX: 10,
        scrollTrigger: {
          trigger: e,
          start: "top top",
          end: "top 75%",
          endTrigger: '.footer',
          pin: e, 
          pinSpacing: false,
          anticipatePin: 1,
          scrub: true,
        }
      })
    })
  }, []);
  return (
    <section className="w-full h-screen">
      <div className="hero">
        <div className="scroll-trigger flex justify-center items-center">
          <img src="gsap-logo.png" className='"w-32 h-32 object-cover"' />
          <p>Slide down to see Scroll-powered stacking magic</p>
        </div>

        <div className="scroll scroll-container">
          <ChevronDown color={"white"} size={40} />
          <p className="text-base font-medium">Scroll Down</p>
        </div>
      </div>
      <div></div>
      <div className="box1 box" />
      <div className="box2 box" />
      <div className="box3 box" />
      <div className="box4 box" />
      <div className='footer h-dvh bg-black pt-30 '>
        <img src="gsap-logo.png" className='"w-32 h-32 object-cover"' />
        <h2 className='text-center text-3xl text-white font-bold'>That’s a wrap! Scroll responsibly 😎</h2>
        </div>
    </section>
  );
}
