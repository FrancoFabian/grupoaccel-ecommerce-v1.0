import SvgAcceltext from "./logo/grupoacceltext"
import SvgSatelite from "./logo/satelite"


export const GrupoAccel = () => {
  return (
    <div       
        className="w-full h-full flex flex-row items-center justify-center"
    >
        <SvgSatelite primaryColor="text-gray-400" secondaryColor="text-gray-200" className="w-140 h-5"/>
        <SvgAcceltext className="h-3 w-auto ml-2 text-gray-200" />
    </div>
  )
}
