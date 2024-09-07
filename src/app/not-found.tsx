import Link from 'next/link'
import SideNav from '../ui/dashboard/sidenav';
 
export default function NotFound() {
  return (
    <div className=" flex h-screen flex-col md:flex-row md:overflow-hidden bg-[#141332]">
      <div className="w-full flex-none md:w-64">
          <SideNav/>
      </div>
      <div className="flex-grow md:overflow-y-auto bg-[#9390f4]">

     
     
      <div className="h-screen w-full flex flex-col justify-center items-center bg-[#141332]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="font-bold bg-gradient-to-r from-[#6920b3] to-[#cf0a00] px-2 text-sm rounded rotate-12 absolute text-white">
              Page Not Found
            </div>
              <button className="relative inline-block text-sm font-medium text-[#d1d3d7] group active:text-[#9a35f3] focus:outline-none focus:ring">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 from-[#6920b3] to-[#cf0a00] group-hover:translate-y-0 group-hover:translate-x-0" />
                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                  <Link href="/dashboard">Go Home</Link>
                </span>
              </button>
        </div>
     
            
      </div>
    </div>
   
  )
}