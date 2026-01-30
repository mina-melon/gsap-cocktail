import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function DancingBoxes() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "expo.out" },
      scrollTrigger: {
        trigger: ".box1",
        start: "top top",
        end: "+=300",
        pin: true,
        pinSpacing: false,
      },
    });

    tl.to(".box1", {
      xPercent: -100,
      duration: 2,
    });
    tl.to(".box2", {
      xPercent: 100,
    });
    tl.to(".box3", {
      yPercent: 100,
    });
  });
  return (
    <main className={"section h-fit"}>
      <div className={"w-[50%] h-[200px] bg-sky-950 box1"} />
      <div className={"w-[50%] h-50 bg-emerald-900 box2"} />
      <div className={"w-[50%] h-50 bg-pink-900 box3"} />
    </main>
  );
}
