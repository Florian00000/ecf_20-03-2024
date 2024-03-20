import React, { useEffect } from 'react';
import {View, StyleSheet, Text, FlatList, Button, Pressable} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListPokemons, fetchNextListPokemons } from '../store/pokemonSlice';
import PokemonCube from '../components/PokemonCube';

const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const pokemons = useSelector((state) => state.pokemon.pokemons)
    const previous = useSelector((state) => state.pokemon.previous)
    const next = useSelector((state) => state.pokemon.next)

    useEffect(() => {
        dispatch(fetchListPokemons())
    }, [])    

    return (
        <View style={styles.main}>
            <View style={styles.pagination}>
                <Pressable style={[styles.buttonPage,  { opacity: previous ? 1 : 0.5 }]} onPress={() => dispatch(fetchNextListPokemons(previous))} disabled={!previous}>
                    <Text style={styles.buttonText}>Prec</Text>    
                </Pressable> 
                <Pressable style={[styles.buttonPage, { opacity: next ? 1 : 0.5 }]} onPress={() => dispatch(fetchNextListPokemons(next))} disabled={!next}>
                    <Text style={styles.buttonText}>Suiv</Text>    
                </Pressable>           

            </View>            
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

const styles = StyleSheet.create({
    pagination: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    buttonPage : {
        backgroundColor: "#f03d2c",
        width: 50,
        height:35,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,        
    },
    buttonText :{
        color: "white",
        fontWeight: "bold"
    },
    main: {
        paddingBottom: 40
    }
})

export default HomeScreen;
