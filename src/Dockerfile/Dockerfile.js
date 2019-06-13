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
  Button,
  RefreshControl,
  Alert
} from 'react-native';

import { SafeAreaView, } from 'react-navigation';
// import CardNotice from './CardNotice'
import CardNotice from './CardNotice_Dockerfile';
import CardMaintaine from './CardMaintainer_Dockerfile';
import CardCopy from "./CardCopy_Dockerfile"
// import Dashboard from './Dashboard_Container';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

// const userToken = "778TIlaNHBcW1lwvk3dZ1HuTuPv1";

const items_Text = [
  {
    "Id": "8cc94a2184d9d977722e9acb0536848fc3777a42f84fb2c2be0b0f9a45e55302",
    "Names": [
      "/my_servers"
    ],
    "Image": "ubuntu_sshd",
    "ImageID": "sha256:00aba00f126e8589e9d4480a3705ff040c196a458e7d891983d065739e37e6f4",
    "Command": "/usr/sbin/sshd -D",
    "Created": 1560141324,
    "Ports": [
      {
        "IP": "0.0.0.0",
        "PrivatePort": 22,
        "PublicPort": 49154,
        "Type": "tcp"
      }
    ],
    "Labels": {},
    "State": "running",
    "Status": "Up 39 hours",
    "HostConfig": {
      "NetworkMode": "default"
    },
    "NetworkSettings": {
      "Networks": {
        "bridge": {
          "IPAMConfig": null,
          "Links": null,
          "Aliases": null,
          "NetworkID": "e1d6e8a7c9393d1e5b9e23a60a5e21dedc753be4e533bb8c75e774ecbda358c6",
          "EndpointID": "0aadf8306099c3d5f8cda6231eb19182d322c0dd020ca2a7c0f25ad5fb617556",
          "Gateway": "172.17.0.1",
          "IPAddress": "172.17.0.3",
          "IPPrefixLen": 16,
          "IPv6Gateway": "",
          "GlobalIPv6Address": "",
          "GlobalIPv6PrefixLen": 0,
          "MacAddress": "02:42:ac:11:00:03",
          "DriverOpts": null
        }
      }
    },
    "Mounts": [
      {
        "Type": "bind",
        "Source": "/home/user/data",
        "Destination": "/mnt/data",
        "Mode": "",
        "RW": true,
        "Propagation": "rprivate"
      }
    ]
  },
]


let info_data;
export default class Containerlist extends Component {
  constructor() {
    super();
    this.state = {
      refreshing: false,
      isLoading: true,
      userToken: "",
      announcement: [
        {
          "Containers": -1,
          "Created": 1559585757,
          "Id": "sha256:00000000",
          "Labels": null,
          "ParentId": "sha256:00000000",
          "RepoDigests": null,
          "RepoTags": [
            "null:null"
          ],
          "SharedSize": -1,
          "Size": 19201080,
          "VirtualSize": 166244113
        },
      ],
    };
  }

  _getAll() {

  }
  //页面的组件渲染完毕（render）之后执行
  componentDidMount() {
    this.JSON_Post();
  }


  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.JSON_Post()
    // this.setState({refreshing: false});
  }
  JSON_Post = () => {
    // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
    // let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/getAnnouncement';
    let url = 'http://106.104.114.80:2375/containers/json?all=true';

    fetch(url).then((response) => {
      return response.json();
    }).then((jsonData) => {
      // console.warn(jsonData);
      // console.warn(jsonData.excutionResult);
      //  info_data = jsonData;
      // this.JSON_body();
      console.warn('OK:');

      if (jsonData[0] != null) {
        console.warn(jsonData[0].Names);
        // console.warn(this.state.announcement);
        Alert.alert("更新成功");
        this.setState({ refreshing: false, isLoading: false, announcement: jsonData });
        console.warn(JSON.stringify(this.state.announcement));
      }
      else {
        Alert.alert("更新失敗", "請檢查網路");
        this.setState({ refreshing: false });
        // this.forceUpdate();
      }
    }).catch((err) => {
      console.warn('錯誤:', err);
      Alert.alert("指派失敗", "請檢查網路");
      this.setState({ refreshing: false });
      // this.forceUpdate();
    })
  }
  // JSON_body = (A) => {
  //   // console.warn(jsonData);
  //   // console.warn(this.jsonData);
  //   console.warn("A " + A + JSON.stringify(info_data));
  //   console.warn(JSON.stringify(info_data.announcement[0].title));
  //   // let user_info_data = JSON.stringify(info_data);
  //   this.setState({
  //     // user_info_data:info_data,
  //     announcement: info_data.announcement,
  //   }).then(() => {
  //     console.warn(this.state.announcement);
  //   })
  // }


  getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      if (value !== null) {
        console.warn(value);
        this.setState({ userToken: value });
      }
    } catch (error) {
      console.log(error);
    }
  }


  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }
  // async componentDidMount() {
  //   // TODO: You: Do firebase things
  //   // const { user } = await firebase.auth().signInAnonymously();
  //   // console.warn('User -> ', user.toJSON());
  //   // await firebase.analytics().logEvent('foo', { bar: '123'});
  // }
  render() {
    if (this.state.isLoading) {
      return (
        <View></View>
      )
    }
    else {
      return (
        <SafeAreaView style={styles.container}>
      
          <ScrollView style={styles.Scrollcontainer}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh} />}>
            {/* <CardNotice infoTitle={this.state.announcement[0].title} infoBody={this.state.announcement[2].detail}/>  */}

            {/* {this.state.announcement.map((note) => {
              return (
                
                <CardNotice
                  infoTitle={note.Names}
                  infoBody={note.Image}
                  infoState={note.State}
                  infoPorts={note.Ports}
                  infoStauts={note.Status}
                />
              );
            })} */}
                      {/* <元件 /> */}
                      <CardMaintaine />
                      <CardCopy/>

          {/* <元件 /> */}



            <Button
              title="新2"
              onPress={() => {
                // this._retrieveData();
                this.getStorage().done();

              }}
            />

            {/* <Card_A/> */}

          </ScrollView>

        </SafeAreaView>


      );
    }
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

    backgroundColor: '#2A2E43',

  },
  cardlist: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

    backgroundColor: '#2ff',

  },
  Scrollcontainer: {
    // backgroundColor: '#fff',

    flex: 1,
    // padding:10,
    // paddingVertical: 15,
    //paddingRight:100,
    // marginRight:20,



  }, centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height: width * 0.6,
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
    marginHorizontal: 10,
    // padding:10,
    // paddingVertical: 15,
    //paddingRight:100,
    // marginRight:20,
  },
  ButtonCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.3,
    height: width * 0.6,
    backgroundColor: '#ededed',
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    }
  },
});