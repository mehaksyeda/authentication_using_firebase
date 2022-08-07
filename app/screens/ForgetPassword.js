import React from 'react';
import {View, Text , StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback,Keyboard} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Input from '../global/Input';
import Button from '../global/Button';
const ForgetPassword = ({navigation}) => {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex:1}}>
            <View style={styles.header}>
            <Text style={styles.headerText}>Forget Password</Text>

            </View>
            <View style={styles.container}>
           
            <Input iconType={'fontisto'} iconName={'email'} placeHolder={'Email'}/>
           
           
           <Button title={"Continue"}/>
           
            
           
           

            </View>
           
        </View>
        </TouchableWithoutFeedback>

    )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
        alignItems:"center",
      
        padding: totalSize(4),
        backgroundColor:"white",
        borderTopLeftRadius:totalSize(4),
        borderTopRightRadius:totalSize(4),
        height:height(96),
        position:"absolute",
        top:totalSize(18),
        right:0,
        left:0
       


    },
   
    textContainer:{
        flexDirection:"row",
       
    },
    social:{
        width:width(100),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:totalSize(4)

    },forgetPassContainer:{
        alignSelf:"flex-end",
        marginRight:totalSize(2)
    },forgetPassText:{
        color:"blue",
        fontSize:totalSize(2)

    },orText:{
        fontSize:totalSize(3),
        color:"black",
        marginTop:totalSize(2)
    },headerText:{
        color:"white",
        fontSize:totalSize(5),
        marginBottom:totalSize(4)
    },header:{
      
        backgroundColor:"blue",
        alignItems:"center",
        justifyContent:"center",
        paddingTop:totalSize(6),
        paddingBottom:totalSize(6),
        
    }
})
export default ForgetPassword