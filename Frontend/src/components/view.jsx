import React from 'react'
import { useState } from 'react'
import useInventory from '../hooks/useInventory'
import Add from './Add'

const View = () => {
  let inventory = useInventory()
  let [showForm, setShowForm] = useState(false)

  function onClose(){
    setShowForm(false)
  }
  return (
    <div className="flex flex-col justify-center items-center pb-8 w-full">
      <div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-sm hover:bg-blue-700 hover:shadow-md transition duration-200 cursor-pointer my-10" onClick={()=>setShowForm(true)}>Add items</button>
      </div>
      {showForm && <Add onClose = {onClose}/>}
      {console.log(showForm)}
      <div className="flex flex-col justify-center items-center w-3/4 p-5 rounded bg-gray-100">

        <div className="bg-blue-500 h-10 w-full">
          top
        </div>

        <div className='pb-8 w-full'>
          <table className='w-full'>
            <thead>
              <tr className="text-left">
                <th>ITEM</th>
                <th>CATEGORY</th>
                <th>SUPPLIER</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {
                inventory.map(items => {
                  return(
                    <tr key={items.id} className='border-gray-100 border-b-1 last: border-b-0 py-5 hover:bg-gray-100'>
                      <td className="py-2">{items.name}</td>
                      <td className="py-2">{items.category}</td>
                      <td className="py-2">{items.supplier_id}</td>
                      <td className="py-2">{items.price}</td>
                      <td className="py-2">
                        <button className='mx-3 px-3 py-1 rounded hover:bg-green-100'>Save</button>
                        <button className='mx-3 px-3 py-1 rounded hover:bg-blue-100'>Edit</button>
                        <button className='mx-3 px-3 py-1 rounded hover:bg-red-100'>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
            
          </table>
        </div>
      </div>
    </div>  
  )
}

export default View