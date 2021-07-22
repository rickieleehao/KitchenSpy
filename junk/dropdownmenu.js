import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";

export default class HomeActivity extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (

            <MenuProvider style={{ flexDirection: "column", padding: 15, alignItems: "flex-end" }}>
                <Menu onSelect={value => alert(`You Clicked : ${value}`)}>

                    <MenuTrigger  >
                        <View style={styles.views}>
                            <Text style={styles.headerText}>Kitchen Spy</Text>
                        </View>

                    </MenuTrigger  >

                    <MenuOptions>
                        <MenuOption value={"Home"}>
                            <Text style={styles.menuContent}>Home</Text>
                        </MenuOption>
                        <MenuOption value={"Container"}>
                            <Text style={styles.menuContent}>Container</Text>
                        </MenuOption>
                        <MenuOption value={"Shopping List"}>
                            <Text style={styles.menuContent}>Shopping List</Text>
                        </MenuOption>
                        <MenuOption value={"Wish List"}>
                            <Text style={styles.menuContent}>Wish List</Text>
                        </MenuOption>
                        <MenuOption value={"Log out"}>
                            <Text style={styles.menuContent}>Log out</Text>
                        </MenuOption>
                        <MenuOption value={3} disabled={true}>
                            <Text style={styles.menuContent}>Disabled Menu</Text>
                        </MenuOption>
                    </MenuOptions>

                </Menu>
            </MenuProvider>

        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        color: "white",
        fontSize: 20,
        margin: 10,
        fontWeight: "bold"
    },
    menuContent: {
        color: "brown",
        fontWeight: "bold",
        padding: 2,
        fontSize: 20
    },
    views: {
        backgroundColor: "brown"
    },


});