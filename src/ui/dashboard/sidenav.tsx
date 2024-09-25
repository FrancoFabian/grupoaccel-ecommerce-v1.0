import Link from 'next/link';
import NavLinks from '@/ui/dashboard/navlink';
import { GrupoAccel } from '../GrupoAccel';
import { HiOutlinePower,HiOutlineClipboardDocumentList} from 'react-icons/hi2';
import { HiOutlineHome,HiOutlineCube, HiOutlineDocumentText, HiOutlineTag, HiOutlineShoppingCart } from "react-icons/hi"
import { IoFootball, IoHeartOutline } from 'react-icons/io5';
const links = [
  {name:'Home', href:'/dashboard', icon: <HiOutlineHome className="w-6"/>},
  {name:'Iventario', href:'/dashboard/inventario', icon: <HiOutlineCube className="w-6"/>},
  {name:'Pedidos',href:'/dashboard/pedidos',icon: <HiOutlineClipboardDocumentList className="w-6"/>},
  {name:'Facturas',href:'/dashboard/facturas',icon:<HiOutlineDocumentText className="w-6"/>},
  {name:'Ventas',href:'/dashboard/ventas',icon:<HiOutlineTag className="w-6"/>},
  {name:'Carrito',href:'/dashboard/carrito',icon:<HiOutlineShoppingCart className="w-6"/>},
  {name:'Pokemos',href:'/dashboard/pokemons',icon:<IoFootball className="w-6"/>},
  {name:'Favoritos',href:'/dashboard/favorites',icon:<IoHeartOutline className="w-6"/>}
]

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-[#141332]">
    <Link
      className="mb-2 flex h-20 items-end rounded-lg bg-gradient-to-r from-[#1e1e26] to-[#750702] md:h-40 overflow-hidden"
      href="/"
    >
      <div className="w-full h-full">
        <GrupoAccel/>.
      </div>
    </Link>
    <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      
      {
        links.map(item =>(
          <NavLinks key={item.name} {...item}/>
        ))
      }
   
      <div className="hidden h-auto w-full grow rounded-md bg-[#141332] md:block"></div>
      <form>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-[#1D1D41] p-3 text-sm text-white font-medium hover:bg-[#6359E9] md:flex-none md:justify-start md:p-2 md:px-3">
          <HiOutlinePower className="w-6"/>
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  </div>
  );
}
