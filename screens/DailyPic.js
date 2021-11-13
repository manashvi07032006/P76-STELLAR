import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class DailyPicScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>DAILY PICTURES</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    text:{
        textAlign:"center",
        fontSize:"200%",
        fontWeight:"bold",
    }
})