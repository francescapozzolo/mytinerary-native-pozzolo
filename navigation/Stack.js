import {createStackNavigator} from '@react-navigation/stack'
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

const stack = createStackNavigator()
const StackNavigator = () => {
    return(
        <stack.Navigator>
            <stack.Screen name="welcome" component={Welcome} options={{
                headerShown: false
            }}/>
            <stack.Screen name="home" component={Home} 
            options={{
                title:  <Text><FontAwesome5 name="map-marked" size={20} color="white" />Home</Text>,
                headerStyle: {
                    backgroundColor: 'rgba(191,147,147, 0.8)',
                },
                headerTitleStyle: {
                    fontFamily: 'ShadowsIntoLightTwo_400Regular',
                    color: 'white',
                },
                headerRight: () => <Ionicons name="menu-outline" size={30} color="white" />
            }}
            />
            <stack.Screen name="signup" component={SignUp} 
            options={{
                title:  <Text><FontAwesome5 name="map-marked" size={20} color="white" />Mytinerary</Text>,
                headerStyle: {
                    backgroundColor: 'rgba(191,147,147, 0.8)',
                },
                headerTitleStyle: {
                    fontFamily: 'ShadowsIntoLightTwo_400Regular',
                    color: 'white',
                },
            }}
            />
            <stack.Screen name="login" component={LogIn} />
            <stack.Screen name="cities" component={Cities} />  
            <stack.Screen name="city" component={City} />
        </stack.Navigator>
    )
}

export default StackNavigator