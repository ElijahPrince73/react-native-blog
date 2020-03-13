import React, { useContext } from 'react'
import { View, Text, FlatList, StyleSheet } from "react-native";
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext)

  return (
    <View>
      <FlatList 
        data={blogPosts}
        keyExtractor={((item) => item.title)}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen