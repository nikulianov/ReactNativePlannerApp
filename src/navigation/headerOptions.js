import React from 'react'
import { THEME } from '../theme'
import { Platform } from 'react-native'

export const headerOptions = (title)=>{
return{
  title,
  headerStyle: { backgroundColor:Platform.OS === 'ios'?'#fff':THEME.MAIN},
  headerTintColor:Platform.OS === 'ios'?THEME.MAIN:'#fff',
}
}
