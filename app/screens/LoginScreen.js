import React from 'react';
import {View, Text , StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

import {Input, Icon} from '@rneui/themed'
const LoginScreen = () => {
    return(
        <View style={{flex:1}}>
            <View style={styles.header}>
            <Text style={styles.headerText}>Welcome Back!</Text>

            </View>
            <View style={styles.container}>
           
            <View style={styles.inputContainer}>
                <Icon type='fontisto' name='email' />
            <TextInput placeholder='Email' style={styles.input} placeholderTextColor="black"/>
            </View>
           
            <View style={styles.inputContainer}>
                <Icon type='entypo' name='key' />
            <TextInput placeholder='Password' style={styles.input} placeholderTextColor="black" />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgetPassContainer}>
                <Text style={styles.forgetPassText}>Forget Password ?</Text>
            </TouchableOpacity>
            
            
            <Text style={styles.orText}>OR</Text>
           <View style={styles.social}>
            <TouchableOpacity style={styles.socailButton}>
                <Icon type='zocial' name='facebook' size={40} color="#3b5998"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socailButton}>
                <Icon type='entypo' name='twitter' size={40} color="#00acee" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socailButton}>
                <Icon type='fontisto' name='google' size={40} color="#EA4335"/>
            </TouchableOpacity>
            </View>

            <View style={styles.textContainer}>
            <Text style={styles.input}>Don't have an account? </Text>
            <TouchableOpacity>
                <Text style={styles.forgetPassText}>Sign up</Text>
            </TouchableOpacity>
            </View>
            </View>
           
        </View>

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
    },socailButton:{
        margin:totalSize(2),
       
    },header:{
      
        backgroundColor:"blue",
        alignItems:"center",
        justifyContent:"center",
        paddingTop:totalSize(6),
        paddingBottom:totalSize(6),
        
    }
})
export default LoginScreen