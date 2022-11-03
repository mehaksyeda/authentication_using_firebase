import React, { useEffect } from 'react';
import {View, Text , StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback,Keyboard} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { authentication } from '../../firebase';
import { signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';

import Input from '../global/Input';
import Button from '../global/Button';

import { Icon} from '@rneui/themed'
import SocialButton from '../global/SocialButton';

const LoginScreen = ({navigation}) => {
    const [email, setEmail]= React.useState('');
const [password, setPassword] = React.useState('')
useEffect(()=>{
    const user= authentication.currentUser
    authentication.onAuthStateChanged((user)=>{
        if(user){
            navigation.navigate("HomeScreen")
        }
    })

    console.log({user})
})
const Submit=()=>{
    if(email!=''&& password!=''){
        signInWithEmailAndPassword(authentication, email, password).then((response)=>{navigation.navigate("HomeScreen")}).catch((error)=>console.log(error))
    }else{
        alert("Fill all feilds")
    }

}

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex:1}}>
            <View style={styles.header}>
            <Text style={styles.headerText}>Welcome Back!</Text>

            </View>
            <View style={styles.container}>
                <Input iconType={'fontisto'} iconName={'email'} placeHolder={'Email'}value={email} onChangeText={(text)=>setEmail(text)}/>
                <Input iconType={'entypo'} iconName={'key'} placeHolder={'Password'} value={password} onChangeText={(text)=>setPassword(text)} secureTextEntry={true}/>
                <Button title={"Login"} onPress={()=>Submit()}/>
           
           
           
            
            

            <TouchableOpacity style={styles.forgetPassContainer} onPress={()=>navigation.navigate("ForgetPassword")}>
                <Text style={styles.forgetPassText}>Forget Password ?</Text>
            </TouchableOpacity>
            
            
            <Text style={styles.orText}>OR</Text>
           <View style={styles.social}>
            <SocialButton iconType={'zocial'} iconName={'facebook'} color={"#3b5998"}/>
            <SocialButton iconType={'entypo'} iconName={'twitter'} color={"#00acee"}/>
            <SocialButton iconType={'fontisto'} iconName={'google'} color={"#EA4335"}/>
            </View>

            <View style={styles.textContainer}>
            <Text style={styles.input}>Don't have an account? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
                <Text style={styles.forgetPassText}>Sign up</Text>
            </TouchableOpacity>
            </View>
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
export default LoginScreen