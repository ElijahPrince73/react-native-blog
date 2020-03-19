import React, { useContext, useState } from 'react'
import { Context } from '../context/BlogContext'
import { View, Text, TextInput ,StyleSheet, Button } from 'react-native'

const CreateScreen = ({ navigation: { navigate } }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addBlogPost } = useContext(Context)

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
        title="Add Blog Post" 
        onPress={() => addBlogPost(title, content, () => {
          navigate('Blog')
        })}
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

export default CreateScreen