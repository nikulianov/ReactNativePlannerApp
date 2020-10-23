import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView, Image, TouchableWithoutFeedback,Keyboard } from 'react-native'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppButton } from '../ui/AppButton'
import { useDispatch } from 'react-redux'
import { addPost } from '../store/action/Post'

export const CreateScreen = ({ navigation }) => {
  let [ text, setText ] = useState('')
  let img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'
  const dispatch = useDispatch()
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

  const createNewPost = () => {
    let post = {
      date:new Date().toJSON(),
      text,
      img,
      booked:false
    }
    console.log(post.date)
    navigation.navigate('Main')
    dispatch(addPost(post))
  }

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создание нового поста</Text>
          <TextInput value={text} onChangeText={setText} style={styles.textInput} placeholder='Введите текст поста'
                     multiline/>
          <Image style={styles.img} source={{
            uri: img
          }}></Image>
          <AppButton onPress={() => createNewPost()}>Создать</AppButton>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    textAlign: 'center',
    fontSize: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },
  textInput: {
    width: '100%',
    padding: 10
  },
  img: {
    width: '100%',
    height: 200,
    marginBottom:10
  }
})