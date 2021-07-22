import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Kitchen from './bottomTab/Kitchen';
import ShoppingList from './bottomTab/ShoppingList';
import Recipe from './bottomTab/Recipe';
import Profile from './bottomTab/Profile';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Kitchen" component={Kitchen} />
        <Tab.Screen name='ShoppingList' component={ShoppingList} />
        <Tab.Screen name="Recipe" component={Recipe} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;