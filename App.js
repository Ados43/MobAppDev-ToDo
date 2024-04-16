import React, {useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddTodoScreen from './screens/AddTodoScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    AsyncStorage.clear();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="AddTodo" component={AddTodoScreen} options={{ title: 'Add New Todo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}