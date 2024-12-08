import { FaSun } from "react-icons/fa";
import { headingFont } from "./layout";

export default function Home() {

  return (
    <>

      <header>
        <div className="container mx-auto">
          <h1 className={`my-1 mt-2 text-4xl font-bold ${headingFont.className} flex items-center`}>Good Morning! <FaSun className="text-yellow-600" /> </h1>




          
        </div>
      </header>





    </>

  );
}
