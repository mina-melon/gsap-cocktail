import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ChangingColors() {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".box",
      start: "top 90%",
      // end: "top 20%",
      markers: true,
      toggleClass: "bg-add",
    });
  }, []);
  return (
    <main className={".section py-4 "}>
      <div className={"bg-edit box"} />
    </main>
  );
}
