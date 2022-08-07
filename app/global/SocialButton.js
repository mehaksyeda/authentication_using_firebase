import React from "react";
import {View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';
import { Icon} from '@rneui/themed'
const SocialButton = ({ iconType, iconName, color })=>{
    return(
        <TouchableOpacity style={styles.socailButton}>
        <Icon type={iconType} name={iconName} size={40} color={color}/>
    </TouchableOpacity>

    )
}
export default SocialButton
const styles = StyleSheet.create({
    
    socailButton:{
        margin:totalSize(2),
       
    },
})
