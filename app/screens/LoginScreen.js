import React from 'react';
import {View, Text} from 'react-native';

import {Input} from '@rneui/themed'
const LoginScreen = () => {
    return(
        <View>
            <Input placeholder='Email'  leftIcon={{ type: 'font-awesome', name: 'comment' }}/>
        </View>

    )

}
export default LoginScreen