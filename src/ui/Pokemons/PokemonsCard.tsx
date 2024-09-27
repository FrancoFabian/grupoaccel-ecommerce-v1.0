'use client'
import { SimplePokemon } from "@/pokemons"
import Link from "next/link"
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";
interface Props{
    pokemon: SimplePokemon;
}
export const PokemonsCard = ({pokemon}:Props) => {
        const {id,name} = pokemon;
        const isFavorite = useAppSelector(state => !!state.pokemons[id]);
        const dispatch = useAppDispatch();
        const toggleFavoritePokemon = () => {
          
          dispatch(toggleFavorite(pokemon))
        }
         
        return (
    <div className="mx-auto right-0 mt-2 w-60">
  <div className="bg-white rounded overflow-hidden shadow-lg">
    <div className=" flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
      
     <div className="relative w-24 h-24">
            <Image
              key={id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              fill
              alt={name}
              priority={false}
              style={{ objectFit: 'contain' }}
            />
      </div>
      <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
      <div className="mt-5">
        <Link href={`/dashboard/pokemon/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
          Explorar Pokemon
        </Link>
      </div>
    </div>
    <div className="border-b">
      <link href="/account/campaigns" />
      <div className="px-4 py-2 hover:bg-gray-100 flex items-center">
        <div className="text-red-600">
         {
          isFavorite ?
           <IoHeart onClick={toggleFavoritePokemon} size={30} className="text-red-600 cursor-pointer"  /> 
           : <IoHeartOutline onClick={toggleFavoritePokemon} className="cursor-pointer" size={30}  />
         }
        </div>
        <div className="pl-3">
          <p className="text-sm font-medium text-gray-800 leading-none">
            {isFavorite ? 'Favorito' : 'No es favorito'}
          </p>
          <p className="text-xs text-gray-500">View your campaigns</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
