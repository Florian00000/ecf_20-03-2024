import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/"

export const fetchListPokemons = createAsyncThunk("pokemons/fetchListPokemons", async () => {
    const response = await axios.get(`${BASE_URL}pokemon?limit=30`);
    const data = await response.data;
    const pokemons = {
        list: [],
        next: data.next,
        previous: data.previous
    };

    for (const pokemon of data.results) {
        pokemons.list.push(pokemon)
    }

    return pokemons
})

export const fetchNextListPokemons = createAsyncThunk("pokemons/fetchNextListPokemons", async (newUrl) => {    
    const response = await axios.get(newUrl);
    const data = await response.data
    const pokemons = {
        list: [],
        next: data.next,
        previous: data.previous
    };
    
    for (const pokemon of data.results) {
        pokemons.list.push(pokemon)
    }
    
    // console.log(pokemons);
    return pokemons
})

export const fetchSearchPokemon = createAsyncThunk("pokemons/fetchSearchPokemon", async (value) => {
    //On recherche si il s'agit d'un pokemon unique       
    const pokemons = [];
    try {
        const response = await axios.get(`${BASE_URL}pokemon/${value}`);
        const data = await response.data;
        
        if (data) {
            // console.log(data);
            const pokemon = {
                name: data.name,
                url: `${BASE_URL}pokemon/${data.id}`
            }
            console.log(pokemon);
            pokemons.push(pokemon)
        }        
    } catch (error) {
        console.log("Erreur lors de la recherche par nom:", error);
    }

    //On recherche ensuite par type
    try {
        const reponseType = await axios.get(`${BASE_URL}type/${value}/`)    
        const dataType = await reponseType.data;
        console.log(dataType);
    
        if (dataType) {
            for (const poke of dataType.pokemon) {
                pokemons.push(poke.pokemon)
            }
        }        
    } catch (error) {
        console.log("Erreur lors de la recherche par type:", error);
    }

    return pokemons
})

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemons: [],
        next: null,
        previous: null,
        filteredList: [],
        isPending: false,
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchListPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload.list;
            state.next = action.payload.next;
            state.previous = action.payload.previous;
            // console.log(action.payload);
        });
        builder.addCase(fetchNextListPokemons.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.pokemons = action.payload.list;
            state.next = action.payload.next;
            state.previous = action.payload.previous;
        });
        builder.addCase(fetchSearchPokemon.fulfilled, (state, action) => {
            state.isPending = false;
            state.filteredList = action.payload;
            // console.log(state.filteredList);
        });
        builder.addCase(fetchSearchPokemon.pending, (state, action) => {
            state.isPending = true;
        })
    }
})

export default pokemonSlice.reducer;