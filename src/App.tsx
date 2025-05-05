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
    <div>
      
      {isLoading ? (
        <Skeleton className="h-[100vh] w-full bg-gray-500" />
      ) : (
        <>
          <section id="home" className="h-screen snap-center">
            <Hero />
          </section>
          <section id="service" className="h-screen snap-center">
            <Service />
          </section>
          <section id="portfolio" className="h-screen snap-center">
            <Portfolio />
          </section>
          <section id="contact" className="h-screen snap-center">
            <Contact />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
