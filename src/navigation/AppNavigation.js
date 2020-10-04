import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { headerOptions } from './headerOptions'
import {Text} from 'react-native'

const Stack = createStackNavigator()

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
      >
        <Stack.Screen name="Main" options={headerOptions('Главная')} component={MainScreen}/>
        <Stack.Screen name="Post" options={headerOptions('Пост')} component={PostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}