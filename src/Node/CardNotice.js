import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
import Card from './Card';

export default class CardNotice extends Component {
  render() {
    return (
      <View >
        <Card body={
          <View style={{ flex: 1, flexDirection: 'column', }}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
              {/* <Text style={{ fontSize: 14, flex: 1, lineHeight: 24, justifyContent: 'center', alignItems: 'center' }}>
              {this.props.infoBody}</Text> */}
                            <Text style={{ fontSize: 20,color:"#fff", flex: 1, lineHeight: 24, justifyContent: 'center', alignItems: 'center' }}>
              {"NUTC_R720XD"}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center',paddingTop:10, }}>
              {/* <Text style={{ fontSize: 22, }}>{this.props.infoTitle}</Text> */}
              <Text style={{ fontSize: 22, color:"#fff",}}>{"01"}</Text>

            </View>
        
          </View>
        } />
      </View>
    );
  }
}


{/*Ex
  <CardNotice infoTitle={} infoBody={}/> 
  <CardNotice infoTitle={msg.announcement[1].title} infoBody={msg.announcement[2].detail}/> 

*/}
//style={[styles.card]}


const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    // padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
       // padding:10,
        // paddingVertical: 15,
//paddingRight:100,
// marginRight:20,
    marginHorizontal: 10,
  }
});