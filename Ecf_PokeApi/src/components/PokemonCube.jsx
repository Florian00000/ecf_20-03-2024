import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import axios from 'axios';

const PokemonCube = ({pokemon, navigation}) => {  

  // console.log(pokemon);

  const [pokemonDetail, setPokemonDetail] = useState(null);

  const styles = StyleSheet.create({
    cube: {
      backgroundColor: "#e8e8e8",
      width: 190,
      height: 190,
      borderRadius: 10,
      margin: 15,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 8
    },
    textCube: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "black"
    },
    textNumber: {
      fontWeight: "bold"
    },
    image: {
      width: 100,
      height:100
    }
  });


  useEffect(() => {
    axios.get(pokemon.url)
    .then(response => {
      setPokemonDetail(response.data)
    })
    .catch(error => console.error(error));
  }, [pokemon])


  const redirect = (pokemonDetail) => {
    const details = {...pokemonDetail, url: pokemon.url}    
    navigation.navigate("DetailsPokemon", details)
  }

  return (
    <Pressable onPress={() => redirect(pokemonDetail)}>
      <View style={styles.cube}>
       {pokemonDetail && pokemonDetail.sprites && pokemonDetail.sprites.front_default ? (
        <Image style={styles.image} source={{uri: pokemonDetail.sprites.front_default}}/>
        ) : null}
        <Text style={styles.textNumber}>N° {pokemonDetail?.id} </Text>
        <Text style={styles.textCube}>{pokemon.name} </Text>        
      </View>
    </Pressable>
  );
};

export default PokemonCube;
