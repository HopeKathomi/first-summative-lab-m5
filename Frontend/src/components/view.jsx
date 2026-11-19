import React from 'react'
import useInventory from '../hooks/useInventory'
const View = () => {
  let inventory = useInventory()
  return (
    <div className="flex flex-col justify-center items-center pb-8 w-full">
      <div className="flex flex-col justify-center items-center w-3/4 p-5 rounded">

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
              </tr>
            </thead>
            <tbody>
              {
                inventory.map(items => {
                  return(
                    <tr key={items.id} className='border-gray-100 border-b-1 last: border-b-0 py-5 hover:bg-gray-100'>
                      <td className="py-2">{items.name}</td>
                      <td className="py-2">{items.category}</td>
                      <td className="py-2">{items.supplier_id}</td>
                      <td className="py-2">{items.price}</td>
                    </tr>
                  )
                })
              }
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
    //   {/* <h1>{
    //   inventory.map((good)=>{
    //     return (<p>{good.category}</p>)
    //   })}</h1> */}
  
  )
}

export default View