import React from "react";
import {View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';
import { Icon} from '@rneui/themed'
const Button = ({title , onPress})=>{
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>

    )
}
export default Button
const styles = StyleSheet.create({
    
    button:{
        borderRadius:totalSize(4),
        width:width(90),
        height:height(6),
        margin:totalSize(2),
        alignItems:"center",
        backgroundColor:"blue",
        justifyContent:"center"

    },
    text:{
        color:"white",
        fontSize:totalSize(3)
    },
    
})
