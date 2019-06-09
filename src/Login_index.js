///驗證是否有本地資料後決定是否跳過登入（不顯示登入元件）

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  WebView,
  TextInput,
  AsyncStorage,
  Alert,
  Button,
  Modal,
  Linking,
  TouchableOpacity,
  TouchableHighlight,


} from 'react-native';
import { createBottomTabNavigator, SafeAreaView, createStackNavigator, withNavigation } from 'react-navigation';
// import Setup from '../src/setup/Setup';
import LoginTabs from '../src/setup/LoginTabs';

import Btn_Login from '../src/components/Btn_Login';
import Jump_home from '../src/components/Jump_home';


// import Btn_Phone from './app/page/Login/Btn_Phone';

// import Login from './app/page/Login/Login';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
const captchaUrl = 'https://my-fuck-awesome-project.firebaseapp.com/phone-invisible.html'
const patchPostMessageFunction = function () {
  var originalPostMessage = window.postMessage;

  var patchedPostMessage = function (message, targetOrigin, transfer) {
    originalPostMessage(message, targetOrigin, transfer);
  };

  patchedPostMessage.toString = function () {
    return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
  };

  window.postMessage = patchedPostMessage;
};

const patchPostMessageJsCode = '(' + String(patchPostMessageFunction) + ')();';

export default class Login_index extends Component {

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+886',
      confirmResult: null,
      text: 'Useless Placeholder',
      name: 'aaaaa',
      phone: 'bbbbb',
      userToken: "778TIlaNHBcW1lwvk3dZ1HuTuPv1",
      // userToken: "null",
      modalVisible: false,
      modalPhoneVisible: false,
    };
    this.onMessage = this.onMessage.bind(this);
  }

  handleClick = () => {
    Linking.openURL(captchaUrl).catch(err => console.error('An error occurred', err));
    //////開Phone number authentication with invisible ReCaptcha

  };
  componentDidMount() {
    //检测网络是否连接
    // this.getStorage().done();
    this.check_ID_Storage().done();
  }

  onMessage(e) {
    // let text = "眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了";
    // let a = 4;
    // let b = 6;

    console.warn(e)


    // alert(e);
    //+886910927898

    // var event =e.nativeEvent;
    //   var data=JSON.parse(event.data);

    // var event = e.nativeEvent;
    // var data = JSON.parse(even);
    // alert(data);
    // console.warn(data)

    // this.setState({ userToken: "'"+e+"'" });
    // alert("data");
    // alert(e);


    // this.indexHistory.push(data);
    // this.refs.webviewRef.postMessage(JSON.stringify({
    //     result:event
    //  }))
  }
  //   _post(){
  //     this.refs.webviewRef.postMessage(JSON.stringify({
  //       // content:this.state.data,
  //       style: {
  //         backgroundColor: "black",
  //         color: "skyblue",
  //         fontFamily: "Noto Sans TC"
  //       },
  //       // index: this.state.index
  //     }))
  // }
  check_ID_Storage = async () => {
    //主動驗證是否登入
    try {
      const value = await AsyncStorage.getItem('userToken');
      console.warn(value);

      if (value !== null) {
        console.warn(value);
        console.warn('已登入過', await AsyncStorage.getItem('userToken'));
        this.props.navigation.push('Home')
      }
      else {
        ///這段有問題...
        Alert('請登入');
        console.warn('請登入');
      }


    } catch (error) {
      console.log(error);
    }
  }
  getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      if (value !== null) {
        console.warn(value);
        this.setState({ userToken: value });
        this.JSON_Post();
        console.warn('再次', await AsyncStorage.getItem('userToken'));
      }
    } catch (error) {
      console.log(error);
    }
  }
  save() {
    //设置多项
    var keyValuePairs = [['userToken', this.state.userToken]]
    AsyncStorage.multiSet(keyValuePairs, function (errs) {
      if (errs) {
        //TODO：存储出错
        return;
      }
      console.warn('userToken保存成功!');
    });
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

  opne_modal() {


  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setPhoneModalVisible(visible) {
    this.setState({ modalPhoneVisible: visible });
  }


  _storeData = async () => {
    try {
      await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };

  setStorage = async () => {
    try {
      await AsyncStorage.setItem('@Route:initialPage', 'login');
    } catch (error) {
      console.log(error);
    }
  }

  static navigationOptions = {
    // header: null,
    headerLayoutPreset: 'center',
    // headerTitleStyle: {
    //     textAlign: 'center',
    //     flexGrow:1,
    //     alignSelf:'center',
    // },
    headerStyle: {
      // paddingHorizontal: 8,
      backgroundColor: '#00C4FF',

      // headerTitleStyle
      fontWeight: 'bold',

    },
    headerTintColor: '#fff',

    headerTitleStyle: { flex: 1, textAlign: 'center' },



    title: 'SRP',
    headerBackTitleVisible: false,
    headerBackTitle: null,
    headerTruncatedBackTitle: null,
    //  headerLeft: (  //定义导航栏右侧的按钮
    //     <Text >檢查我////, O(W)O</Text>
    //     ),

  }


  state = {
    key: '',
    value: '',
    data: '\n',
  }


  // save_token_code = () => {
  //   this.setState({
  //     token_code: this.props.navigation.state.params,
  //   }), console.warn("A", this.state.token_code);
  //   console.warn("B", this.props.navigation.state.params);
  // }




  render() {
    const { user, confirmResult } = this.state;
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    // const {
    //   navigation: {
    //     state: {
    //       params: {
    //         token_code
    //       }
    //     }
    //   }
    // } = this.props;
    return (
      // <SafeAreaView style={styles.container}>

      <View style={styles.container}>
        {/* <Image style={styles.background} source={{ uri: 'https://unsplash.it/800/600?random&blur' }} /> */}
        {/* <Image style={styles.background} source={require('./img/test.png')} /> */}
        {/* <Image style={styles.background} source={{ uri: 'https://unsplash.it/800/600?image=102&blur' }} /> */}
        <View style={styles.container}>
          {/* <Btn_Login/> */}
          {/* <Text style={[styles.title, { fontSize: 90 }]}>源BOOK</Text> */}
          <Image source={require('./img/logo_mini.png')} />
          <Text style={[styles.title, { fontSize: 10 }]}>{this.state.userToken}</Text>

          {/* <Text style={[styles.title, { fontSize: 40}]}>Logo</Text> */}
        </View>
        {/* <Button
          title="handleClick"
          onPress={() => {
            this.handleClick();
          }} />

        <Login onPress={() => {
          this.save();
          pressStatus = 'pressin'
          this.setState({ pressStatus: 'pressin' });
          this._storeData();
          this.setStorage();
        }} /> */}
        {/* <View style={{ width: width * 0.8, height: height * 0.2, backgroundColor: "white", padding: 10, borderRadius: 15, }}>
       
          <WebView 
                         style={{ flex: 1, backgroundColor: '#FCF'}}
                 ref={'webviewRef'} 
                 originWhitelist={['*']}
                 automaticallyAdjustContentInsets={false} 
                 onMessage={this.onMessage} 
                 javaScriptEnabled={true} 
                //  source={require('./bookread/pages/canvas-text-test.html')}
                source={{uri: 'https://github.com/facebook/react-native/issues/10865'}}
                // source={{uri: 'https://my-fuck-awesome-project.firebaseapp.com/phone-invisible.html'}}
                 />
        </View> */}
        < View style={styles.bottomContainer}>

          <Jump_home />
          <TouchableOpacity
            style={styles.bottomLoginSetup}
            onPress={() => {
              this.setModalVisible(true)
            }} >
            <Text>Login "&" Setup Modal</Text>
          </TouchableOpacity>
          < View style={styles.bottomRLContainer}>
            

            <TouchableOpacity
              style={styles.bottomGOOGLE}
              onPress={() => {
                this.setPhoneModalVisible(true)
              }} >
              <Text>GOOGLE Modal</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomFB}
              onPress={() => {
                this.setModalVisible(true)
              }} >
              <Text>FB Modal</Text>

            </TouchableOpacity>
          </ View>

        </View>

        <View style={{ flexDirection: "row" }}>
          <Button
            title="新"
            onPress={() => {
              // Linking.openURL("srpconsole://token/eBuvGEjNMUOo5RrhIs4XQx3hDte2").catch(err => console.error('An error occurred', err));
              this.check_ID_Storage().done();

            }} />
          <Button
            title="新ＩＤ"
            onPress={() => {
              this.save();
            }} />
          <Button
            title="新Ｄ"
            onPress={() => {
              this.clear();
            }} />
          <Button
            title="MOD"
            onPress={() => {
              this.setModalVisible(true)
            }} />
          <Button
            title="PH"
            onPress={() => {
              this.setPhoneModalVisible(true)
            }} />

        </View>


        {/* 
        <View style={styles.bottmContainer}>
        <Login/>
    
     

        </View> */}

        {/* <Btn_Phone/> */}

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { alert("Modal has been closed.") }}
        >
          <View style={{ flex: 1, backgroundColor: "#2A2E43", }}>
            <View style={{ marginTop: 40, flex: 1, backgroundColor: "#2A2E43", }}>
              <LoginTabs />

              <View style={{
                flex: 0.8, backgroundColor: "#2A2E43", alignItems: 'center',
                alignItems: 'center',
                justifyContent: "flex-end"
              }}>


                <TouchableHighlight style={styles.Box} onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.check_ID_Storage().done();
                }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
                {/* <Btn_Login /> */}
              </View>


            </View>
          </View>
        </Modal>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalPhoneVisible}
          onRequestClose={() => { alert("Modal has been closed.") }}
        >
          <View style={{ flex: 1, backgroundColor: "#2A2E43", }}>

            <View style={{
              marginTop: 40, flex: 1, backgroundColor: "#2A2E43", justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text>Is the Phone Modal</Text>

              <View style={{ width: width * 0.9, height: height * 0.5, backgroundColor: "white", padding: 10, borderRadius: 15, }}>

                <WebView
                  ref={(ref) => { this.webview = ref; }}
                  // source={{ uri}}
                  style={{ flex: 1, backgroundColor: '#FCF' }}
                  // source={{ uri: 'http://localhost:5000/phone-invisible.html' }}
                  source={{ uri: 'https://my-fuck-awesome-project.firebaseapp.com/phone-invisible.html' }}

                  
                  injectedJavaScript={patchPostMessageJsCode}
                  onMessage={this.onMessage}
                />
              </View>

              <View style={{
                flex: 0.8, backgroundColor: "#2A2E43", alignItems: 'center',
                alignItems: 'center',
                justifyContent: "flex-end"
              }}>


                <TouchableHighlight style={styles.Box} onPress={() => {
                  this.setPhoneModalVisible(!this.state.modalPhoneVisible);
                  this.check_ID_Storage();

                }}>
                  <Text>back to home</Text>
                </TouchableHighlight>
              </View>


            </View>
          </View>
        </Modal>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2E43",
    justifyContent: 'center',
    alignItems: 'center',
  },
  Box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,

    marginVertical: 20,

    height: 40,
    borderRadius: 10,
    backgroundColor: "#665EFF",
    // marginVertical:10,
    width: width * 0.9,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    backgroundColor: '#ededed',
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  searchContent: {
    color: '#666',
    fontSize: 14,
  },

  bottomContainer: {
    // height: 60,
    flexDirection: "column",
    // paddingHorizontal: 10,
    width: width * 0.9,
    paddingVertical: 10,
    // marginBottom: 40,
  },
  bottomRLContainer: {
    height: 60,

    flexDirection: 'row',
    // paddingHorizontal: 50,
    // paddingVertical: 10,
    // marginBottom: 50,
  },
  background: {
    height: 900,
    width: 600,
    position: 'absolute',
    // resizeMode: 'cover',
  },
  bottomGOOGLE: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E82130',
    borderStyle: 'solid',
    marginRight: 5,

    marginVertical: 5,
    height: 50,



  },
  bottomFB: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#3B56C9',
    borderStyle: 'solid',
    marginLeft: 5,
    marginVertical: 5,
    height: 50,


  },
  bottomLoginSetup: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#3B56C9',
    borderStyle: 'solid',
    marginRight: 5,
    marginVertical: 5,
    height: 50,

  },
  button: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E82130',
    // borderStyle: 'solid',
  },
  buttonText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',

  },
  button3: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 30,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderTopWidth: 50,
    borderLeftColor: 'transparent',
    borderTopColor: 'red',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)'

  },

  desc: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center'
  }
});



