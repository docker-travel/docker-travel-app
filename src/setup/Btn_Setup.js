import React from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Alert,
  AsyncStorage,
  Image,
  TextInput, 
  TouchableOpacity,
  Button ,
  Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation';
const { width, height } = Dimensions.get('window');

class Btn_Setup extends React.Component {
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


_retrieveData = async () => {
  try {

      this.props.navigation.push('Home') 

    
   } catch (error) {
     // Error retrieving data
     Alert.alert('錯誤');

   }
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
      <TouchableOpacity onPress={ this._retrieveData}>
        <View style={styles.Button}>
          <Text style={styles.searchContent}>登入</Text>
          {/* <Text style={styles.searchContent}>簽下去</Text> */}

        </View>
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
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.6,
    paddingVertical:10,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  searchContent: {
    color: '#7094B1',
    fontSize: 20,
  },
  });
  

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(Btn_Setup);