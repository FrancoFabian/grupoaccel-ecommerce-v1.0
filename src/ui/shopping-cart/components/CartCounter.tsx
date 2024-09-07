'use client'
import { useState } from "react"
interface PropsCounter {
    value:number;

}

export const CartCounter = ({value = 10 }:PropsCounter) => {
    const [contador,setContador] = useState(value)
  return (
    <>
          <span className="text-9xl"> {contador} </span>
   <div className="flex">
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
  </>
  )
}
