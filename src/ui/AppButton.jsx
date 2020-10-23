import React from 'react'
import {TouchableOpacity, View, StyleSheet, Platform, TouchableNativeFeedback} from "react-native";
import {AppTextBold} from "./AppTextBold";
import { THEME } from '../theme'
export const AppButton = ({children,onPress,background=THEME.MAIN,colorText='#fff',props}) =>{
  const Wrapper = Platform.OS === 'ios'?TouchableOpacity:TouchableNativeFeedback
  return(
    <Wrapper onPress={onPress} activeOpacity={0.7}>
      <View style={{...styles.button,backgroundColor:background}}>
        <AppTextBold style={{...styles.text,color:colorText}}>
          {children}
        </AppTextBold>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  button:{
    paddingHorizontal:10,
    paddingVertical:10,
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:3
  },
  text:{
    color:"#fff"
  }
})