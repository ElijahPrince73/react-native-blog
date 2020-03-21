import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ route: { params } }) => {
  const { state } = useContext(Context)
  const blogPost = state.find((blogPost) => blogPost.id === params.id)

  return <BlogPostForm />
}

export default EditScreen