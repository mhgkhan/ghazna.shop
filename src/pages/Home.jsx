
import CategoriesSection from "../components/ui/pages/home/CategoriesSection";
import Hero from "../components/ui/pages/home/Hero";
import TrendingProductsSection from "../components/ui/pages/home/TrendingProductsSection";
import WelcomeMessage from "../components/ui/pages/home/WelcomeMessage";

export default function Home() {

  return (
    <>
      <main>


        <div className="container mx-auto md:px-auto px-2">
          <WelcomeMessage />
          <Hero />
          <CategoriesSection />
          <TrendingProductsSection />

        </div>

      </main>




    </>

  );
}
