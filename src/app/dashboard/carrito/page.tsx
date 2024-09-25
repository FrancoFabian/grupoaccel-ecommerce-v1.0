import { lusitana } from "@/ui/fonts";
import { CartCounter } from "@/ui/shopping-cart/components/CartCounter";

export const metadata= {
  title: "Shopping Cart",
  description: "Un simple contador",
};

export default function CarritoPage() {

  return (
    <div className="bg-[#141332] text-white">
    <h1 className={`${lusitana} mb-4 text-xl md:text-2xl`}>Carrito</h1>
    <div className="bg-[#141332] text-white flex flex-col text-center items-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={2}/>
     
    </div>
  </div>
  );
}