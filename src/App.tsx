import { lazy, useEffect, useState } from "react";
import { Skeleton } from "./components/ui/skeleton";

const Hero = lazy(() => import("./components/hero/Hero"));
const Service = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#12071f] to-[#2f204e] text-white font-sans min-h-screen overflow-x-hidden">
      {isLoading ? (
        <Skeleton className="h-screen w-full bg-gray-500" />
      ) : (
        <>
          <section id="home" className="h-screen snap-center container px-4 mx-auto">
            <Hero />
          </section>
          <section id="service" className="h-screen snap-center container px-4 mx-auto">
            <Service />
          </section>
          <section id="portfolio" className="h-screen snap-center container px-4 mx-auto">
            <Portfolio />
          </section>
          <section id="contact" className="h-screen snap-center container px-4 mx-auto">
            <Contact />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
