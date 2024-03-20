import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/"

export const fetchListPokemons = createAsyncThunk("pokemons/fetchListPokemons", async () => {
    const response = await axios.get(`${BASE_URL}pokemon?limit=30`);
    const data = await response.data;
    const pokemons = [];

    for (const pokemon of data.results) {
        pokemons.push(pokemon)
    }

    return pokemons
})

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemons: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchListPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload;
            console.log(action.payload);
        })
    }
})

export default pokemonSlice.reducer;