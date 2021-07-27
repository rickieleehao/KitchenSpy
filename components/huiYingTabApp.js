import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, HeaderButton, Item, HiddenItem, OverflowMenu, OverflowMenuProvider } from 'react-navigation-header-buttons';

//To test, just copy all and paste in App.js.

/*To change the theme of App with react native paper. Still in progress. Pending till Thursday 29/7. 
  Temporary the color/style is set independently in each component.*/
/*const MyTheme = {
  dark: false,
  colors: {
    primary: "#A4E8E0",
    background: "#F8EA8C"
    //card: 'rgb(255, 255, 255)',
    //text: 'rgb(28, 28, 30)',
    //border: 'rgb(199, 199, 204)',
    //notification: 'rgb(255, 69, 58)',
  },
};*/

/*1. Suggest to use diffrent function components for multiple screen in bottom tab because their header is not set in it. 
     No similarity anymore.
  2. Suggest to use custom component for containers in KitchenScreen because they will share same view of food list.*/
const KitchenScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Kitchen Spy</Text>
    </View>
  );
}

const BuyListScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Shopping List / WishList</Text>
    </View>
  );
}

const RecipeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Recipe</Text>
    </View>
  );
}

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile / Setting</Text>
    </View>
  );
}

/*Ignore below TabScreen first. For custom component use in work later.*/
/*const TabScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{props.textShown}</Text>
    </View>
  );
}*/

/*Declare style of every header button. So buttons in header all follow this style.*/
const MaterialIconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcons} iconSize={26} color={"#E1C340"} {...props} />
);

//In case you want to reuse it in other screen. Else, you create it in Overflowmenu only. onPress for any.
const ReusableHiddenItem = ({ onPress }) => <HiddenItem title="hidden2" onPress={onPress} />;

/*Create stack navigator for each tab. Enable you to have multiple screen in one tab. Enable easy header setting.*/
const KitchenStack = createStackNavigator();
const KitchenStackScreen = () => {
  return (
    <KitchenStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#A4E8E0',
        },
        headerTintColor: '#E1C340',
        headerTitleStyle: {
          fontSize: 26,
          fontWeight: 'bold'
        },
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={MaterialIconsHeaderButton}>
            <Item title="search" iconName="search" onPress={() => alert('search')} />
            <OverflowMenu
              style={{ marginHorizontal: 10 }}
              OverflowIcon={() => <MaterialIcons name="more-vert" size={26} color="#E1C340" />}
            >
              <HiddenItem title="hidden1" onPress={() => alert('hidden1')} />
              <ReusableHiddenItem onPress={() => alert('hidden2')} />
            </OverflowMenu>
          </HeaderButtons>
        )
      }}
    >
      <KitchenStack.Screen
        name="KitchenStack"
        component={KitchenScreen}
        options={{ title: 'Kitchen Spy' }} />
    </KitchenStack.Navigator>
  );
}

const BuyListStack = createStackNavigator();
const BuyListStackScreen = () => {
  return (
    <BuyListStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#A4E8E0',
        },
        headerTintColor: '#E1C340',
        headerTitleStyle: {
          fontSize: 26,
          fontWeight: 'bold'
        },
      }}
    >
      <BuyListStack.Screen
        name="BuyListStack"
        component={BuyListScreen}
        options={{ title: 'Shopping List' }} />
    </BuyListStack.Navigator>
  );
}

const RecipeStack = createStackNavigator();
const RecipeStackScreen = () => {
  return (
    <RecipeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#A4E8E0',
        },
        headerTintColor: '#E1C340',
        headerTitleStyle: {
          fontSize: 26,
          fontWeight: 'bold'
        },
      }}
    >
      <RecipeStack.Screen
        name="RecipeStack"
        component={RecipeScreen}
        options={{ title: 'Recipe' }} />
    </RecipeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#A4E8E0',
        },
        headerTintColor: '#E1C340',
        headerTitleStyle: {
          fontSize: 26,
          fontWeight: 'bold'
        },
      }}
    >
      <ProfileStack.Screen
        name="ProfileStack"
        component={ProfileScreen}
        options={{ title: 'Profile' }} />
    </ProfileStack.Navigator>
  );
}

/*Create tab navigator for stack screens*/
const Tab = createMaterialBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <OverflowMenuProvider>
        <Tab.Navigator
          initialRouteName="KitchenStackScreen"
          activeColor="#E1C340"
          inactiveColor="#808080"
          labelStyle={{ fontSize: 10 }}
          barStyle={{ backgroundColor: "#A4E8E0" }}
        //shifting={false}
        >
          <Tab.Screen
            name="KitchenTab"
            component={KitchenStackScreen}
            options={{
              tabBarLabel: 'Kitchen',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="fridge" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="BuyListTab"
            component={BuyListStackScreen}
            options={{
              tabBarLabel: 'Shopping',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cart" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="RecipeTab"
            component={RecipeStackScreen}
            options={{
              tabBarLabel: 'Recipe',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="chef-hat" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="ProfileTab"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              )
            }}
          />
        </Tab.Navigator>
      </OverflowMenuProvider>
    </NavigationContainer>
  );
}

export default App;