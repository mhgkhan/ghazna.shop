import { FaSun } from "react-icons/fa";
import { headingFont } from "./layout";
import Image from "next/image";

export default function Home() {

  return (
    <>

      <main>

        <div className="container mx-auto">
          <header>
            <h1 className={`my-1 mt-2 text-4xl font-bold ${headingFont.className} flex items-center`}>Good Morning! <FaSun className="text-yellow-600" /> </h1>
          </header>

          <section className="hero rounded-3xl my-3 relative w-full h-auto bg-orange-800 flex items-center justify-between p-5 md:flex-row flex-col-reverse">

            <div className="text flex items-center justify-center flex-col w-full md:w-[50%]">
              <h2 className={`text-4xl text-white ${headingFont.className} text-center`}> 25% off with code </h2>
              <button className="bg-white text-black m-1 font-bold text-lg rounded-full px-2 py-1">Shop now </button>
            </div>

            <div className="image md:w-[50%] px-10 relative w-[80%] mx-auto">
            <Image width={350} height={250} alt="product picture" src={"https://th.bing.com/th/id/R.66459278341bddfed30c782bd30a8aa7?rik=uIdUpHdp4tDETg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fpurse-transparent-background%2fpurse-transparent-background-9.png&ehk=aa3IPZyw3wsPQpEs70tEI%2bBM9fGCXdFZAfWQg79Kp4Q%3d&risl=&pid=ImgRaw&r=0"}
            
            className="float-right"
            
            />
            </div>

          </section>



        </div>

      </main>




    </>

  );
}
