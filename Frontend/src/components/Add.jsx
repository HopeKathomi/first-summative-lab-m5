
import React, { useState } from 'react'

const Add = ({ onClose }) => {

    const [inventoryData, setInventoryData] = useState({
        name: "",
        category: "",
        price: ""
    })

    function handleChange(e) {
        setInventoryData({
            ...inventoryData,
            [e.target.name]: e.target.value
        })
    }

    console.log(inventoryData)
    
    async function save_to_database(e) {
        e.preventDefault()

        try {
            const response = await fetch("http://127.0.0.1:5000/edit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inventoryData)
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Failed to save item")
            }

            console.log(data)
            onClose()

        } catch (error) {
            console.error("Error saving item:", error)
        }
    }

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
            <div className='bg-white max-w-md rounded-lg p-6 flex flex-col shadow-lg'>

                <div className='flex justify-between'>
                    <p>Add Item</p>
                    <button
                        type="button"
                        onClick={onClose}
                        className='border border-gray-100 rounded-sm px-2 py-1 hover:border-2 hover:border-red-200'
                    >
                        &times;
                    </button>
                </div>

                <form className='flex flex-col' onSubmit={save_to_database}>

                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={inventoryData.name}
                        onChange={handleChange}
                        className='border px-3 py-1 my-2 border-gray-100 rounded-lg w-full'
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="category"
                        value={inventoryData.category}
                        onChange={handleChange}
                        className='border px-3 py-1 my-2 border-gray-100 rounded-lg w-full'
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="price"
                        value={inventoryData.price}
                        onChange={handleChange}
                        className='border px-3 py-1 my-2 border-gray-100 rounded-lg w-full'
                    />

                    <div className='flex justify-end'>
                        <button
                            type="submit"
                            className='bg-blue-200 py-1 px-3 rounded-sm hover:bg-blue-300'
                        >
                            Save
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Add
