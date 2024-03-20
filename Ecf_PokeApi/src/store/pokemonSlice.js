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

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemons: [],
        next: null,
        previous: null
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
            console.log(action.payload);
            state.pokemons = action.payload.list;
            state.next = action.payload.next;
            state.previous = action.payload.previous;
        })
    }
})

export default pokemonSlice.reducer;