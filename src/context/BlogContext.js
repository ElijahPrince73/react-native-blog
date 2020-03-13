import React, { createContext, Children } from 'react'

const BlogContext = createContext()

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={5} thing={2}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext