import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const BookedScreen = () => {
  return(
    <View style={styles.wrapper}>
      <Text>BookedScreen</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  wrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})