import React from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { headerOptions } from './headerOptions'
import { BookedScreen } from '../screens/BookedScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { THEME } from '../theme'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { AboutScreen } from '../screens/AboutScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
const Header = createStackNavigator()
const HeaderNavigation = () => {
  return (
    <Header.Navigator
    >
      <Header.Screen name="Main" options={headerOptions('Главная')} component={MainScreen}/>
      <Header.Screen name="Post" options={headerOptions('Пост')} component={PostScreen}/>
    </Header.Navigator>
  )
}

const Booked = createStackNavigator()
const BookedNavigation = () => {
  return (
    <Booked.Navigator
    >
      <Booked.Screen name="Booked" options={headerOptions('Избранное')} component={BookedScreen}/>
      <Booked.Screen name="Post" options={headerOptions('Пост')} component={PostScreen}/>
    </Booked.Navigator>
  )
}

const BottomTab = Platform.OS === 'ios'?createBottomTabNavigator():createMaterialBottomTabNavigator()
const BottomTabNavigator = ()=>{
  return(
    <BottomTab.Navigator
      shifting={true}
      tabBarOptions={{
        activeTintColor:Platform.OS !== 'ios'?'#fff':THEME.MAIN,
        barStyle:Platform.OS !== 'ios'?{backgroundColor: THEME.MAIN}:null,
      }}
    >
      <BottomTab.Screen name="Post" component={HeaderNavigation}
                        options={{ tabBarIcon:({color})=> <Ionicons name={'ios-albums'} size={25} color={color}/>,
                          tabBarLabel:'Все'}}
      />
      <BottomTab.Screen name="Booked" component={BookedNavigation}
                        options={{ tabBarIcon:({color})=> <Ionicons name={'ios-star'} size={25} color={color}/>,
                          tabBarLabel:'Выбранные'}}
      />
    </BottomTab.Navigator>
  )
}

const About = createStackNavigator()
const  AboutNavigator = () =>{
  return(
    <About.Navigator
    >
      <About.Screen name="About" options={headerOptions('О компании')} component={AboutScreen}/>
    </About.Navigator>
  )
}

const Create = createStackNavigator()
const  CreateNavigator = () =>{
  return(
    <About.Navigator>
      <About.Screen name="Create" options={headerOptions('Создать пост')} component={CreateScreen}/>
    </About.Navigator>
  )
}

const MainNavigator = createDrawerNavigator()


export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        drawerContentOptions={{
        activeTintColor:THEME.MAIN,
          labelStyle:{
            fontFamily:'open-bold'
          }
      }}
      >
        <MainNavigator.Screen name="Post" component={BottomTabNavigator} options={{drawerLabel:'Главная'}}/>
        <MainNavigator.Screen name="About" component={AboutNavigator} options={{drawerLabel:'О компании'}}/>
        <MainNavigator.Screen name="Create" component={CreateNavigator} options={{drawerLabel:'Создать пост'}}/>
      </MainNavigator.Navigator>
    </NavigationContainer>
  )
}
