import React from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';
import { Icon} from '@rneui/themed'
const Input = ({iconType, iconName, placeHolder, value, onChangeText , secureTextEntry=false})=>{
    return(
        <View style={styles.inputContainer}>
                <Icon type={iconType} name={iconName} />
            <TextInput placeholder={placeHolder} style={styles.input} placeholderTextColor="black" value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry}/>
            </View>

    )
}
export default Input
const styles = StyleSheet.create({
    
    input:{
        fontSize:totalSize(2),
        color:"black"
        
      

    },
    inputContainer:{
        borderRadius:totalSize(4),
        borderWidth:2,
        borderColor:"#D8CFCF",
       
        paddingLeft:totalSize(2),
        width:width(90),
        margin:totalSize(2),
        flexDirection:"row",
        alignItems:"center",
       
    },
    
})
