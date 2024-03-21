import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Search from '../components/Search';
import { useSelector } from 'react-redux';
import PokemonCube from '../components/PokemonCube';

const SearchScreen = ({navigation}) => {
    const filteredList = useSelector((state) => state.pokemon.filteredList);
    const isPending = useSelector((state) => state.pokemon.isPending);
    // console.log(filteredList);

    return (
        <View>
            <Search/>
            {!filteredList.length && !isPending && <Text>Pas de résultat pour votre recherche</Text>}
            {isPending && <Text>Recherche en Cours</Text>}
            <FlatList
            data={filteredList}
            renderItem={pokemon => (
                <PokemonCube pokemon={pokemon.item} navigation={navigation} />
            )}
            keyExtractor={(_pokemon, index) => {
                return index
            }}
            numColumns={2}
            columnWrapperStyle={{justifyContent: "center"}}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchScreen;
