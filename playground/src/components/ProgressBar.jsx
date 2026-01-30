import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ProgressBar() {
  useGSAP(() => {
    gsap.to(".progress", {
      scrollTrigger: {
        trigger: ".section",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        toggleActions: "play pause resume restart",
        markers: true,
      },
      width: "100%",
      // duration: 2,
      // ease: "Power4.easeInOut",
    });
  }, []);
  return (
    <>
      <div
        className={"bg-[#ccc] h-2 rounded-md w-0 progress fixed inset-0 z-50"}
      />

      <section className={"px-5 section h-dvh py-20 bg-sky-950"} />
    </>
  );
}
