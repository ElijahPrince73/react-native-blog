import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blog_post':
      return [ 
          ...state, 
          { 
            id: Math.floor(Math.random() * 25), 
            title: action.payload.title,
            content: action.payload.content
          }
      ]
    case 'delete_blog_post':
      return state.filter((blogPost) => blogPost.id !== action.payload)
    case 'edit_blog_post':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost
      })
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callBack) => {
    dispatch({ type: 'add_blog_post', payload: {title, content}  })
    callBack()
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blog_post', payload: id})
  }
}

const editBlogPost = (dispatch) => {
  return (id, title, content, callBack) => {
    dispatch({ type: 'edit_blog_post', payload: { id, title, content } })
    callBack()
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer, 
  { addBlogPost, deleteBlogPost, editBlogPost }, 
  []
)