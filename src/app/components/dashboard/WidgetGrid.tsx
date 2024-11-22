'use client'

import { useAppSelector } from "@/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5"

export const WidgetGrid = () => {

  const count = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap m-2 justify-center">
      <SimpleWidget
        label="Contador"
        title={`${count}`}
        subTitle="Productos agregados"
        href="/dashboard/counter"
        icon={<IoCartOutline size={40} className="text-blue-500" />}
      />
    </div>
  )
}
