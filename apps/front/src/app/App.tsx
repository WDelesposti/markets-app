import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from './pages/signin';
import Home from './pages/home';
import Search from './pages/search';
import Prices from './pages/prices';
import Markets from './pages/markets';
import Products from './pages/products';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthScreen">
        <Stack.Screen name="App" component={AuthScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Prices" component={Prices} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Markets" component={Markets} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;