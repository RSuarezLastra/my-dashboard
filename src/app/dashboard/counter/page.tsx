
import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Counter pager',
  description: 'Un simple ocntador'
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>

      <CartCounter value={10} />
    </div>
  );
}