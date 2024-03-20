import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>Accueuil</Text>
            <Button title='Test' onPress={() => navigation.navigate("DetailsPokemon")}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
