import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export const useCheckLogin = ()=> {
    const history = useHistory()

    useEffect(()=>{
        const token =localStorage.getItem('token')

        if(token === null){
            history.push('/login')
        }
    }, [history])
}