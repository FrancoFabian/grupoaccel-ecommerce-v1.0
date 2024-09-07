import { SimplePokemon } from "@/pokemons"
import { PokemonsCard } from "./PokemonsCard";

interface Props {
    pokemons:SimplePokemon[];
}

export const PokemonGrid = ({pokemons}:Props) => {
  return (
    <div className="flex flex-wrap gap-10  items-center justify-center">
       {
        pokemons.map(pokemon => (

            <PokemonsCard key={pokemon.id} pokemon={pokemon}/>

        ))
       }
      </div>
  )
}
