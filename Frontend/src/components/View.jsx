import React from 'react'

const view = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center bg-gray-200 min-h-screen">

        <div className="bg-blue-500 w-64 h-20">
          top
        </div>

        <div className="w-64 h-20">
          <table>
            <th>
              <td>ITEM</td>
              <td>CATEGORY</td>
              <td>SUPPLIER</td>
              <td>PRICE</td>
            </th>
          </table>
        </div>

      </div>
    </div>
  )
}

export default view