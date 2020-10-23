import { ADD_POST, CHANGE_BOOKED, DELETE_POST, LOAD_POSTS } from '../types'

const initionalState = {
  allPosts: [],
  bookedPost: []
}

export const postReducer = (state = initionalState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...state, allPosts: action.payload, bookedPost: action.payload.filter(post => post.booked) }

    case CHANGE_BOOKED:
      const allPosts = state.allPosts.map(post => {
        if (post.id === action.id) {
          post.booked = !post.booked
        }
        return post
      })
      return { ...state, allPosts, bookedPost: allPosts.filter(post => post.booked) }

    case DELETE_POST:
      return {...state,allPosts:state.allPosts.filter(p => p.id !== action.id), bookedPost:state.bookedPost.filter(p => p.id !== action.id)}

    case ADD_POST:
      return {
        ...state,allPosts:[{...action.post},...state.allPosts]
      }
    default:
      return state
  }
}