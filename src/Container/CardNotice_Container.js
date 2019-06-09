import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
    NetInfo,
  TouchableOpacity
} from 'react-native';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
import Card from './Card_Container';

export default class CardNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isConnected: null,
        ContainerStauts: null,

        connectionInfo: null
    };
}


  setModalVisible(){

  };
  componentDidMount() {
    console.warn("test")
      //检测网络是否连接
      NetInfo.isConnected.fetch().done((isConnected) => {
          this.setState({isConnected});
      });
  
      //检测网络连接信息
      NetInfo.fetch().done((connectionInfo) => {
          this.setState({connectionInfo});
      });
  
      //监听网络变化事件
      NetInfo.addEventListener('change', (networkType) => {
          this.setState({isConnected: networkType})
      })
  }
  render() {
    return (
      <View >
        <Card body={
          <View style={{ flex: 1, flexDirection: 'row', }}>
          
        
          {this.state.isConnected ?  <Image style={styles.icon} source={require('../img/icon_on.png')} />:   <Image style={styles.icon} source={require('../img/icon_off.png')} /> }

          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center',paddingHorizontal:10, }}>
              {/* <Text style={{ fontSize: 22, }}>{this.props.infoTitle}</Text> */}
              <Text style={{ fontSize: 12,}}>{"Python3_23"}</Text>
              <Text style={{ fontSize: 12,}}>{"Python3_23"}</Text>
              {/* <Text style={{ fontSize: 14, flex: 1, lineHeight: 24, justifyContent: 'center', alignItems: 'center' }}>
              {this.props.infoBody}</Text> */}
            </View>

        

          {this.state.ContainerStauts ? 
                <TouchableOpacity onPress={() => {this.setModalVisible()}} >
                <Image style={styles.icon} source={require('../img/icon_start.png')} /> 
                </TouchableOpacity>
             :   
             <TouchableOpacity onPress={() => {this.setModalVisible()}} >
             <Image style={styles.icon} source={require('../img/icon_stop.png')} /> 
             </TouchableOpacity>
             }




          <TouchableOpacity onPress={() => {this.setModalVisible()}} >
          <Image style={styles.icon} source={require('../img/icon_restart.png')} /> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.setModalVisible()}} >
          <Image style={styles.icon} source={require('../img/icon_log.png')} /> 
          </TouchableOpacity>



                {/* <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
              
                            <Text style={{ fontSize: 20, flex: 1, lineHeight: 24, justifyContent: 'center', alignItems: 'center' }}>
              {"NUTC_R720XD"}</Text>
            </View> */}

            
        
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