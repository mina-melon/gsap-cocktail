import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function SnippingBoxes() {
  const containerRef = useRef();

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


    const sections = gsap.utils.toArray('.panel');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.wrapper',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth
      }
    })
  })
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
      <div ref={containerRef}className='wrapper'>
        <div className="track">
          <div className="box1 panel" />
          <div className="box2 panel" />
          <div className="box3 panel" />
          <div className="box4 panel" />
        </div>
      </div>

      <div className="footer h-dvh bg-black pt-30 ">
        <img src="gsap-logo.png" className='"w-32 h-32 object-cover"' />
        <h2 className="text-center text-3xl text-white font-bold">
          That’s a wrap! Scroll responsibly 😎
        </h2>
      </div>
    </section>
  );
}
