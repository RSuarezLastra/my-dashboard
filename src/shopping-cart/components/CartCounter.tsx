'use client'

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCount, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from 'react';

interface CounterResponse {
  method: string;
  count: number;
}

const fetchApiCount = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter')
    .then(res => res.json())

  return data;
}

export const CartCounter = () => {

  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchApiCount().then(({count}) => dispatch(initCount(count)))
    

  }, [dispatch])


  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button className="bg-gray-900 p-2 text-white text-lg rounded-xl hover:bg-gray-700 transition-all duration-200 w-[80px]  mr-2"
          onClick={() => dispatch(substractOne())}>
          -1
        </button>
        <button className="bg-gray-900 p-2 text-white text-lg rounded-xl hover:bg-gray-700 transition-all duration-200 w-[80px] "
          onClick={() => dispatch(addOne())}>
          +1
        </button>
      </div>
    </>
  )
}
