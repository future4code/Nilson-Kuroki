import {useState} from 'react'

export const useInputController = ()=>{
    const [value, setValue] = useState("")
    
    const onChangeValue = event => {
        setValue(event.target.value)
    }
    return [value ,onChangeValue, setValue]
}