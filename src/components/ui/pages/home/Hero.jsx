import { useEffect, useRef, useState } from "react"

const Hero = () => {
    const ref = useRef()


    const [items, setItems] = useState([
        { title: "25% off with code", link: "this is the link", img: "https://th.bing.com/th/id/R.66459278341bddfed30c782bd30a8aa7?rik=uIdUpHdp4tDETg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fpurse-transparent-background%2fpurse-transparent-background-9.png&ehk=aa3IPZyw3wsPQpEs70tEI%2bBM9fGCXdFZAfWQg79Kp4Q%3d&risl=&pid=ImgRaw&r=0" },
        { title: "Purchase for 250$ off 10%", link: "this is the link", img: "https://th.bing.com/th/id/R.66459278341bddfed30c782bd30a8aa7?rik=uIdUpHdp4tDETg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fpurse-transparent-background%2fpurse-transparent-background-9.png&ehk=aa3IPZyw3wsPQpEs70tEI%2bBM9fGCXdFZAfWQg79Kp4Q%3d&risl=&pid=ImgRaw&r=0" },
        { title: "15% off with code ", link: "this is the link", img: "https://th.bing.com/th/id/R.66459278341bddfed30c782bd30a8aa7?rik=uIdUpHdp4tDETg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fpurse-transparent-background%2fpurse-transparent-background-9.png&ehk=aa3IPZyw3wsPQpEs70tEI%2bBM9fGCXdFZAfWQg79Kp4Q%3d&risl=&pid=ImgRaw&r=0" }
    ])

    const [currentHero, setCurrentHero] = useState(items[0])
    const [ani, setAni] = useState(false)

    const changeHero = ind => {
        setAni(true)
        ref.current.classList.remove("hero-banner")
        setCurrentHero(items[ind])
        setTimeout(() => setAni(false), 500)
        // ref.current.classList.add("hero-banner")
    }

    // const [counter, setCounter] = useState(0)

    // setInterval(() => {
    //     if (counter <=2) {
    //         changeHero(counter)
    //         setCounter(counter + 1)
    //     }
    //     else {
    //         setCounter(0)
    //     }
    // }, 2000);

    useEffect(() => {
        changeHero(0)
    }, [])

    return (
        <section className="hero">

            <div ref={ref} className={`transition-all duration-500 ${ani ? "opacity-0" : "opacity-100"} ero-banner flex items-center justify-between rounded-3xl my-3 relative w-[99%] mx-auto md:w-full h-auto bg-orange-800 p-5`}>
                <div className="text flex items-center justify-center flex-col  w-auto md:w-[50%]">
                    <h2 className={` text-xl md:text-4xl text-white text-center`}> {currentHero && currentHero.title} </h2>
                    <button className="bg-white text-black mx-auto mt-2 font-bold md:text-lg rounded-full px-2 md:py-1">Shop now </button>
                </div>

                <div className="image w-[35%] md:w-[50%] md:px-10 relative md:scale-[1] ">
                    <img width={250} height={150} alt="product picture" src={currentHero && currentHero.img}
                        className="float-right md:scale-[1]"
                    />
                </div>
            </div>

            <div className="dots flex items-center justify-center gap-2">
                {items.map((ele, ind) => <div onClick={() => changeHero(ind)} key={ele + Math.floor(Math.random() * 5000)} className="p-2 bg-gray-500 rounded-full cursor-pointer hover:bg-gray-800"></div>)}
            </div>

        </section>
    )
}

export default Hero
