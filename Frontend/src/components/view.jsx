import React from 'react'
import useInventory from '../hooks/useInventory'
const View = () => {
  let inventory = useInventory()
  return (
    <div>
        <div className="flex flex-col justify-center items-center bg-gray-200 min-h-screen">

        <div className="bg-blue-500 w-3/4 h-20">
          top
        </div>

        <div className="w-3/4 h-20">
          <table className='w-full'>
            <thead>
              <tr>
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
                    <tr>
                      <td>{items.name}</td>
                      <td>{items.category}</td>
                      <td>{items.supplier_id}</td>
                      <td>{items.price}</td>
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