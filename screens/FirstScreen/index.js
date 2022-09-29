import React, { useContext } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { FirstContext } from "../../store/context/FirstContext";

const FirstScreen = (props) => {
    const {state, addValue, subValue}= useContext(FirstContext)
    console.log(state)
    const onAddPressed =() => {
        addValue()
        console.log(state)
    }
    const onSubPressed =() => {
        subValue()
        console.log(state)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.counter}>Counter App</Text>
            <Text style={styles.number}>{state.value}</Text>
            
                <Button
                title='+'
                onPress={()=>onAddPressed()}
                />
            
                <Button
                title='-'
                onPress={()=>onSubPressed()}
                />
            
        </View>

    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black"
    },
    counter:{
        color: "white",
        backgroundColor: "orange",
        fontWeight: "bold",
        fontSize: 35
    },
    number:{
        color: "red",
        backgroundColor: "white",
        fontWeight: "bold",
        fontSize: 50,
        padding: 10,
        margin: 10,
        borderRadius: 100,
    },
    
})

export default FirstScreen