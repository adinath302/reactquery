import React from 'react'

const Bookcard = ({ quote, genre, category, author, title, image }) => {
    return (
        <div className='flex flex-col items-center m-3 p-2 h-full shadow-2xl font-serif'>
            <div className='flex flex-col items-center'>
                <img className='object-contain w-30 h-xs' src={image} alt="" />
                <p className='mt-2 sm:text-[20px] md:text-[25px] text-center'>{title}</p>
                <p className=''>-{author}</p>
            </div>
            <div className='flex flex-col text-[12px] w-[200px] items-center leading-2 text-gray-400'>
                <p className=''>Category : <span className=''>{category}</span></p>
                <p className=''>Genre: <span>{genre}</span></p>
            </div>
            <p className='text-[10px] w-[200px] items-center md:text-[15px] font-semibold text-center'>{quote}</p>
        </div>
    )
}

export default Bookcard;