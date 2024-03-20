import React, { useEffect } from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListPokemons } from '../store/pokemonSlice';
import PokemonCube from '../components/PokemonCube';

const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const pokemons = useSelector((state) => state.pokemon.pokemons)

    useEffect(() => {
        dispatch(fetchListPokemons())
    }, [])

    return (
        <View>            
            <FlatList
            data={pokemons}
            renderItem={pokemon => (
                <PokemonCube pokemon={pokemon.item} navigation={navigation} />
            )}
            keyExtractor={(_pokemon, index) => {
                return index
            }}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'center'}}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
