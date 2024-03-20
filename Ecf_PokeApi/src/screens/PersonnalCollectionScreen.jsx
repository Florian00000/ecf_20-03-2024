import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import PokemonCube from '../components/PokemonCube';

const PersonnalCollectionScreen = ({navigation}) => {
    const collection = useSelector((state) => state.pokemon.collection)

    console.log(collection);

    return (
        <View>
            <Text>Collecion</Text>
            <FlatList
            data={collection}
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

export default PersonnalCollectionScreen;
