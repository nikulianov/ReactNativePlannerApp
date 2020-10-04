import React from 'react'
import { ImageBackground, View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export const Post = ({post,onPress}) =>{

  return(
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.wrapper}>
        <ImageBackground style={styles.imgContent} source={{ uri: post.img }}>
          <View style={styles.textContent}>
            <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    marginBottom:15,
    overflow:'hidden'
  },
  imgContent:{
    width:'100%',
    height:200,
  },
  textContent:{
    backgroundColor:'rgba(255,255,255,.5)',
    height:30,
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    color:'#000'
  }

})