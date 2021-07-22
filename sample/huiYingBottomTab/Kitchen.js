import 'react-native-gesture-handler';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Fridge from '../topTab/Fridge';
import Pantry from '../topTab/Pantry';
import Freezer from '../topTab/Freezer';

const Tab = createMaterialTopTabNavigator();

function Kitchen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Fridge" component={Fridge} />
            <Tab.Screen name="Pantry" component={Pantry} />
            <Tab.Screen name="Freezer" component={Freezer} />
        </Tab.Navigator>
    );
}

export default Kitchen;