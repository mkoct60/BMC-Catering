import React, { Component } from 'react'
import {View,StyleSheet,Text,Image,FlatList,Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Profile from './components/ProfileScreen';
import Icon from '@expo/vector-icons/Ionicons';
import * as firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Slideshow from 'react-native-slideshow';
import {Button} from 'native-base';


class HomeScreen extends Component{

  constructor() {
 
    super();
 
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          url: 'https://image.shutterstock.com/image-photo/assorted-indian-food-600w-754732342.jpg',
        }, 
        {
          url: 'https://image.shutterstock.com/image-photo/indian-sweet-motichoor-laddoo-know-600w-1027395571.jpg',
        }, 
        {
          url: 'https://image.shutterstock.com/image-photo/group-south-indian-food-like-600w-1153818823.jpg',
        },
      ],
    };
 
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
   

  render(){
    return(
    <View>
      <View>
        <Slideshow
        dataSource={this.state.dataSource}
        position={this.state.position}
        scollEnabled
        arrowSize='0'
        onPositionChanged={position => this.setState({ position })}
        />
        <Text style={{marginTop:5,marginLeft:5,fontSize:22,fontStyle:'bold',fontStyle:'italic'}}>Welcome To BMC Catering!</Text>
      </View>
      <View style={{alignItems:'center',marginTop:50}}>
       <Button style={{width:150,alignItems:'center',justifyContent:'center'}}
       rounded
       onPress={()=>this.props.navigation.navigate("Starter")}
       >
       <Text style={{color:'#EAF0F1',fontWeight:'200',fontSize:17}}>Starter</Text>
       </Button>

       <Button style={{width:150,alignItems:'center',justifyContent:'center',marginTop:12}}
       rounded
       >
       <Text style={{color:'#EAF0F1',fontSize:17,fontWeight:'200'}}>Main Course</Text>
       </Button>
       
       <Button style={{width:150,alignItems:'center',justifyContent:'center',marginTop:12}}
       rounded
       >
       <Text style={{color:'#EAF0F1',fontSize:17,fontWeight:'200'}}>Beverages</Text>
       </Button>

       <Button style={{width:150,alignItems:'center',justifyContent:'center',marginTop:12}}
       rounded
       >
       <Text style={{color:'#EAF0F1',fontSize:17,fontWeight:'200'}}>Extras</Text>
       </Button>
      </View>
    </View>
    )
  }
}




export default createMaterialBottomTabNavigator(
  {
    home: { screen: HomeScreen,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon: ({ tintColor }) => (   
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
      )
    }
    },

    profile: { screen: Profile,
      navigationOptions:{
        tabBarLabel:'Profile',
        tabBarIcon: ({ tintColor }) => (  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
        )
      }
      }
  },

  {
    initialRouteName: 'home',
    activeColor: 'orange',
    order:['home','profile'],
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad'},
  }
);


const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    height:50,
    width:50
  },
})

