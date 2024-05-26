import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { m } from "framer-motion";
import Lenis from "@studio-freight/lenis";

type Props = {
  children: ReactNode;
};

export default function Wrapper({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="container mx-auto min-h-screen p-4 py-24 md:px-7 xl:px-0">
      {/* slide from bottom div */}
      <m.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.24, 1, 0.48, 1] }}
        className="SLIDE-IN absolute inset-0 bg-white origin-bottom"
      />

      {/* slide from top div */}
      <m.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.24, 1, 0.48, 1] }}
        className="SLIDE-OUT absolute inset-0 bg-white origin-top"
      />
      {children}
    </main>
  );
}
