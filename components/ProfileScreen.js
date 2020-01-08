import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "native-base";
import * as firebase from "firebase";

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }
  static navigationOptions = {
    title: "Home",
    header: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticate => {
      if (authenticate) {
        this.setState({
          email: authenticate.email,
          name: authenticate.displayName
        });
      } else {
        this.props.navigation.replace("login");
      }
    });
  }

  signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Sign out");
      })
      .catch(error => alert(error.message));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/email.png")} />
          <Text>LearnCodeOnline.in</Text>
        </View>
        <View style={styles.userDetails}>
          <Text> Hey {this.state.name}</Text>
          <Text>You are signed in as: {this.state.email}</Text>
        </View>
        <Button
          style={styles.button}
          full
          rounded
          success
          onPress={() => {
            this.signOutUser();
          }}
        >
          <Text style={styles.buttonText}>SignOut</Text>
        </Button>
        <View style={styles.navbuttons}>
        <Button
        full
        rounded
        success>
          <Text>Home</Text>
        </Button>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 20
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  userDetails: {},
navbuttons:{
  justifyContent:'flex-end',
  marginTop:220
},
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  }
});
