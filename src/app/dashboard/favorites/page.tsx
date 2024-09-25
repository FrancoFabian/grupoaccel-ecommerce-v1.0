import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/ui/Pokemons/PokemonGrid";
export const metadata= {
  title: "Favoritos",
  description: "Listado de los pokemonns fovoritos",
};

export default async function FavoritesPage() {
    
  return (
    <div className="flex felx-col flex-wrap">
      <span className="text-5xl my-2 text-white">Listado de Pokemons <small>favoritos</small></span>
      <PokemonGrid pokemons={[]}/>
    </div>
  );
}