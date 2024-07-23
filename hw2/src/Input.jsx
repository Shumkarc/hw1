import React from 'react'
import { useState } from 'react'

export default function Input() {
    const[num,setNum] = useState(0)

    const incrementByFive = () => {
        setNum(element => Math.min(element + 5 ,15))
    }

    const decrementByFive = () => {
        setNum(element => Math.max(element - 5 ,0))
    }


  return (
    <div className='App'>
    <h1>{num}</h1>
    <button onClick={()=>{
        if(num<15) setNum(num +1)
    }}>+1</button>
     <button onClick={()=>{
        if(num>0) setNum(num -1)
    }}>-1</button>
    <button onClick={incrementByFive}>+5</button>
    <button onClick={decrementByFive}>-5</button>
    <button onClick={()=>{
        setNum(0)
    }}>reset</button>
    </div>
  )
}
