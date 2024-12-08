import { headingFont } from "./layout";
import Hero from "@/components/ui/pages/home/Hero";
import WelcomeMessage from "@/components/ui/pages/home/WelcomeMessage";

export default function Home() {

  return (
    <>

      <main>

        <div className="container mx-auto">
          <WelcomeMessage headingFont={headingFont} />

          <Hero headingFont={headingFont} />
          <br />
          <Hero headingFont={headingFont} />
          <br />
          <Hero headingFont={headingFont} />
          <br />
          <Hero headingFont={headingFont} />
          <br />





        </div>

      </main>




    </>

  );
}
