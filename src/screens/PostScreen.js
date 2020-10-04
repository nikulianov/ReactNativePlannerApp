import React,{useEffect} from 'react'
import { Text, View, StyleSheet, Image,ScrollView, Alert } from 'react-native'
import { DATA } from '../data'
import { AppButton } from '../ui/AppButton'
export const PostScreen = ({navigation,route}) => {
  let postId = route.params.postId
  let post = DATA.find(f => f.id === postId)
  useEffect(() => {
    navigation.setOptions({ headerTitle: `Пост от ${new Date(post.date).toLocaleDateString()}` })
  }, [ route ])

  const deletePost = ()=>{
    Alert.alert(
      "Удаление поста",
      "Вы уверены что хотите удалить пост?",
      [
        {
          text: "Удалить",
          style: "cancel"
        },
        { text: "OK",style: "destructive", onPress: () => {} }
      ],
      { cancelable: false }
    );
  }

  return(
    <ScrollView style={styles.wrapper}>
      <Image style={styles.img} source={{ uri: post.img }}></Image>
      <View style={styles.textContaner}>
        <Text style={styles.text}>{post.text}</Text>
      </View>
      <AppButton onPress={deletePost}>Удалить</AppButton>

    </ScrollView>
  )
}

const styles=StyleSheet.create({
  wrapper:{
    flex:1,
  },
  img:{
    width:'100%',
    height:200,
  },
  textContaner:{
    paddingVertical:10,
    paddingHorizontal:5
  }
})