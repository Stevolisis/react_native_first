import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Task=({text})=>{

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
            </View>
            <Text style={styles.itemText}>{text}</Text>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles=StyleSheet.create({
    item:{
        backgroundColor:'#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginBottom:20
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap: 'wrap'
    }, 
    square:{
        width:24,
        height:24,
        backgroundColor: '#55BCF6',
        opacity:0.4,
        borderRadius: 5,
        marginRight:15
    },
    itemText:{
        width: '100%',
        maxWidth: '80%',
        textAlign: 'left',
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5
    }
})