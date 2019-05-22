/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Dimensions,
  ScrollView,
  TextInput,
  Button,
  AsyncStorage,
  TouchableOpacity,
  Linking,
} from 'react-native';



import { createBottomTabNavigator, SafeAreaView, createSwitchNavigator, createStackNavigator, withNavigation } from 'react-navigation';

// import Mian from './mian_vue';
// import Mian from './src/index';
// import Mian from './src/bookread/BookRead';
import Mian from './src/Router';

// import Setup from './app/page/registered/Setup';

import QRvue from './src/qrcode/QRvue';
import Btn_Qrcode from './src/head/Btn_Qrcode';
import Btn_Search from './src/head/Btn_Search';
import Btn_Remind from './src/head/Btn_Remind';

import Login_index from './src/Login_index';


const { width, height } = Dimensions.get('window');



class TokenScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: undefined,
      phone: '+886908668531',
      confirmationResult: undefined,
      code: '',
      token_code: "null",
    }
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }



  save_token_code = () => {
    this.setState({
      token_code: this.props.navigation.state.params.token_code,
    }, function () {
      this.save();
      console.warn("save")
    }), console.warn("A", this.state.token_code);
    console.warn("B", this.props.navigation.state.params.token_code);
  }

  save() {
    // console.warn("C", this.state.token_code);
    //设置多项
    var keyValuePairs = [['userToken', this.state.token_code]]
    AsyncStorage.multiSet(keyValuePairs, function (errs) {
      if (errs) {
        //TODO：存储出错
        return;
      }
      alert('userToken保存成功!');

    });
  }


  componentDidMount() {
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
    // const { navigation: { state: { params: { token_code } } } } = this.props;
    const {
      navigation: {
        state: {
          params: {
            token_code
          }
        }
      }
    } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={{ padding: 20, marginTop: 20 }}>
          <Text style={styles.welcome}>
            歡迎使用ＳＲＰ
          </Text>

          <Text style={styles.welcome}>{token_code}</Text>

          {/* <Button
              title='go'
              onPress={() => { this.props.navigation.navigate('Login') }} />
            <Text>Code from SMS Screen</Text>
           
          */}
          {/*  
            <Button
              onPress={this.save_token_code}
              title="登入"/>
    */}

          <View style={{ justifyContent: 'center' }}>

            <Text style={styles.welcome}>
              請按登入
          </Text>
            <Btn_Login onPress={this.save_token_code} />
            <Text style={styles.welcome}>  或是 註冊 </Text>
            {/* <Btn_setup /> */}

          </View>




        </ScrollView>

      </View>

    );
  }
}



class DetailsScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: 'Details',

  };


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text style={styles.welcome}>{token_code}</Text>

        <Button
          title="GoBack"
          onPress={() => this.props.navigation.goBack().Alert("hi")}
        />
        <Button
          title="console"
          onPress={() => console.warn(this.props)
          }
        />

      </View>
    );
  }
}








// export default withNavigation(MyBackButton);

class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    // tabBarComponent: <TTOOPP />,
    headerTitle: <Btn_Search />,
    //  headerTitle:<Text >FUCK</Text>,
    headerStyle: {
      // backgroundColor: '#f4511e',
      backgroundColor: '#7592A9',
      ///上方tab bar 顏色 iphone X 上瀏海 顏色

      activeTintColor: '#2562b4',
    },
    indicatorStyle: {
      height: 1,
    }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    headerColor: "red",
    headerLeft: (  //定义导航栏右侧的按钮
      // <Text style={{ width: 1 }}></Text>
      <Btn_Qrcode />

    ),
    headerMode: 'screen',
    headerTitleStyle: { flex: 1, alignItems: 'center', textAlign: 'center', justifyContent: 'center' },

    // headerLeftContainerStyle: {paddingRight: 100},
    headerRight: (  //定义导航栏右侧的按钮
      // <Text style={{ width: 1 }}></Text>
      <Btn_Remind />

    ),

    //  headerTitle:  
    //   <Button
    //   title="Go to Details"
    //   onPress={() => console.warn(DetailsScreen())}
    // />
    //<Btn_Qrcode/>
    //title: 'Details',

  };




  render() {
    return (
      // <SafeAreaView style={styles.container}>

      <View style={styles.container}>


        {/* <View style={styles.home}> */}
        <Mian />
        {/* <Login_index/> */}
        {/* <Button
    title="Go to Details"
    onPress={() => this.props.navigation.push('Details')}
  /> */}
        {/* </View> */}

      </View>
      //</SafeAreaView> 
    );
  }
}


const prefix = 'yuanbook://';

//srpconsole://token/<code>



export default App = () => <RootStack uriPrefix={prefix} />;
const RootStack = createStackNavigator(
  {
    Login: { screen: Login_index },

    Home: { screen: HomeScreen },

    QRvue: { screen: QRvue },
    // Setup: { screen: Setup },

    // Details: { screen: DetailsScreen },
    // Phone: {
    //   screen: TokenScreen,
    //   path: 'token/:token_code',
    // },

  },
  {
    // initialRouteName: 'Home',
    initialRouteName: 'Login',

  }
);


////消除多餘安全邊距 https://reactnavigation.org/docs/zh-Hans/handling-iphonex.html
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  home: {
    flex: 16,
    flexDirection: 'column',
  },


  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#DDDDDD',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  navLeft: {
    alignItems: 'center',
    marginLeft: 10,
  },
  navRight: {
    alignItems: 'center',
    marginRight: 10,
  },
  navIcon: {
    height: 20,
    width: 20,
  },
  navText: {
    fontSize: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    backgroundColor: '#ededed',
    borderRadius: 5,
    height: 30,
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
  tabBarUnderline: {
    backgroundColor: '#b4282d',
    height: 2,
    width: width / 8,
    marginLeft: 6
  }
});
