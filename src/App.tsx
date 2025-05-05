import { lazy, useEffect, useState } from "react";
import { Skeleton } from "./components/ui/skeleton";
const Hero = lazy(() => import("./components/hero/Hero"));
const Service = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="pl-10 pr-10 max-w-screen-full mx-auto scroll-smooth snap-y snap-mandatory overflow-x-hidden bg-gradient-to-b from-[#12071f] to-[#2f204e] text-white min-h-screen">
      {isLoading ? (
        <Skeleton className="h-full w-full bg-gray-500" />
      ) : (
        <section id="home" className="h-screen snap-center">
          <Hero />
        </section>
      )}
      {isLoading ? (
        <Skeleton className="h-screen w-full" />
      ) : (
        <section id="service" className="h-screen snap-center">
          <Service />
        </section>
      )}
      {isLoading ? (
        <Skeleton className="h-screen w-full" />
      ) : (
        <section id="portfolio" className="h-screen snap-center">
          <Portfolio />
        </section>
      )}
      {isLoading ? (
        <Skeleton className="h-screen w-full" />
      ) : (
        <section id="contact" className="h-screen snap-center">
          <Contact />
        </section>
      )}
    </div>
  );
}

export default App;
