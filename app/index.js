import { Stack } from "expo-router";
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput} from "react-native";
import { TouchableOpacity } from "react-native/types";
import Task from "../component/Task";

export default Home=()=>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Today's Task</Text>

            <View style={styles.items}>
                <Task text='Record Youube Video'/>
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
        paddingHorizontal:20
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
    items:{
        marginTop: 30
    },
    writeTaskWrapper:{

    },
    input:{

    },
    addWrapper:{

    },
    addText:{

    }
})
