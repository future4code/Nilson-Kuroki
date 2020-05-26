import {useState, useEffect} from 'react'
import axios from 'axios'

export const useRequestData = (url, initialState) =>{
    const [data, setData] = useState(initialState)
    useEffect(()=>{
        axios.get(url).then((response)=> {

            setData(response.data.trips)
        }).catch(error =>{
            console.log(error)
        })
    },[url])
    return data
}