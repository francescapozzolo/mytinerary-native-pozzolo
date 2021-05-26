import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Cities from '../screens/Cities'
import City from '../screens/City'
import Home from '../screens/Home'
import Welcome from '../screens/Welcome'
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Activities from '../screens/Activities'
import { useNavigation } from '@react-navigation/native';


const stack = createStackNavigator()

export const WelcomeStack = () => {
    const navigation = useNavigation();
    return(
        <stack.Navigator>
            <stack.Screen name="welcome" component={Welcome} 
            options={{
                title:  <Text><FontAwesome5 name="map-marked" size={20} color="white" />Welcome</Text>,
                headerStyle: {
                    backgroundColor: 'rgba(191,147,147, 0.8)',
                },
                headerTitleStyle: {
                    fontFamily: 'ShadowsIntoLightTwo_400Regular',
                    color: 'white',
                },
                headerRight: () => <Ionicons name="menu-outline" size={30} color="white" onPress={() => {navigation.openDrawer()}}/>
            }}
            />
        </stack.Navigator>
    )
} 

export const HomeStack = () => {
    const navigation = useNavigation();
    return(
        <stack.Navigator>
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
                headerRight: () => <Ionicons name="menu-outline" size={30} color="white" onPress={() => {navigation.openDrawer()}}/>
            }}
            />
        </stack.Navigator>
    )
} 

export const CitiesStack = () => {
    const navigation = useNavigation();
    return(
        <stack.Navigator>
            <stack.Screen name="cities" component={Cities} 
            options={{
                title:  <Text><FontAwesome5 name="map-marked" size={20} color="white" />Cities</Text>,
                headerStyle: {
                    backgroundColor: 'rgba(191,147,147, 0.8)',
                },
                headerTitleStyle: {
                    fontFamily: 'ShadowsIntoLightTwo_400Regular',
                    color: 'white',
                },
                headerRight: () => <Ionicons name="menu-outline" size={30} color="white" onPress={() => {navigation.openDrawer()}}/>
            }}
            />
            <stack.Screen name="city" component={City}
            options={{
                title:  <Text><FontAwesome5 name="map-marked" size={20} color="white" />City</Text>,
                headerStyle: {
                    backgroundColor: 'rgba(191,147,147, 0.8)',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontFamily: 'ShadowsIntoLightTwo_400Regular',
                    color: 'white',
                },
                headerRight: () => <Ionicons name="menu-outline" size={30} color="white" onPress={() => {navigation.openDrawer()}}/>
            }}
            />
            <stack.Screen name="activities" component={Activities}
             options={{
                title:  <Text><FontAwesome5 name="map-marked" size={20} color="white" />Activities</Text>,
                headerStyle: {
                    backgroundColor: 'rgba(191,147,147, 0.8)',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontFamily: 'ShadowsIntoLightTwo_400Regular',
                    color: 'white',
                },
                headerRight: () => <Ionicons name="menu-outline" size={30} color="white" onPress={() => {navigation.openDrawer()}}/>
            }}/>
        </stack.Navigator>
    )
} 
