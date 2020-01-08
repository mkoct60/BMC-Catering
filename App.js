import loginScreen from './components/Login';
import * as firebase from 'firebase';
import React from 'react'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import homeScreen from "./HomeScreen";
import LoadingScreen from "./components/LoadingScreen";
import SignUpScreen from "./components/SignUpScreen";
import StarterScreen from "./components/starter";
import ShoppingCartIcon from './components/ShoppingCartIcon';


    var firebaseConfig = {
      apiKey: "AIzaSyBNqjcyewdB-K1K_uqb_qUYLC2UyDqf9DU",
      authDomain: "authdemo-898bb.firebaseapp.com",
      databaseURL: "https://authdemo-898bb.firebaseio.com",
      projectId: "authdemo-898bb",
      storageBucket: "",
      messagingSenderId: "922820420676",
      appId: "1:922820420676:web:40c8c3924487b5dd158811"
  }
  firebase.initializeApp(firebaseConfig);

  console.disableYellowBox = true;
  const MainNavigator=createStackNavigator(
    {
      signup:{screen:SignUpScreen},
      login:{screen:loginScreen},
      Loading: { screen: LoadingScreen },
      Starter:{screen:StarterScreen,
      navigationOptions:{
        title:'Starters',
        headerRight:<ShoppingCartIcon/>,
        headerStyle:{
          backgroundColor:'#694fad'
        },
        headerTitleStyle:{
          color:'white'
        }
      }
      },
      Home: { screen: homeScreen,
      navigationOptions:{
        headerTitle:'Home',
        headerRight:<ShoppingCartIcon/>,
        headerStyle:{
          backgroundColor:'#694fad',
        },
        headerTitleStyle:{
          color:'white'
        }
      }}
      },
    {
      initialRouteName:"Home"
    }
  );
  const App=createAppContainer(MainNavigator);
  export default App;
