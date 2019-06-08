
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
     AsyncStorage,
     Dimensions,
    } from 'react-native';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window'); 
import { SafeAreaView, } from 'react-navigation';


let example  = `# 第一章 ` ;

class WebViewScreen extends React.Component {
  render() {
    return (
      // <WebView source={require('./pages/index.html')} />
      <WebView source={{uri: 'https://github.com/facebook/react-native'}} />

    )
  }
}


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
    this.onMessage = this.onMessage.bind(this);
}
onMessage(e){

  var event =e.nativeEvent;
  var data=JSON.parse(event.data);

this.setState({index:data});
this.indexHistory.push(data);

}

_post(){
    this.refs.webviewRef.postMessage(JSON.stringify({
      content:this.state.data,
      style: {
        backgroundColor: "black",
        color: "skyblue",
        fontFamily: "Noto Sans TC"
      },
      index: this.state.index
    }))
}
_next(){
  this.refs.webviewRef.postMessage(JSON.stringify({
    content:this.state.data,
    style: {
      backgroundColor: "black",
      color: "skyblue",
      fontFamily: "HiraMinProN-W3"
    },
    index: this.state.index
  }))
}
_prev(){
  this.indexHistory.pop();
  this.indexHistory.pop();
  this.refs.webviewRef.postMessage(JSON.stringify({
    content:this.state.data,
    style: {
      backgroundColor: "#aaa",
      color: "black",
      fontFamily: "Noto_Serif_TC"
    },
    index: this.indexHistory.pop()
  }))
}

_post_text(){
    // let text = "AA眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了";
  // let a = 4;
  // let b = 6;
  // let text = "12345678901234567890123456789012345678901234567890123456789012345678901234567890";
  let text = "眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了名字是名字是名字是名字是名字是名字是名字是";

  this.refs.webviewRef.postMessage(JSON.stringify({
      result:text
   }))
}

componentWillMount() {
  // data=TS(text);

}
componentDidMount() {
 

      console.warn("example");
    





      
if (this.state.data.indexOf("    ") > -1) {
  }
  this.setState({ data: this.state.data.replace(/\n\n|\r\n\r\n/g, "\n") });

  // example = example.replace(/\n\n|\r\n\r\n/g, "\n");
  this.state.data
  
  // example.replace("    ","g");
  // example = example.replace(/\n/g,"@");
  // example = example.replace(/\s\s\s\s/g,"  ");

  console.log(example);
}

handleClick = () => {

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

      {/* <ScrollView style={{flex: 1}}> */}
<View style={{flex: 1,flexDirection:'row'}}>
<TouchableOpacity onPress={() => { this.clear()}} style={{flex: 1, backgroundColor: '#aff'}}>
<Text style={{}}>Upper AAA text</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => { this.switchfont()}} style={{flex: 1, backgroundColor: '#aae'}}>
<Text>
{this.state.font ? 'HiraMinProN-W3':'Noto_Serif_TC'}
</Text>        
</TouchableOpacity>
<TouchableOpacity onPress={() => { this.handleClick()}} style={{flex: 1, backgroundColor: '#FCF'}}>
<Text>
{this.state.lang ? '轉簡體':'轉繁體'}
</Text>
</TouchableOpacity>
</View>
      {/* <WebView
        style={{flex: 1, height: height*0.8, backgroundColor: 'yellow'}}
        originWhitelist={['*']}
        source={{uri: 'https://github.com/facebook/react-native'}}
      />
       */}
<View  style={{ flex: 15, backgroundColor: 'yellow'}}>
                 <WebView 
                         style={{ flex: 1, backgroundColor: '#FCF'}}
                 ref={'webviewRef'} 
                 originWhitelist={['*']}
                 automaticallyAdjustContentInsets={false} 
                 onMessage={this.onMessage} 
                 javaScriptEnabled={true} 
                 source={require('./pages/canvas-text-test.html')}

                 /> 
       
</View>

<View style={{flex: 1,flexDirection:'row'}}>
<TouchableOpacity onPress={() => { this._next()}} style={{flex: 1, backgroundColor: '#aae'}}>
      <Text >
      _next textddddd
        {/* {this.state.num} */}

        {this.state.index}
        {/* {example[this.state.all_font_num-1]} */}
      </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { this._prev()}} style={{flex: 1, backgroundColor: '#fae'}}>
      <Text >
        {/* {this.state.num} */}

        {this.state.index}
        {/* {example[this.state.all_font_num-1]} */}
      </Text>
      </TouchableOpacity>

</View>

    {/* </ScrollView> */}
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
