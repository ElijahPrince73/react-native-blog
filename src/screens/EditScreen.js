import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation: { goBack }, route: { params } }) => {
  const { state, editBlogPost } = useContext(Context)
  const blogPost = state.find((blogPost) => blogPost.id === params.id)
  const { id, title, content } = blogPost
  
  return (
    <BlogPostForm
      intitialValues={{ title, content }}
      onSubmit={(title, content) => editBlogPost(id, title, content, () => goBack())} 
    />
  )
}

export default EditScreen