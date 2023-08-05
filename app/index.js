import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import Task from "../component/Task";

export default Home=()=>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Today's Task</Text>

            <View style={styles.items}>
                <Task/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:80,
        paddingHorizontal:20
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
    items:{
        color:'#f5f6f6'
    }
})
