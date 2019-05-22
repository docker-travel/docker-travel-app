
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
   StyleSheet,
    Text,
     View,
     WebView,
     ScrollView,
     TextInput,
     TouchableOpacity,
     Alert,
     Image,
     ImageBackground,
     AsyncStorage,
     Dimensions,
    } from 'react-native';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window'); 
import { SafeAreaView, } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

import codePush from 'react-native-code-push'
//code-push release-react book-ios ios -m -d Production
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
type Props = {};
export default class BookRead extends Component<Props> {
//  //向HTML发送数据
//  _postMessage = () => {
//   this.setState({isPostMessage: true, isHtml: true})

//   setTimeout(() => {
//       if (this.webview) {
//           this.webview.postMessage('"Hello" 我是RN发送过来的数据');
//       }
//   }, 4000);
// }
// //接收HTML发出的数据
// _onMessage = (e) => {
//   this.setState({
//       messagesReceivedFromWebView: this.state.messagesReceivedFromWebView + 1,
//       message: e.nativeEvent.data,
//   })
//   Alert.alert(e.nativeEvent.data)
// }
constructor(props){
  super(props);
  this.indexHistory = [0];
  this.state = {
    all_font_num: 0,
    index: 0,
    reading:0,
    data: "這裡還沒有文章喔",
    lang:true,
    num:1,
    font:true,
    fontFamily:"",

};
}




componentWillMount() {
  // data=TS(text);

}
componentDidMount() {
 
    // codePush.sync()
  //   AppState.addEventListener("change", (newState) => {
  //     newState === "active" && codePush.sync();
  // });
  codePush.sync({
    updateDialog: {
      appendReleaseDescription: true,
      descriptionPrefix:'\n\n更新内容：\n',
      title:'更新',
      mandatoryUpdateMessage:'',
      mandatoryContinueButtonLabel:'更新',
    },
    mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,
    deploymentKey: "1C--y-MgJBGo3fE3n2m2y5x7wwSXb8c3ce31-f1dc-4382-a512-82d8f44b7174",
  });
      console.warn("更新");
    


}

handleClick = () => {
  this.setState({ 
    data: this.state.lang ? Simplized(this.state.data) : Traditionalized(this.state.data),
    lang:!this.state.lang
  });
  this.indexHistory.pop()
  this.refs.webviewRef.postMessage(JSON.stringify({
    content:this.state.data,
    index: this.indexHistory[this.indexHistory.length - 1]
  }))
  //參考
  // this.setState({ data: (this.state.lang ? Simplized : Traditionalized)(this.state.data) });
}

clear() {
  var _that = this;
  AsyncStorage.clear(function (err) {
    if (!err) {
      _that.setState({
        name: "",
        phone: ""
      });
      alert('存储的数据已清除完毕!');
    }
  });
}

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

{/* <Text  color='#6787A0' >Home!</Text>
<Icon name="code" size={30} color="#900" />

<Icon name="battery-full" size={30} color="#6787A0" />
<Icon name="battery-three-quarters" size={30} color="#900" />
<Icon name="battery-half" size={30} color="#900" />
<Icon name="battery-quarter" size={30} color="#900" />
<Icon name="battery-empty" size={30} color="#900" />
<Icon name="bed" size={30} color="#900" />


<Icon name="american-sign-language-interpreting" size={30} color="#777" /> */}


<View style={{
  justifyContent: 'center',
   alignItems: 'center' ,
   backgroundColor:"#000000",
  //  width:width*0.9, 
  //  height:height*0.5,
  flex:1,
   position:'relative',
   }}>


<Image style={{position:'absolute',left:-10,}} source={require('../img/anime/animeimg06.png')}/>
<Image style={{position:'absolute',right:-20,}} source={require('../img/anime/animeimg05.png')}/>
<Image style={{position:'absolute',padding:100}} source={require('../img/anime/animeimg04.png')}/>
<Image style={{position:'absolute',bottom:80,}} source={require('../img/anime/animeimg03.png')}/>
<Image style={{position:'absolute',bottom:10,}} source={require('../img/anime/animeimg02.png')}/>
<Image style={{position:'absolute',top:10,}} source={require('../img/anime/animeimg01.png')}/>
<Image style={{position:'absolute'}} source={require('../img/anime/animeimg00.png')}/>


{/* <Icon name="code" size={30} color="#900" /> */}

</View>


</View>
    </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
