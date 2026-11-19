import React from 'react'

const Add = ({onClose}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
        <div className='bg-white max-w-md rounded-lg p-6 flex flex-col shadow-lg'>
            <div className='flex justify-between'>
                <p>Add Item</p>
                <button onClick={onClose}>&times;</button>
            </div>
            <form className='flex flex-col'>
                <input type="text" placeholder='name' className='border px-3 py-1 my-2 border-gray-100 rounded-lg w-full'/>
                <input type="text" placeholder='category' className='border px-3 py-1 my-2 border-gray-100 rounded-lg w-full'/>
                <input type="number" placeholder='price' className='border px-3 py-1 my-2 border-gray-100 rounded-lg w-full'/>
            </form>
            <div className='flex justify-end'>
                <button className='bg-blue-200 py-1 px-3 rounded-sm hover:bg-blue-300'>Save</button>
            </div>
        </div>
    </div>
  )
}

export default Add