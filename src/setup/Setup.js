
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Button ,Dimensions} from 'react-native';
// import { Dropdown } from 'react-native-material-dropdown';
// import Btn_Login_set from '../Login/Btn_Login_set';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake IOS 878787for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = { text: '' };



    this.state = {
      標題們: null,
      電話號碼: null,
      名稱: null,
      性別: null,
      職稱: null,
      常態組別: null,
      是否全職: null,
      備註: null,

      Te: null,
      PH: null,
      NA: null,
      SEX: null,
      JOB: null,
      NO: null,
      NY: null,
      PS: null,


      A: null,
      B: null,
      C: null,
      D: null,
      text: null,
      value: null,


    }
    this.termId = 100;
  }


  JSON_Post = () => {
    let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/register';
    fetch(url, {
      method: 'POST',
      // headers 加入 json 格式
      headers: {
        'Content-Type': 'application/json'
      },
      // body 將 json 轉字串送出
      // body: JSON.stringify({
      //   email: 'lovef1232e@hexschool.com',
      //   password: '12345678'
      // })
      /*
	   備註: this.text,
        標題們:this.TE,
        電話號碼:this.PH,
        名稱:this.NA,
        性別:this.SEX,
        職稱:this.JOB,
        常態組別:this.NO,
        是否全職:this.NY,
      */
      body: JSON.stringify({

        "gender": this.SEX,
        "team": this.NO,
        "workingType": this.NY,
        "name": this.NA,
        "jobTitle": this.JOB,
        "phoneNumber": this.PH,


        // "gender":"male",
        // "team":"team101",
        // "workingType":"fullTime",
        // "name":"QAQ",
        // "jobTitle":"ironman",
        // "phoneNumber":"+886910927898"




      })
    }).then((response) => {
      console.warn(this.SEX, this.NO, this.NY, this.NA, this.JOB, this.PH)

      return response.json()
    }).then((data) => {
      console.warn(data)
      if (data.excutionResult == "success") {
        Alert.alert("註冊成功");
      }
    }).catch((err) => {
      console.warn('錯誤:', err)
      Alert.alert("發送失敗", "請檢查網路");
    });
  }


  render() {
    // let gender_data = [{
    //   value: '男',key: 'male'
    // }, {
    //   value: '女',key: 'female'

    // }];
    let gender_data = [{
      value: 'male', key: 'male'
    }, {
      value: 'female', key: 'female'

    }];

    let group_data = [{
      value: '房務組', key: '房務組',
    }, {
      value: '餐廳組',
    }, {
      value: '生態組',
    }, {
      value: '工程組',
    }, {
      value: '農業組',
    }, {
      value: '修繕組',
    }, {
      value: '交管組',
    }, {
      value: '其他',
    }];
    let if_fulltime_data = [{
      value: 'fullTime',
    }, {
      value: 'partTime',
    }];
    // let if_fulltime_data = [{
    //   value: '是',
    // }, {
    //   value: '否',
    // }];
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
        {/* <TextInput
          style={styles.TextBox}
          placeholder="電話號碼"
          placeholderTextColor="#959DAD"

          //onChangeText={(text) => this.setState({text})}
          onChangeText={(text) => { this.PH = text; }}

        /> */}
          <TextInput
          style={styles.TextBox}
          placeholder="E-MAIL"
          placeholderTextColor="#959DAD"

          //onChangeText={(text) => this.setState({text})}
          onChangeText={(text) => { this.PH = text; }}

        />
        <TextInput
          style={styles.TextBox}
          placeholder="NAME"
          placeholderTextColor="#959DAD"

          // onChangeText={(text) => this.setState({text})}
          onChangeText={(text) => { this.NA = text; }} />
        {/* <Dropdown
          label='性別'
          data={gender_data}
          valueExtractor={({ value }) => value}
          value={this.key}
          onChangeText={(value) => {
            this.SEX = value;
          }}
        /> */}
        <TextInput
          style={styles.TextBox}
          placeholder="PASSWORLD"
          placeholderTextColor="#959DAD"
          // onChangeText={(text) => this.setState({text})}
          onChangeText={(text) => { this.JOB = text; }}
        />
        <TextInput
          style={styles.TextBox}
          placeholder="PASSWORLD"
          placeholderTextColor="#959DAD"
          // onChangeText={(text) => this.setState({text})}
          onChangeText={(text) => { this.JOB = text; }}
        />
        {/* <Dropdown
          label='常態組別'
          data={group_data}
          valueExtractor={({ value }) => value}
          value={this.value}
          onChangeText={(value) => {
            this.NO = value;
          }}
        /> */}
        {/* <Dropdown
          label='是否全職'
          data={if_fulltime_data}
          valueExtractor={({ value }) => value}
          value={this.value}
          onChangeText={(value) => {
            this.NY = value;
          }}
        /> */}
        {/* <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text> 註冊 </Text>
        </TouchableOpacity>

 */}

        {/* <Btn_Login_set onPress={() => {

          this.JSON_Post()
        }} /> */}

        <TouchableOpacity
        style={styles.Box}
          onPress={() => {
            // this.setState({album: data})
            // console.warn(this.state.Te); // gives new value OK
            // console.warn(this.state.PH); // gives new value OK
            // console.warn(this.state.NA); // gives new value OK
            // console.warn(this.state.SEX); // gives new value OK\
            // console.warn(this.state.JOB); // gives new value OK
            // console.warn(this.state.NO); // gives new value OK
            // console.warn(this.state.NY); // gives new value OK
            // console.warn(this.state.PS); // gives new value OK
            // onPress={() => { this.onGet()}}
          }}>
          <Text style={{fontSize:20}}>
          NEXT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2E43',
    paddingTop: 10
  },
  TextBox: {
    height: 40,
    borderBottomWidth: 1,
    borderRadius:10,
    borderBottomColor: '#454F63',
    backgroundColor:"#454F63",
    marginVertical:10,
    paddingLeft:15,
    width:width*0.9,
  },
  Box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
  
    marginVertical:10,

    height: 40,
    borderRadius:10,
    backgroundColor:"#665EFF",
    // marginVertical:10,

    width:width*0.9,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 25,
    margin: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
});