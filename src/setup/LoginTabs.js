import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';

import { SafeAreaView, } from 'react-navigation';
import Setup from './Setup';
import Btn_Setup from './Btn_Setup';

// import Login from './Login';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
export default class qrcode extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: 'LoginTabs',
    headerStyle: {
      // backgroundColor: '#f4511e',
      backgroundColor: '#D0E889',


    },
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    headerRight: (  //定义导航栏右侧的按钮
      // <Text style={{width:1}}></Text>
      <Text />

    ),


  };

  state = {
    text: 'http://facebook.github.io/react-native/',
  };

  constructor(props) {
    super(props);
    this.state = {
      camera_io: false,
      tabShow: false,
      label: ['Login', 'Setup'],
    };
  }

  componentDidMount() {
    // setTimeout(() => {
      this.setState({
        tabShow: true
      });
    // }, 0)
  }



  // 滑动tab
  renderScrollableTab() {
    let label = this.state.label;
    if (this.state.tabShow) {
      return (

        <ScrollableTabView
          renderTabBar={() => <ScrollableTabBar />}
          // renderTabBar={() => <Button
          //   title="新ＩＤ"
          //   onPress={() => {
          //     // this.save();
          //   }} />}
          tabBarBackgroundColor='#2A2E43'
          tabBarActiveTextColor='#ffffff'
          tabBarInactiveTextColor='#6787A0'
          // tabBarUnderlineStyle='#6787A0'
          // tabStyle={{borderRadius:15,backgroundColor:"#ff00ff"}}
          // tabStyle={{color: 'red'}}
          onChangeTab={() => this.setState({ camera_io: !this.state.camera_io })}
          tabBarUnderlineStyle={styles.tabBarUnderline}
          
        >

          {
            label.map((item, index) => {
              switch (item) {
                case 'Login':
                  return (
                    <Setup tabLabel={item} key={index} />
                  )
                  break;
                case 'Setup':
                     return (
                      <Btn_Setup tabLabel={item} key={index} />
                    )
                  break;
                default:
                  return (
                    <Setup tabLabel={item} key={index} />
                  )
                  break;
              }
            })
          }
        </ScrollableTabView>
      )
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          {this.renderScrollableTab()}
        </View>
      </SafeAreaView>
    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tabBarUnderline: {
    backgroundColor: '#FFF',
    height: 3,
    // width: width / 3,
    // marginLeft: 6
  }
});