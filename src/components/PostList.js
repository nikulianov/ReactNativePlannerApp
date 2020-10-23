import React from 'react'
import { View,StyleSheet,FlatList } from 'react-native'
import { Post } from './Post'

export const PostList = ({data,postOpen}) => {
  return(
    <View style={styles.wrapper}>
      <FlatList data={data}
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