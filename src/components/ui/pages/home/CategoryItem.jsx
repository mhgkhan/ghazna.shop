const CategoryItem = ({link, title}) => {

    

    return (
        <div className="category-item flex items-center justify-center gap-2 flex-col p-1">
            <div className="image w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-full border border-1 border-orange-700">
                <img src={link} alt="" className='w-full h-full rounded-full ' />
            </div>
            <span className='text-sm md:text-lg font-bold mt-1 text-black'>{title  } </span>
        </div>
    )
}

export default CategoryItem
