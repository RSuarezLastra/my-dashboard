'use client'

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({value= 0}: Props) => {

  const [count, setCount] = useState(value);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button className="bg-gray-900 p-2 text-white text-lg rounded-xl hover:bg-gray-700 transition-all duration-200 w-[80px]  mr-2"
          onClick={() => setCount(state => state - 1)}>
          -1
        </button>
        <button className="bg-gray-900 p-2 text-white text-lg rounded-xl hover:bg-gray-700 transition-all duration-200 w-[80px] "
          onClick={() => setCount(state => state + 1)}>
          +1
        </button>
      </div>
    </>
  )
}
