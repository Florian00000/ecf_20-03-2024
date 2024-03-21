import React, { useEffect, useLayoutEffect, useState } from 'react';
import {View, StyleSheet, Text, Image, FlatList, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon } from '../store/pokemonSlice';

const DetailsPokemonScreen = ({navigation, route}) => {
    const pokemon = route.params;
    const dispatch = useDispatch();
    const [isCatched, setIsCatched] = useState(false);
    const collection = useSelector((state) => state.pokemon.collection);
    

    useLayoutEffect(() => {
        navigation.setOptions({title: pokemon.name})
    }, [])

    useEffect(() => {
        const isCollected = collection.some(poke => poke.id === pokemon.id)
        if (isCollected) {
            setIsCatched(true)
        }
    }, [])
    

    const handleCollection = () => {
        //Création d'un nouvel objet pour éviter d'envoyer trop d'info
        const catchedPokemon = {
            id:pokemon.id,
            name: pokemon.name,
            url: pokemon.url

        }
        setIsCatched(!isCatched);
        console.log(catchedPokemon);
        dispatch(addPokemon(catchedPokemon));
    }

    return (
        <View style={styles.main}>
            <Image style={styles.image} source={{uri: pokemon.sprites.other["official-artwork"].front_default}}/>
            <View style={styles.section}>
                <View style={styles.mainInfo}>
                    <Text style={[styles.textColor, styles.textTitle]}>{pokemon.name}</Text>
                    <Text style={styles.textColor}>N° {pokemon.id}</Text>         

                </View>
                <View style={styles.typeDisposition}>
                    {pokemon.types.map((type, index) => (
                        <Text key={index} style={[styles.textColor, styles.type]}>{type.type.name} </Text>
                    ))}
                </View>
                <View>
                    <Text style={styles.textColor}>PV: {pokemon.stats[0].base_stat}</Text>
                    <Text style={styles.textColor}>Attaque: {pokemon.stats[1].base_stat}</Text>
                    <Text style={styles.textColor}>Défense: {pokemon.stats[2].base_stat}</Text>
                    <Text style={styles.textColor}>Attaque-spéciale: {pokemon.stats[3].base_stat}</Text>
                    <Text style={styles.textColor}>Défense-spéciale: {pokemon.stats[4].base_stat}</Text>
                    <Text style={styles.textColor}>Vitesse: {pokemon.stats[5].base_stat}</Text>
                </View>
                <Pressable style={styles.catchPokemon  } onPress={handleCollection}>
                    <Icon name='catching-pokemon' color={isCatched? "black": "white"} size={50}/>
                </Pressable>
            </View>
            
        </View>
    );  
}

const styles = StyleSheet.create({
    main: {
        alignItems: "center"
    },
    image: {
        width: 350,
        height: 350
    },
    section: {
        backgroundColor: "#fb6c6c",
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20        
    },
    textColor: {
        color: "white"
    },
    textTitle: {
        fontWeight: "bold",
        fontSize: 30
    },
    mainInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline"
    },
    type: {
        backgroundColor: "#fe3e31",
        padding: 5,
        paddingHorizontal: 15,
        marginRight: 10,
        borderRadius: 4        
    },
    typeDisposition :{
        flexDirection: "row",
        marginVertical: 5
    },
    catchPokemon: { 
        height: 250,     
        marginLeft: "auto",
        paddingTop: 190
    }   
})  

export default DetailsPokemonScreen;
