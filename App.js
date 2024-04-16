import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from './screens/HomeScreen'; 
import AddTodoScreen from './screens/AddTodoScreen';


const Stack = createStackNavigator(); // Creating a stack navigator

export default function App() {
  return (
    // NavigationContainer to provide navigation context
    <NavigationContainer>
      {/* Stack.Navigator to define the navigation stack */}
      <Stack.Navigator initialRouteName="Home">
        {/* Stack.Screen for HomeScreen */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        {/* Stack.Screen for AddTodoScreen */}
        <Stack.Screen name="AddTodo" component={AddTodoScreen} options={{ title: 'Add New Todo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
