import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import {Platform} from 'react-native'
import { THEME } from '../theme'
import { Ionicons } from '@expo/vector-icons'
export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    iconSize={25}
    IconComponent={Ionicons}
    color={Platform.OS === 'ios'?THEME.MAIN : '#fff'}
  >

  </HeaderButton>
)