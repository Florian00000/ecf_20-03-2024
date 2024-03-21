import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux';
import { fetchSearchPokemon } from '../store/pokemonSlice';

const Search = () => {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();

    const onChangeText = (enteredText) => {
        setInputText(enteredText);       
    }

    const handleSearch = () => {
        dispatch(fetchSearchPokemon(inputText))
        setInputText("");
    }

    return (
        <View style={styles.bar}>
            <TextInput placeholder='Rechercher' value={inputText} onChangeText={onChangeText} style={styles.input} />
            <Pressable style={styles.pressebleStyle} onPress={handleSearch}>
                <Icon name='search' size={25} color={"black"} style={styles.iconStyle}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: "#e8e8e8",
        marginTop: 5,
        marginLeft: 10,
        paddingLeft:15,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius:25,
        width:"85%"
    },
    bar: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconStyle: {        
              
    },
    pressebleStyle: {
        backgroundColor: "#dadada",
        width: 50,
        height: 50,
        marginTop: 5,        
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25 ,
        paddingLeft: 10,
        paddingTop:10
    }
})

export default Search;
