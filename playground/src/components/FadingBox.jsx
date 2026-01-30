import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function FadingBox() {
  useGSAP(() => {
    gsap.to(".container", {
      scrollTrigger: {
        trigger: ".container",
        start: "top center",
        end: "bottom 120%",
        toggleActions: "play pause reverse pause",
        scrub: true,
      },
      opacity: 1,
      duration: 2,
    });
  }, []);
  return (
    <section
      className={" container mt-10 mb-200 h-dvh bg-sky-900 w-full opacity-0"}
    >
      <div className={" rounded-md "}></div>
    </section>
  );
}
