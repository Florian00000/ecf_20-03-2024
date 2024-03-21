import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import PokemonCube from '../components/PokemonCube';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const PersonnalCollectionScreen = ({navigation}) => {
    // const collection = useSelector((state) => state.pokemon.collection)
    const [collection, setCollection] = useState([]); 

    const getCollection = async () => {
        try {
            const value = await AsyncStorage.getItem('collection');
            if (value !== null) {
                const tabCollection = await JSON.parse(value)
                setCollection(tabCollection)
            } else {
                await AsyncStorage.setItem("collection", JSON.stringify([]))
            }
        } catch (error) {
            console.log(error)
        }
    }    

    useEffect(() => {
        getCollection()
    }, [])

    //Hook qui se lance à chaque fois que l'utilisateur retourne sur cet écran
    useFocusEffect(
        React.useCallback(() => {
            getCollection();
        })
    )

    console.log(collection);

    return (
        <View>            
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

const styles = StyleSheet.create({
   
})

export default PersonnalCollectionScreen;
