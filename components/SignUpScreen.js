import React,{Component} from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView ,Image,TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import { Form, Item, Input, Label, Button } from "native-base";

export default class SignUpScreen extends React.Component {

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      name:'',
      phone:''
    };
  }

  static navigationOptions = {
    header: null
  };

  writeUserData(email,name,phone){
    firebase.database().ref('Users/').push({
        email,
        name,
        phone
    }).then(
        //success callback
        ()=>{this.props.navigation.navigate('Home')
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}

signupUser = (email, password,name,phone) => {
firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(authenticate => {
      return authenticate.user
        .updateProfile({
          displayName: name
        })
        .then(()=>{this.writeUserData(email,name,phone)}
        )
        .then(() => {
          this.props.navigation.replace("Home");
        });
    })
    .catch(error => {
      alert(error.message);
    });
};


  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        enabled
      >
        <View style={styles.logoContainer}>
          <Image source={require("../assets/email.png")} />
          <Text>BMC</Text>
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="name-phone-pad"
              onChangeText={name => this.setState({ name })}
            />
            </Item>
            <Item floatingLabel>
            <Label>Phone No</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="phone-pad"
              onChangeText={phone => this.setState({ phone })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={password => this.setState({ password })}
            />
          </Item>
  
          <Button
            style={styles.button}
            full
            rounded
            onPress={() => {
              this.signupUser(
                this.state.email,
                this.state.password,
                this.state.name,
                this.state.phone
              );
            }}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </Button>
        </Form>
        <View style={styles.footer}>
          <Text>OR</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("login");
            }}
          >
            <Text>Already having an account ?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  form: {
    padding: 20,
    width: "100%",
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  }
});
