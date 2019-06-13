import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  TextInput,
  NetInfo,
  TouchableOpacity
} from 'react-native';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
import Card from './Card_Dockerfile';

export default class CardMaintainer_Dockerfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: null,
      ContainerStauts: null,
      connectionInfo: null,
      dockerID: null,
      text: null,

    };
  }

  cutString(str, len, suffix) {
    if (!str) return "";
    if (len <= 0) return "";
    if (!suffix) suffix = "";
    var templen = 0;
    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 255) {
        templen += 2;
      } else {
        templen++
      }
      if (templen == len) {
        return str.substring(0, i + 1) + suffix;
      } else if (templen > len) {
        return str.substring(0, i) + suffix;
      }
    }
    return str;
  }

  setDockerId() {
    var ID = cutString(this.props.infoBody, 8);
    this.setState({ dockerID: ID });

  };

  setModalVisible() {

  };
  // componentWillMount(){
  //   setDockerId();

  // }
  componentDidMount() {
    console.warn("Maintainer")

  }
  render() {
    return (
      <View >
        <Card body={
          <View style={styles.card}>
            <View style={styles.cordTop}>
            <Text style={styles.fontTitle} >指定作者</Text>



            </View>
            {/* <View style={styles.cordDoc}>
              <Text >ddd</Text>
              <Text >ddd</Text>
    

            </View> */}
            <View style={styles.cordInput}>
            <Text style={styles.fontTitle} >MAINTAINER </Text>
            {/* <Text style={styles.fontTitle} >指定作者</Text> */}
            <TextInput
          style={styles.Input}
          placeholder="  指定作者"
          // onChangeText={(text) => this.setState({text})}
          onChangeText={(text) => { this.state.text = text; }}
        />

            </View>
         
            {/* <View style={styles.cordBottom}>
        
            <TouchableOpacity style={styles.BottomL} onPress={() => { this.setModalVisible() }} >
              <Text >L</Text>

              </TouchableOpacity>

              <TouchableOpacity style={styles.BottomR} onPress={() => { this.setModalVisible() }} >
              <Text >R</Text>
              </TouchableOpacity>
            </View> */}







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


const styles = StyleSheet.create({
  card: {
    flex: 1, 
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: width * 0.9,
    // padding: 15,
    // backgroundColor: '#FFFFFF',
    borderRadius: 15,
    // marginVertical: 10,
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
    // marginHorizontal: 10,
  },
  fontTitle:{
    fontSize: 18, 

  },
  fontBody:{
    fontSize: 10, 

  },
  Input:{
    // height: 40,
    fontSize: 18, 
width:width*0.4,
backgroundColor:"#454F63",
color:"#FFF",
   borderBottomWidth: 1,
    borderBottomColor: '#454F63',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  cordTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-start",

    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // backgroundColor: '#FFa',
    paddingLeft: 15,


    paddingTop: 15,
    paddingBottom: 5,
  },  cordDoc: {
    flex: 1,
    paddingVertical: 5,

    flexDirection: "column",
    justifyContent: 'center',
    paddingHorizontal: 5,
     backgroundColor: '#aFF',
  },
  cordInput: {
    flex: 1,
    paddingBottom: 10,

    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    //  backgroundColor: '#FFaaFF',
  },  cordSelect: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#6F12F2',
  }, cordBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingHorizontal: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#cFcF',
    // borderRadius: 10 5 5 5 ,
  },BottomR: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 15,
    backgroundColor: '#ff0000',
  },BottomL: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 0,
    backgroundColor: '#0000ff',
  }
});