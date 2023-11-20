// App.tsx - Ponto de entrada para a aplicação React Native Expo em TypeScript

// Importar módulos necessários
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar telas personalizadas
import Home from './pages/home';
import Search from './pages/search';
import Prices from './pages/prices';
import Markets from './pages/markets';
import Products from './pages/products';

// Criar um navegador de pilha
const Stack = createStackNavigator();

// Componente principal contendo o contêiner de navegação e o navegador de pilha
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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