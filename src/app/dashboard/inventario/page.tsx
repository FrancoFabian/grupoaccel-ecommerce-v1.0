import { lusitana } from "@/ui/fonts";


export const metadata= {
  title: "Inventario Page",
  description: "Un simple contador",
};
export default function InventarioPage() {
  return (
    <div className="bg-[#141332] text-white flex flex-col text-center items-center w-full h-full">
      <h1 className={`${lusitana} mb-4 text-xl md:text-2xl`}>Carrito</h1>
     
    </div>
  );
}