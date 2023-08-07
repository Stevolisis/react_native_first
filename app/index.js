import { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity} from "react-native";
import Task from "../component/Task";

export default Home=()=>{
    const [task, setTask]=useState('');
    const [taskItems, setTaskItems]=useState([]);

    const addTask=()=>{
        console.log('Added Task: ',task);
        setTaskItems([...taskItems, task]);
        setTask('');
        console.log('Task Items: ', taskItems);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Today's Task</Text>

            <View style={styles.items}>
                {
                    taskItems.map((item,i)=>{
                        return <Task text={item} key={i}/>
                    })
                }
            </View>

        <KeyboardAvoidingView
         behavior={
            Platform.OS==='ios' ? 'padding' : 'height'
         }
         style={styles.writeTaskWrapper}
        >
            <TextInput 
                style={styles.input} 
                placeholder={'Write a task'}
                value={task}
                onChangeText={text=>setTask(text)}
            />
            <TouchableOpacity onPress={()=>addTask()}>
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
        paddingTop: 60,
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'space-around',
        width: '90vw',
        // flexWrap: 'wrap'
    },
    input:{
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 60,
        borderColor: '#C0C0C0',
        backgroundColor: '#FFF',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: '80%',
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
