import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function AnimatedCard() {
  const cardRef = useRef(null);
  const refTl = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "expo" },
    });

    tl.fromTo(
      ".card",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    )
      .fromTo(
        ".card",
        {
          y: 50,
        },
        {
          y: 0,
        },
      )
      .fromTo(
        ".card",
        {
          scale: 0.8,
        },
        {
          scale: 1,
        },
      );

    refTl.current = gsap.to(cardRef.current, {
      scale: 1.3,
      y: 10,
      duration: 1.2,
      ease: "expo",
      paused: true,
    });
  }, []);

  const handleHover = () => {
    refTl.current.play();
  };

  const handleOutside = () => {
    refTl.current.reverse();
  };
  return (
    <div className={"py-6 grid gap-3 grid-cols-3"}>
      <div
        className={
          "p-4 rounded-xl bg-slate-950 border-slate-700/80 w-[500px] h-[300px] flex flex-col gap-3 card"
        }
      >
        <h2 className={"text-2xl font-bold text-white"}>I am Card One</h2>
        <p className={"text-xl text-zinc-400"}>
          Lorem ipsum is placeholder text used in design to show how a layout
          will look before the real content is added.
        </p>
      </div>

      <div
        ref={cardRef}
        className={
          "p-4 rounded-xl bg-slate-950 border-slate-700/80 w-[500px] h-[300px] flex flex-col gap-3 card"
        }
        onMouseEnter={handleHover}
        onMouseLeave={handleOutside}
      >
        <h2 className={"text-2xl font-bold text-white"}>I am Card Two</h2>
        <p className={"text-xl text-zinc-400"}>
          Lorem ipsum is placeholder text used in design to show how a layout
          will look before the real content is added.
        </p>
      </div>
    </div>
  );
}
