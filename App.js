import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/BlogContext'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScren'
import CreateScreen from './src/screens/CreateScreen'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Blog" 
          component={IndexScreen} 
          options={({ navigation: { navigate } }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigate('Create')}>
                <Feather name="plus" size={30} style={{ marginRight: 20 }} />
              </TouchableOpacity>
            )
          })
          } 
        />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}