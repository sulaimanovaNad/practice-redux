import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/actions'

export default function Form() {
    const dispatch = useDispatch()
    const [valueEmail,setValueEmail] = useState('')
    const [valuePassword,setValuePassword] = useState('')
    const newUser = {
      email: valueEmail,
      password: valuePassword
    }
    const handleChangeEmail = (e) => {
      setValueEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
      setValuePassword(e.target.value)
    }
    const handleClick = () => {
      dispatch(addUser(newUser))
    }
  return (
    <div>
        <input type="text" value={valueEmail} onChange={handleChangeEmail}/>
        <input type="password" value={valuePassword} onChange={handleChangePassword}/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}
