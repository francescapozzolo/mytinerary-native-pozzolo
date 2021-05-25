import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'
import Cities from '../screens/Cities'
import City from '../screens/City'
import Home from '../screens/Home'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import Welcome from '../screens/Welcome'
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const drawer = createDrawerNavigator()
const DrawerNavigator = () => {
    return(
        <drawer.Navigator>
            <drawer.Screen name="welcome" component={Welcome}/>
            <drawer.Screen name="home" component={Home} />
            <drawer.Screen name="signup" component={SignUp} />
            <drawer.Screen name="login" component={LogIn} />
            <drawer.Screen name="cities" component={Cities} />  
            <drawer.Screen name="city" component={City} />
        </drawer.Navigator>
    )
}

export default DrawerNavigator