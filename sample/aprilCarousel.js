import React from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from 'react-native';

const { width } = Dimensions.get("window");
const height = width * 0.6; //60%
const images = [
  'https://images.pexels.com/photos/842682/pexels-photo-842682.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/1928079/pexels-photo-1928079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/6737173/pexels-photo-6737173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
]

export default class carousel extends React.Component {
  state = {
    active: 0
  }

  change = ({nativeEvent}) =>{
    const slide = Math.ceil(nativeEvent.contentOffset.x/ nativeEvent.layoutMeasurement.width);
    if(slide !== this.state.active){
      this.setState({active: slide});
    }
  }

  render() {
    return (
      <View style={style.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll= {this.change}
          showsHorizontalScrollIndicator={false}
          style={style.scroll}
        >
          {
            images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={style.image} />

            ))
          }
        </ScrollView>
        <View style={style.pagination}>
          {
            images.map((i, k) => (
              <Text key={k} style={k == this.state.active ? style.pagingActiveText : style.pagingText}>⬤</Text>
            ))
          }

        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: { 
    marginTop: 50, 
    width, 
    height 
  },
  scroll: { width, height },
  image: { width, height, resizeMode: 'cover' },
  pagination: { 
    flexDirection: 'row', 
    position: 'absolute', 
    bottom: 0, 
    alignSelf: 'center' 
},
  pagingText: { 
    fontSize: (width /30), 
    color: '#888', 
    margin: 3 
  },
  pagingActiveText: { 
    fontSize: (width /30), 
    color: '#fff', 
    margin: 3 
  }

})