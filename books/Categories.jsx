import React from 'react'

const Categories = ({ setfilter }) => {

  return (
    <div className='flex gap-1 md:gap-2 m-2 justify-center font-medium text-sm mt-4'>
      <button className='bg-gray-400 p-1 md:p-2 text-white rounded shadow-pink-600 shadow-xl' onClick={() => setfilter("all")}>ALL</button>
      <button className='bg-gray-400 p-1 md:p-2 text-white rounded shadow-indigo-600 shadow-xl' onClick={() => setfilter("Self-Help")}>Self Help</button>
      <button className='bg-gray-400 p-1 md:p-2 text-white rounded shadow-green-600 shadow-xl' onClick={() => setfilter("Finance")}>Finance</button>
      <button className='bg-gray-400 p-1 md:p-2 text-white rounded shadow-blue-600 shadow-xl' onClick={() => setfilter("Psychology")}>Psychology</button>
      <button className='bg-gray-400 p-1 md:p-2 text-white rounded shadow-yellow-600 shadow-xl' onClick={() => setfilter("Philosophy")}>Philosophy</button>
      <button className='bg-gray-400 p-1 md:p-2 text-white rounded shadow-red-600 shadow-xl' onClick={() => setfilter("Fiction")}>Fiction</button>
      <button className='bg-gray-400 p-1 md:p-2 text-white rounded shadow-violet-600 shadow-xl' onClick={() => setfilter("Nonfiction")}>Non-Fiction</button>
      <button className='bg-gray-400 p-1 md:p-2 text-white rounded shadow-cyan-600 shadow-xl' onClick={() => setfilter("Business")}>Business</button>
    </div>
  )
}

export default Categories;