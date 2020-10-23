import React,{useEffect,useState} from 'react'
import { Text, View, StyleSheet, Image,ScrollView, Alert } from 'react-native'
import { AppButton } from '../ui/AppButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { useDispatch, useSelector } from 'react-redux'
import { changeBooked, deletePost } from '../store/action/Post'
export const PostScreen = ({navigation,route}) => {
  let postId = route.params.postId
  let booked = useSelector(state=>state.post.bookedPost.some(post=>post.id === postId))
  let post = useSelector(state=>state.post.allPosts.find(f => f.id === postId))
  const dispatch = useDispatch()

  useEffect(()=>{
    if(post){
      navigation.setParams({booked})
    }
  },[booked])
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Пост от ${new Date(post.date).toLocaleDateString()}`,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title={'Take photo'}
                iconName={booked?'ios-star':'ios-star-outline'}
                onPress={() => dispatch(changeBooked(postId))}
          />
        </HeaderButtons>
      )
    })
  }, [route])

  const deleteButton = ()=>{
    Alert.alert(
      "Удаление поста",
      "Вы уверены что хотите удалить пост?",
      [
        {
          text: "Отменить",
          style: "cancel"
        },
        { text: "Удалить",style: "destructive", onPress(){
            navigation.navigate('Main')
            dispatch(deletePost(postId))
          } }
      ],
      { cancelable: false }
    );
  }
  if(!post) return null

  return(
    <ScrollView style={styles.wrapper}>
      <Image style={styles.img} source={{ uri: post.img }}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{post.text}</Text>
        <AppButton onPress={deleteButton}>Удалить</AppButton>
      </View>

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
  textContainer:{
    paddingVertical:10,
    paddingHorizontal:5
  },
  text:{
    marginBottom:10,
  },
})