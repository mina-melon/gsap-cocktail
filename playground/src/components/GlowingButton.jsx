import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function GlowingButton() {
  const buttonRef = useRef(null);
  const refTl = useRef();
  useGSAP(() => {
    refTl.current = gsap.fromTo(
      buttonRef.current,
      { scale: 1, boxShadow: "0 0 0 rgba(255,255,255,0)" },
      {
        scale: 1.2,
        boxShadow: "0 0 20px #fff",
        ease: "expo.out",
        duration: 0.3,
        paused: true,
      },
    );
  }, []);

  const handleMouseEnter = () => {
    refTl.current.play();
  };

  const handleMouseLeave = () => {
    refTl.current.reverse();
  };
  return (
    <div className={"mt-10"}>
      <button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={
          "bg-purple-900 rounded-md text-white font-bold text-base border-none px-4 py-4 cursor-pointer"
        }
      >
        Hover Me
      </button>
    </div>
  );
}
