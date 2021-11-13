import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>HOME SCREEN</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        backgroundColor:"#ffffcc"
    },
    text:{
        textAlign:"center",
        fontSize:"200%",
        fontWeight:"bold",
    }
})