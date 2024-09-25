import SideNav from "@/ui/dashboard/sidenav";
import { Providers } from "@/store/Providers";

export default function DashboardLayout({children}:{children: React.ReactNode}) {
    
    return (
    <div className=" flex h-screen flex-col md:flex-row md:overflow-hidden bg-[#141332]">
      <div className="w-full flex-none md:w-64">
          <SideNav/>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12  bg-[#141332]">
            <Providers >
              {children}
            </Providers>
            
      </div>
    </div>
  );
}