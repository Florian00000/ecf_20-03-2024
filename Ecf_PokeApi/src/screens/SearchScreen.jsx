import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Search from '../components/Search';
import { useSelector } from 'react-redux';
import PokemonCube from '../components/PokemonCube';

const SearchScreen = ({navigation}) => {
    const filteredList = useSelector((state) => state.pokemon.filteredList)
    // console.log(filteredList);

    return (
        <View>
            <Search/>
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
