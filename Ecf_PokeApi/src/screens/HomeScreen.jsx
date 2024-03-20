import React, { useEffect } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchListPokemons } from '../store/pokemonSlice';

const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListPokemons())
    }, [])

    return (
        <View>
            <Text>Accueuil</Text>
            <Button title='Test' onPress={() => navigation.navigate("DetailsPokemon")}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
