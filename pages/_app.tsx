import "../styles/globals.css";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import Header from "@/components/header/Header";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Header />
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait" initial={false}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}
