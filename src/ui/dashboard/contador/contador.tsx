'use client'
import { useState } from "react"


export const Contador = () => {
    const [contador,setContador] = useState(10)
  return (
    <div className="flex">
          <span className="text-9xl"> {contador} </span>
    <button 
    onClick={()=>{
      setContador(c => c + 1)
    }}
    className="flex items-center justify-center p-2 rounded-xl bg-gray-700 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">+1</button>
    <button 
     onClick={()=>{
      setContador(c => c - 1)
    }}
    className="flex items-center justify-center p-2 rounded-xl bg-gray-700 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">-1</button>
  </div>
  )
}
