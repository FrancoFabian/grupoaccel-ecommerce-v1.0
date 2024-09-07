import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/ui/Pokemons/PokemonGrid";
import Image from 'next/image'
import { notFound } from "next/navigation";
const getPOkemons = async( limit = 151,offset=0) : Promise<SimplePokemon[]> =>{
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());
    const pokemons = data.results.map(pokemon =>({
        id:pokemon.url.split('/').at(-2)!,
        name:pokemon.name
    }))

   // throw new Error('Esto es un error que no deberia suceder');
   //throw notFound();
   return pokemons;
}
export default async function PokemonsPage() {
    const pokemons = await getPOkemons();
  return (
    <div className="flex felx-col flex-wrap">
      <span className="text-5xl my-2 text-white">Listado de Pokemons <small>estatico</small></span>
      <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}