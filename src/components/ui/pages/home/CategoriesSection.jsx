
import { Link } from 'react-router-dom'
import CategoryItem from './CategoryItem'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from 'react';
import HeadingSection from './HeadingSection';

const CategoriesSection = () => {

    const scrollContainerRef = useRef();

    const forwardScroll = () => {
        scrollContainerRef.current.scrollBy(150, 0)
    }
    const backWordScroll = () => {
        scrollContainerRef.current.scrollBy(-150, 0)

    }

    return (
        <section className='w-full'>
            <HeadingSection heading={"Categories"} link={'/'} linktext={'See All'} />


            <div className="items-parent flex items-center justify-between w-full">
                <div onClick={backWordScroll} className='text-3xl bg-orange-200 cursor-pointer font-bold hover:bg-orange-300 h-full flex items-center justify-center py-4 md:py-9 md:px-2 rounded-md'>
                    <IoIosArrowBack />
                </div>
                <div ref={scrollContainerRef} className="items-container flex scroll-smooth gap-3 w-[90%] mx-auto overflow-auto overflow-x-scroll">
                    <CategoryItem title={"Tshirts"} link={"https://www.bing.com/th?id=OIP.bn-jF848c8xIcSzTstjgEwHaKG&w=115&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"} />
                    <CategoryItem title={"Shoes"} link={"https://www.bing.com/th?id=OIP.YWLqzwgxHxFZSlDSM1uMtAHaHn&w=145&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"} />
                    <CategoryItem title={"Blazer"} link={"https://th.bing.com/th/id/OIP.fkdNTK-PVP4Ywji7wqsEZgAAAA?rs=1&pid=ImgDetMain"} />
                    <CategoryItem title={'Purses'} link={"https://th.bing.com/th/id/OIP.1iAS5B1weSw5kcS_ZT-f8gHaH6?rs=1&pid=ImgDetMain"} />
                    <CategoryItem title={'Trouzer'} link={"https://th.bing.com/th/id/OIF.kAbQzJdb35yBdSs4ypl9Wg?rs=1&pid=ImgDetMain"} />
                    <CategoryItem title={'Laptops'} link={"https://th.bing.com/th/id/OIP.5EZRHGR0LgL2IWcQ511TkQHaF5?w=208&h=180&c=7&r=0&o=5&pid=1.7"} />
                    <CategoryItem title={"Tshirts"} link={"https://www.bing.com/th?id=OIP.bn-jF848c8xIcSzTstjgEwHaKG&w=115&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"} />
                    <CategoryItem title={"Shoes"} link={"https://www.bing.com/th?id=OIP.YWLqzwgxHxFZSlDSM1uMtAHaHn&w=145&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"} />
                    <CategoryItem title={"Blazer"} link={"https://th.bing.com/th/id/OIP.fkdNTK-PVP4Ywji7wqsEZgAAAA?rs=1&pid=ImgDetMain"} />
                    <CategoryItem title={"Tshirts"} link={"https://www.bing.com/th?id=OIP.bn-jF848c8xIcSzTstjgEwHaKG&w=115&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"} />
                    <CategoryItem title={"Shoes"} link={"https://www.bing.com/th?id=OIP.YWLqzwgxHxFZSlDSM1uMtAHaHn&w=145&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"} />
                    <CategoryItem title={"Blazer"} link={"https://th.bing.com/th/id/OIP.fkdNTK-PVP4Ywji7wqsEZgAAAA?rs=1&pid=ImgDetMain"} />
                    {/* <CategoryItem title={'Trouzer'} link={"https://th.bing.com/th/id/OIF.kAbQzJdb35yBdSs4ypl9Wg?rs=1&pid=ImgDetMain"} />
                    <CategoryItem title={'Trouzer'} link={"https://th.bing.com/th/id/OIF.kAbQzJdb35yBdSs4ypl9Wg?rs=1&pid=ImgDetMain"} />
                    <CategoryItem title={'Trouzer'} link={"https://th.bing.com/th/id/OIF.kAbQzJdb35yBdSs4ypl9Wg?rs=1&pid=ImgDetMain"} />
                    <CategoryItem title={'Trouzer'} link={"https://th.bing.com/th/id/OIF.kAbQzJdb35yBdSs4ypl9Wg?rs=1&pid=ImgDetMain"} /> */}
                </div>
                <div onClick={forwardScroll} className='text-3xl bg-orange-200 cursor-pointer font-bold hover:bg-orange-300 h-full flex items-center justify-center py-4 py-4 md:py-9 md:px-2 rounded-md'>
                    <IoIosArrowForward />
                </div>
            </div>

        </section>
    )
}

export default CategoriesSection
