import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

/* 
{
  
  favorites:{
    '1':{id:1,name:'Bulbasaur'},
    '2':{id:2,name:'Ivysaur'},
    '3':{id:3,name:'Venusaur'},
  }
}
*/
interface PokemonsState {
    [key:string]:SimplePokemon;

}
const getInitialState = ():PokemonsState => {
  if(typeof localStorage === 'undefined') return {};
  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
  return favorites;
}

const initialState:PokemonsState = {
  //favorites:{},
 ...getInitialState(),
  //  '1':{id:'1',name:'Bulbasaur'},
  //  '3':{id:'3',name:'Venusaur'},
  //  '6':{id:'6',name:'Charizard'},
  //  '7':{id:'7',name:'Squirtle'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    // setFavoritePokemons(state, action: PayloadAction<{[key:string]:SimplePokemon}>){
    //   state.favorites = action.payload;
    // },
    toggleFavorite(state,action:PayloadAction<SimplePokemon>) {
        const pokemon = action.payload;
        const {id} = pokemon;
        if(!!state[id]){
            delete state[id];
            return;
        }else{
            state[id] = pokemon;
        }
        //TODO esto no se debe de hacer en Redux
        localStorage.setItem('favorite-pokemons',JSON.stringify(state));
    }
  }
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer