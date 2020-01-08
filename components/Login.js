import React ,{Component} from 'react';
import { StyleSheet, View,Image,KeyboardAvoidingView,
  StatusBar,TextInput,TouchableOpacity,Text} 
  from 'react-native';
  import * as firebase from 'firebase';

export default class Login extends React.Component {


  static navigationOptions={
    header:null,
  }
  constructor(props){
    super(props);
    this.state={
        email:"",
        password:""
    }
}

signInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {this.props.navigation.navigate("Home")
    })
    .catch(error => {
      alert(error.message);
    });
};


  render(){
  return (

    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.logocontainer}>
          <Image 
          source={require('../assets/email.png')}
          >
          </Image>
      </View>
      <View style={styles.formcontainer}>
                <StatusBar  barStyle='light-content'/>
            <TextInput 
            placeholder="Email"
            returnKeyType="next"
            style={styles.input}
            onSubmitEditing={()=>this.passwordInput.focus()}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={email=>this.setState({email})}
            value={this.state.email}
            />

            <TextInput 
            placeholder="password"
            secureTextEntry
            returnKeyType="go"
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            onChangeText={password=>this.setState({password})}
            value={this.state.password}
            ref={(input)=>this.passwordInput=input}
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}
                onPress={()=>this.signInUser(this.state.email,this.state.password)}
                >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}
              onPress={() => {this.props.navigation.navigate("signup")
            }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
            </View>
    </KeyboardAvoidingView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2475B0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logocontainer:{
      alignItems:'center',
      flexGrow:1,
      marginTop:150,
      height:100,
      width:100,
      justifyContent:'center'
  },
  formcontainer:{
      marginBottom:150
  },
  title:{
      color:'#FFF',
      marginTop:10,
      textAlign:'center',
      opacity:0.7
  },
  container1: {
    padding:20,
},
input:{
    height:50,
    backgroundColor:'rgba(255,255,255,0.4)',
    width:300,
    fontSize:18,
    borderRadius:3,
    marginBottom:15,
    paddingLeft:7
},
buttonContainer:{
    backgroundColor:"#0A3D62",
    paddingVertical:15,
    marginTop:10
},
buttonText:{
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight:'700'
}
});
