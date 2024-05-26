import { ReactNode, useEffect } from "react";
import { m } from "framer-motion";
import Lenis from "@studio-freight/lenis";

type Props = {
  children: ReactNode;
};

export default function StairsWrapper({ children }: Props) {
  const numberOfColumne = 5;

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // stair varient
  const stairsVariant = {
    initial: { top: 0 },
    animate: (index: number) => ({
      top: "100%",
      transition: {
        duration: 0.4,
        delay: index * 0.05,
      },
      transitionEnd: {
        height: 0,
        top: 0,
      },
    }),
    exit: (index: number) => ({
      height: "100%",
      transition: {
        duration: 0.4,
        delay: index * 0.05,
      },
    }),
  };

  return (
    <main className="container mx-auto min-h-screen p-4 py-24 md:px-7 xl:px-0">
      <div className="fixed inset-0 pointer-events-none flex">
        {[...Array(numberOfColumne)].map((_, idx) => (
          <m.div
            key={idx}
            variants={stairsVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={numberOfColumne - idx}
            className="w-full h-full bg-white relative top-0"
          />
        ))}
      </div>
      {children}
    </main>
  );
}
