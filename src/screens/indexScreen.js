import React, { useContext } from 'react'
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost}/>
      <FlatList 
        data={data}
        keyExtractor={((item) => item.title)}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen