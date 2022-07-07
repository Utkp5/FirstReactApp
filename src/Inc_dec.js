import React,{useState} from 'react'
import "./Inc_dec.css"

export default function Inc_dec(){
  const[value,setCount]= useState(0);
  return (
    <div>
        <div className="navbar">
          <p className="navbar_element">Increasing And Decreasing Of a Number </p>
        </div>
        <div className="container">
          <p className="result">{value}</p>
          <button id="inc" onClick={()=>
          {
            setCount(value+1);
          }}>INCREMENT</button>
          <button id="dec" onClick={()=>
          {
            setCount(value-1);
          }}>DECREMENT</button>
        </div>
    </div>
  )
}

