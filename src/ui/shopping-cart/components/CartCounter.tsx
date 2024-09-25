'use client'
import { addOne, initCounterState, subtractOne } from "@/store/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";
import { get } from "http";
interface PropsCounter {
    value:number;

}
export interface CounterResponse{
    count:number
}
const getApiCounter = async():Promise<CounterResponse> => {
   const data = await fetch('/api/counter')
   .then(res => res.json());
   return data;
}

export const CartCounter = ({value = 10 }:PropsCounter) => {
   // const [contador,setContador] = useState(value)
      const count = useAppSelector(state => state.counter.count);
      const dispatch = useAppDispatch();
   //   useEffect(()=>{
   //      dispatch(initCounterState(value))
   //   },[dispatch,value])
   useEffect(() => {
      getApiCounter().then(({count}) =>
      dispatch(initCounterState(count))
      )
     
   }, [dispatch])
   
     
      return (
    <>
          <span className="text-9xl"> {count} </span>
   <div className="flex">
        <button 
        onClick={()=>
        dispatch(addOne())
        }
        className="flex items-center justify-center p-2 rounded-xl bg-gray-700 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">+1</button>
        <button 
        onClick={()=>{dispatch(subtractOne())}}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-700 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">-1</button>
    </div>
  </>
  )
}
