import React from 'react'
import {} from 'react-native'
import Welcome from './screens/Welcome'
import LogIn from './screens/LogIn'
import SignUp from './screens/SignUp'
import AppLoading from 'expo-app-loading';
import { 
  useFonts,
  ShadowsIntoLightTwo_400Regular 
} from '@expo-google-fonts/shadows-into-light-two'
import{  Montserrat_200ExtraLight} from '@expo-google-fonts/montserrat'
import { JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import mainReducer from './redux/reducers/mainReducer'

const App = () => {

  const store = createStore(mainReducer)

  let [fontsLoaded] = useFonts({
    ShadowsIntoLightTwo_400Regular,
    Montserrat_200ExtraLight,
    JuliusSansOne_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
        <>
            <SignUp />
            {/* <LogIn /> */}
            {/* <Welcome /> */}
            {/* <Home /> */}
        </>
    </Provider>
  )
}

export default App