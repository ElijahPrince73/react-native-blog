import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

const BlogPostForm = ({ 
  onSubmit, 
  intitialValues = { title: '', content: '' } 
}) => {
  
  const [title, setTitle] = useState(intitialValues.title)
  const [content, setContent] = useState(intitialValues.content)
  
  return (  
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput 
        style={styles.input}
        value={title} 
        onChangeText={(text) => setTitle(text)} 
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content} 
        onChangeText={(text) => setContent(text)}
      />
      <Button 
        title="Save Blog"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
  },
  label: {
    fontSize:20,
    marginBottom: 5,
  }
})

export default BlogPostForm