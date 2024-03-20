import React, { useLayoutEffect } from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';

const DetailsPokemonScreen = ({navigation, route}) => {
    const pokemon = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({title: pokemon.name})
    }, [])

    console.log(pokemon.types);

    return (
        <View style={styles.main}>
            <Image style={styles.image} source={{uri: pokemon.sprites.front_default}}/>
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
    }
})  

export default DetailsPokemonScreen;
