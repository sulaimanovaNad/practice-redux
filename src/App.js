import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Form from './component/Form';


function App(){
  const users = useSelector(store => store.users)
  console.log(users)
  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/api/')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //   })
  // })

  return (
    <div>
      <Form/>
    </div>
  )
}


export default App

