import React from "react";
import { View, Text } from "react-native";
import Button from "../global/Button";
import { authentication } from '../../firebase';
import { signOut } from 'firebase/auth';

const HomeScreen=({navigation})=>{
    const Submit=()=>{
        signOut(authentication).then((res)=>navigation.navigate("Login"))

    }
    return(
        <View>
            <Text>Home Screen</Text>
            <Button title={"SignOut"} onPress={()=>Submit()}/>
        </View>

    )
}
export default HomeScreen