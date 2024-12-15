
import { useContext, useEffect } from "react";
import CategoriesSection from "../components/ui/pages/home/CategoriesSection";
import Hero from "../components/ui/pages/home/Hero";
import TrendingProductsSection from "../components/ui/pages/home/TrendingProductsSection";
import WelcomeMessage from "../components/ui/pages/home/WelcomeMessage";
import { useAppContext } from "../context/AuthContext";

export default function Home() {

  const useAuthCtx = useAppContext();

  // console.log(useAuthCtx.token)
  // useEffect(()=>{
  //   useAuthCtx.storeToken("ghaznakhanisagoodboyinthisuniverse")
  // }, [])


  return (

    <>
      <main className="bg-gray-100">


        <div className="container mx-auto md:px-auto px-2">
          <WelcomeMessage />
          <Hero />
          <CategoriesSection />
          <TrendingProductsSection />

          <br /><br /><br /><br /><br />
        </div>

      </main>




    </>

  );
}
