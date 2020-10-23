import React, { useEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import { useSelector } from 'react-redux'
export const BookedScreen = ({navigation}) => {

  const postOpen = post =>{
    navigation.navigate('Post',{postId:post.id,date:post.date,booked:post.booked})
  }


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

  const bookedPost = useSelector(state=>state.post.bookedPost)

  return <PostList data={bookedPost} postOpen={postOpen}/>

}
