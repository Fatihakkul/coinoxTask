import React, { useEffect, useContext } from 'react'

//import screen
import {
    CodeScreen,
    Home,
    UserInfo,
    SplashScreen
} from "./pages"
import CameraScreen from "./pages/CameraScreen"
//import react navigation
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createStackNavigator()
function Router() {
    return (
        
            <NavigationContainer>
                <Stack.Navigator initialRouteName="splash" >
                    <Stack.Screen name="splash" component={SplashScreen} options={{headerShown : false}} />
                    <Stack.Screen name="codescreen" component={CodeScreen} options={{headerShown : false}} />
                    <Stack.Screen name="home" component={Home} options={{headerShown : false}} />
                    <Stack.Screen name="userinfo" component={UserInfo} options={{headerShown : false}} />
                    <Stack.Screen name="camerascreen" component={CameraScreen} options={{headerShown : false}} />
                </Stack.Navigator>
            </NavigationContainer>
       
    )
}
export default Router