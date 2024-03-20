import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import PersonnalCollectionScreen from './src/screens/PersonnalCollectionScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsPokemonScreen from './src/screens/DetailsPokemonScreen';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function MyStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="DetailsPokemon" component={DetailsPokemonScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Provider store={store}>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={MyStackNavigator} options={{headerShown: false}}/>
                <Tab.Screen name="CollectionScreen" component={PersonnalCollectionScreen} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
