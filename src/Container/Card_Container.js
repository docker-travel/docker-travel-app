import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class Card extends Component {
  render() {
    return (
      <View style={[styles.card]}>

        {/* <Image style={styles.backgroundimg} source={require('../img/docker_on.png')} />  */}
        <View style={styles.background}>

{this.props.body}

</View>

      </View>

    );
  }
}


{/*Ex
  <Card body={
  <View style={{ flex: 1, }}>
    <Text style={{ fontSize: 22, }}>HI</Text>
  </View>
}/> */}


const styles = StyleSheet.create({
  card: {
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: width * 0.9,
    padding: 5,
    backgroundColor: '#6E7493',
    borderRadius: 50,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    marginHorizontal: width * 0.05,
  },
  background: {
    // height: 90,
    // width: 350,
    // position: 'absolute',
    // resizeMode: 'cover',
  },
  backgroundimg: {
    height: 90,
    width: 350,
    position: 'absolute',
    // paddingVertical: 15,
//paddingRight:100,
// marginRight:20,
    // resizeMode: 'cover',
  },
});