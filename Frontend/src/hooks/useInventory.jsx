import React from 'react'
import{useState, useEffect} from 'react'

const useInventory = () => {
    const [inventory, setInventory] = useState([])
    const [error, setError] = useState(null);
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/")
        .then(res => res.json())
        .then(data => setInventory(data))
        .catch(error => setError(error.message))
    })
    return (
        inventory
    )
}

export default useInventory