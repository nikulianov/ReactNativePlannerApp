import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { DATA } from '../data'
import { Post } from '../components/Post'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
export const MainScreen = ({navigation}) => {

  const postOpen = post =>{
    navigation.navigate('Post',{postId:post.id,date:post.date})
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight:
        () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title={'Take photo'}
                  iconName={'ios-camera'}
                  onPress={() => console.log('ggg')}
            />
          </HeaderButtons>
        )
    })
  }, [])

  return(
    <View style={styles.wrapper}>
      <FlatList data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) =><Post post={item} onPress={()=>postOpen(item)}/>}/>

    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10
  }
})