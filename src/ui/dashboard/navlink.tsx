'use client'
import { HiOutlineHome,HiOutlineCube, HiOutlineDocumentText, HiOutlineTag } from "react-icons/hi"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2"

interface DashBoardProps {
  name:string;
  href:string;
  icon:JSX.Element
}



export default function NavLinks({name,href,icon}:DashBoardProps) {
  const pathName = usePathname()
  return (
    <>
        <Link
          key={name}
          href={href}
          className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-[#1D1D41] text-white p-3 text-sm 
            font-medium hover:bg-[#6359E9] md:flex-none md:justify-start md:p-2 md:px-3 ml-1 md:ml-0
            ${ pathName === href ? 'bg-[#6359E9]' : ''}
            `}
        >
         {icon}
          <p className="hidden md:block">{name}</p>
        </Link>
    </>
  );
}