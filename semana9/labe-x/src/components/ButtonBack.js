import React from 'react'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'

export const ButtonBack = (props)=>{
    const history = useHistory()
    return <Button onClick={history.goBack} variant="contained" color="primary">Back</Button>
}