import React, { useContext, useEffect } from 'react'
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation: { navigate, addListener } }) => {
  const { state, getBlogPosts, deleteBlogPost } = useContext(Context)

  useEffect(() => {
    getBlogPosts()

    const listener = addListener('focus', () => getBlogPosts())

    return () => {
      listener.remove()
    }
  }, [])

  return (
    <View>
      <FlatList 
        data={state}
        keyExtractor={((item) => item.title)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigate('Show', {
            id: item.id
          })}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" style={styles.icon}/>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
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