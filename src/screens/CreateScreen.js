import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import { View, Text, StyleSheet } from 'react-native'

const CreateScreen = ({ route }) => {
  const { state } = useContext(Context)

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id)

  return (
    <View>
      <Text>Create</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CreateScreen