import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BouncyBox() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "bounce.out" },
    });
    tl.to(".box", {
      x: 200,
    }).to(".box", {
      rotation: 360,
    });
    // gsap.to(".box", {
    //   x: 200,
    //   scale: 1.5,
    //   rotation: 360,
    //   backgroundColor: "red",
    //   duration: 2,
    //   ease: "bounce.out",
    // });
  }, []);
  return <div className="bg-sky-900 rounded-md box w-25 h-25" />;
}
