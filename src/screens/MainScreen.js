import React, { useEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import {useDispatch,useSelector} from 'react-redux'
import { loadPosts } from '../store/action/Post'

export const MainScreen = ({navigation}) => {
  const postOpen = post =>{
    navigation.navigate('Post',{postId:post.id,date:post.date,booked:post.booked})
  }

  useEffect(() => {
    navigation.setOptions({
      // headerTitle: 'Главная',
      headerRight: () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title={'Take photo'}
                  iconName={'ios-camera'}
                  onPress={() => navigation.navigate('Create')}
            />
          </HeaderButtons>
        ),
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

  const dispatch = useDispatch()
  const allPosts = useSelector(state=>state.post.allPosts)

  useEffect(()=>{
    dispatch(loadPosts())
  },[dispatch])

  return <PostList data={allPosts} postOpen={postOpen}/>
}
