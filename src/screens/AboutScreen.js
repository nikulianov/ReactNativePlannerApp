import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

export const AboutScreen = ({navigation}) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title={'Take photo'}
                iconName={'ios-menu'}
                onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      )
    })
  }, [])

  return(
    <View style={styles.wrapper}>
      <Text>Лучшее приложение для Ваших заметок</Text>
      <Text>Версия приложения <Text style={styles.version}>1.0.0</Text></Text>
    </View>
  )
}

const styles=StyleSheet.create({
  wrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  version:{
    fontFamily:'open-bold'
  }
})