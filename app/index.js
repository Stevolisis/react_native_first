import { Stack } from "expo-router";
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity} from "react-native";
import Task from "../component/Task";

export default Home=()=>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Today's Task</Text>

            <View style={styles.items}>
                <Task text='Record Youtube Video'/>
                <Task text='Walk the dog'/>
                <Task text='Take a nap'/>
                <Task text='Fuck your babe'/>
            </View>

        <KeyboardAvoidingView
         behavior={
            Platform.OS==='ios' ? 'padding' : 'height'
         }
         style={styles.writeTaskWrapper}
        >
            <TextInput style={styles.input} placeholder={'Write a task'}/>
            <TouchableOpacity>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView> 
        </View>


    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:80,
        paddingHorizontal:20,
        backgroundColor: '#E8EAED'
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
    items:{
        marginTop: 30
    },
    writeTaskWrapper:{
        position: 'absolute',
        bottom: 20,
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input:{
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: 250,
        borderRadius: 60,
        borderColor: '#C0C0C0',
        backgroundColor: '#FFF',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
        marginRight: 5
    },
    addWrapper:{
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText:{

    }
})
