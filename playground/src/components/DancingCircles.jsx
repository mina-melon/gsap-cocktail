import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function DancingCircles() {
  const sectionRef = useRef(null);
  const circlesRef = useRef([]);

  useGSAP(() => {
    // Animate the entire array at once
    gsap.to(circlesRef.current, {
      xPercent: 50,
      rotation: 360,
      duration: 1.5,
      stagger: 0.2, // works now
      scrollTrigger: {
        trigger: sectionRef.current, // use ref
        start: "top top",
        end: "+=300",
        pin: true,
        pinSpacing: false,
        markers: true,
      },
    });
  }, []);

  return (
    <main
      ref={sectionRef}
      className="h-fit section flex gap-8 justify-center items-center"
    >
      {[0, 1, 2].map((_, i) => (
        <div
          key={i}
          ref={(el) => (circlesRef.current[i] = el)}
          className={`circle rounded-full w-60 h-60 ${i % 2 === 0 ? "bg-yellow-900" : "bg-green-900"}`}
        />
      ))}
    </main>
  );
}
