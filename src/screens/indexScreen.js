import React, { useContext } from 'react'
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context)

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost}/>
      <FlatList 
        data={state}
        keyExtractor={((item) => item.title)}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Feather name="trash" style={styles.icon}/>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding : 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize:18
  },
  icon: {
    fontSize: 24
  }
})

export default IndexScreen