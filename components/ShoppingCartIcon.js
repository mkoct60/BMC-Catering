import React from 'react';
import {View,Text,StyleSheet,Platform} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import {connect} from 'react-redux'

const ShoppingCartIcon=(props)=>(
    <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
        <View style={{
            position: 'absolute', height: 20, width: 20, borderRadius: 15, backgroundColor: '#e3e3e3', right: 6, bottom: 29, alignItems: 'center', justifyContent: 'center', zIndex: 2500,

        }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>0</Text>
        </View>
        <View style={{top:3}}>
        <Icon  onPress={() => props.navigation.navigate('ShoppingCart')} name="ios-cart" size={35} color='yellow' />
        </View>
    </View>
)

export default ShoppingCartIcon;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

 
