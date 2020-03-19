import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const EditScreen = ({ route: { params } }) => {
  console.log(params, "id from show screen");
  return (
    <View>
      <Text>Edit screen {params.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditScreen