import React from 'react';
import {View, Text , StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView,Platform, TouchableWithoutFeedback,Keyboard} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Input from '../global/Input';
import Button from '../global/Button';
const SignUpScreen = ({navigation}) => {
    const [email, setEmail]= React.useState('');
const [password, setPassword] = React.useState('')
const [confirmPassword, setConfirmPassword] = React.useState('')
const [name, setName] = React.useState('')
const Submit=()=>{
    if(email!=''&& password!='' && confirmPassword!='' && name!=''){
if(password==confirmPassword){
console.log('login Successfully!')}
    }else{
        console.log('not')
    }

}
    return(
        <KeyboardAvoidingView  behavior='position'
         style={{flex:1}}>
            
            <View style={styles.header}>
            <Text style={styles.headerText}>Let's Get Started!</Text>

            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
            <Input iconType={'fontisto'} iconName={'email'} placeHolder={'Full Name'} value={name} onChangeText={(text)=>setName(text)}/>
            <Input iconType={'fontisto'} iconName={'email'} placeHolder={'Email'} value={email} onChangeText={(text)=>setEmail(text)}/>
                <Input iconType={'entypo'} iconName={'key'} placeHolder={'Password'} value={password} onChangeText={(text)=>setPassword(text)} secureTextEntry={true}/>
                <Input iconType={'entypo'} iconName={'key'} placeHolder={'Confirm Password'} value={confirmPassword} onChangeText={(text)=>setConfirmPassword(text)} secureTextEntry={true}/>

           <Button title={"Signup"} onPress={()=>Submit()}/>

           
            
            
            
          

            <View style={styles.textContainer}>
            <Text style={styles.input}>Already have an account? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.forgetPassText}>Login</Text>
            </TouchableOpacity>
            </View>
            </View>
            </TouchableWithoutFeedback>
           
        </KeyboardAvoidingView>

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
export default SignUpScreen