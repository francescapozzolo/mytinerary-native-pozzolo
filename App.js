import 'react-native-gesture-handler';
import React from 'react'
import {} from 'react-native'
import Welcome from './screens/Welcome'
import LogIn from './screens/LogIn'
import SignUp from './screens/SignUp'
import Cities from './screens/Cities'
import AppLoading from 'expo-app-loading';
import { 
  useFonts,
  ShadowsIntoLightTwo_400Regular 
} from '@expo-google-fonts/shadows-into-light-two'
import{  Montserrat_200ExtraLight} from '@expo-google-fonts/montserrat'
import { JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import mainReducer from './redux/reducers/mainReducer'
import thunk from 'redux-thunk'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './navigation/Stack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigator from './navigation/Drawer';


const App = () => {

  const store = createStore(mainReducer, applyMiddleware(thunk))

  let [fontsLoaded] = useFonts({
    ShadowsIntoLightTwo_400Regular,
    Montserrat_200ExtraLight,
    JuliusSansOne_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
        <Provider store={store}>
            {/* <Stack></Stack>  */}
            <DrawerNavigator></DrawerNavigator>    
        </Provider>
    </NavigationContainer>
  )
}

export default App