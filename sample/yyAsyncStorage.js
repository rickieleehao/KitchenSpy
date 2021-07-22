import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const textStore = 'textStore';

export default class FileSystemTest extends Component {

  state = { //object
    text: 'original'
  }

  storeData = async (key, text) => {
    try {
      await AsyncStorage.setItem(textStore, JSON.stringify(text))
      this.setState({ text });
    } catch (e) {
      console.log(e);
    }
  }


  getData = async () => {
    try {
      const text = await AsyncStorage.getItem(textStore)
      if (text !== null) {
        this.setState({ text: JSON.parse(text) });
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View
        style={styles.view}
      >
        <Button
          title="Write"
          style={styles.button}
          onPress={() => { this.storeData(textStore, "newText"); }}
        />
        <Button
          title="Read"
          style={styles.button}
          onPress={() => { this.getData(); }}
        />
        <Button
          title="Display"
          style={styles.button}
          onPress={() => { alert(this.state.text); }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  view: {

  },

  button: {

  },
});