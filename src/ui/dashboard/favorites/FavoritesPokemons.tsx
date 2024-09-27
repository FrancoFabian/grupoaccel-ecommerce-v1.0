'use client'
import { useAppSelector } from "@/store";
import { PokemonGrid } from "@/ui/Pokemons/PokemonGrid";

import { IoHeartOutline } from "react-icons/io5";
import { selectFavoritePokemons } from '../../../store/selector/selector-pokemon';
import { useEffect } from "react";

export const FavoritesPokemons = () => {
    const isPokemonsFavoirites = useAppSelector(selectFavoritePokemons);
    //const [pokemons,setPokemons] = useState(isPokemonsFavoirites);
    
    return (
    <>
    
    {
        isPokemonsFavoirites.length > 0 ? <PokemonGrid pokemons={isPokemonsFavoirites}/> : <NoFavorites/>
    }
    </>
 );
}
export const NoFavorites = () => {
    return (
      <div className="flex flex-col w-full h-[60vh] items-center justify-center text-white">
        <IoHeartOutline size={100} className="text-red-700" />
        <span className="text-blue-50">No hay favoritos</span>
      </div>
  
    )
  }