import { ADD_POST, CHANGE_BOOKED, DELETE_POST, LOAD_POSTS } from '../types'
import { DATA } from '../../data'

export const loadPosts = () =>{
  return{
    type:LOAD_POSTS,
    payload:DATA
  }
}

export const changeBooked = (id) =>{
  return{
    type:CHANGE_BOOKED,
    id
  }
}

export const deletePost = (id) =>{
  return{
    type:DELETE_POST,
    id
  }
}

export const addPost = post =>{
  post.id = Date.now().toString()
  return{
    type:ADD_POST,
    post
  }
}
