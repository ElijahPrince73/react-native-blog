import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation: { navigate } }) => {
  const { addBlogPost } = useContext(Context)

  return <BlogPostForm onSubmit={(title, content) => {
    addBlogPost(title, content, () => navigate('Index'))
  }} />
}

export default CreateScreen