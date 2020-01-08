import React, { Component } from 'react'
import {View,StyleSheet,Text,Image,FlatList} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from '@expo/vector-icons/Ionicons';
import * as firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class starter extends React.Component{

  constructor(props){
    super(props);
    this.state={
      menu:[],
    }
  }

  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(authenticate => {
  //     if (authenticate) {
  //       this.props.navigation.replace("Home");
  //     } else {
  //       this.props.navigation.replace("login");
  //     }
  //   });
  // }

   componentWillMount() {
    firebase.database().ref('menu/starter/').once('value').then(snapshot => {
       var items = [];
       snapshot.forEach((child) => {
         items.push({
            name: child.val().name,
            image: child.val().image,
            price: child.val().price,
         });
      });
      this.setState({ menu: items});
  });
  }

  render(){
    return(
      <FlatList 
        data={this.state.menu}
        keyExtractor={elem => elem.name}
        renderItem={elem =>(
          <View style={styles.container}>
          <Image
          source={{uri: elem.item.image}}
          style={{width: 300, height: 150,marginTop:10}} />
       <Text>Item Name: {elem.item.name}</Text>
       <Text style={{justifyContent:'flex-start'}}>Price: {elem.item.price}</Text>
       <TouchableOpacity product={starter} style={{marginTop:5,marginBottom:10,width:250,backgroundColor:'#1287A5',borderRadius:17,height:35,justifyContent:'center',alignItems:'center',alignContent:'center'}}
       
       >
       <Text style={{fontSize:20,fontWeight:'200',color:'#fff'}}>Add to Card</Text>
       </TouchableOpacity>
          </View>
          )}
      />
    )
  }
}




// export default createMaterialBottomTabNavigator(
//   {
//     home: { screen: HomeScreen,
//     navigationOptions:{
//       tabBarLabel:'Home',
//       tabBarIcon: ({ tintColor }) => (   
//             <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
//       )
//     }
//     },

//     profile: { screen: Profile,
//       navigationOptions:{
//         tabBarLabel:'Profile',
//         tabBarIcon: ({ tintColor }) => (  
//               <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
//         )
//       }
//       }
//   },

//   {
//     initialRouteName: 'home',
//     activeColor: 'orange',
//     order:['home','profile'],
//     inactiveColor: '#3e2465',
//     barStyle: { backgroundColor: '#694fad'},
//   }
// );

const styles=StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#fff"
  },

})

