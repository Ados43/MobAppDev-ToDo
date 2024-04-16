import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const route = useRoute();
  const { newTodo } = route.params ?? { newTodo: null };
  const [todos, setTodos] = useState([]);
//
  const addTodo = (title, description) => {
    console.log(title, description)
    setTodos(prevTodos => [...prevTodos, {title, description}]);
  }
//
  useEffect(() => {
  const fetchTodos = async () => {
    try {
      const savedTodos = await AsyncStorage.getItem('todos');
      if (savedTodos !== null) {
        setTodos(JSON.parse(savedTodos));
      } else {
        setDefaultTodos();
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  fetchTodos();
}, []);

  useEffect(() => {
    if (newTodo) {
        setTodos(prevTodos => [...prevTodos, newTodo]);
    }
}, [newTodo]);

  const setDefaultTodos = () => {
    setTodos([
      { id: 1, title: 'Wash the car', description: 'Wash the car in the evening.', completed: false, expanded: false },
      { id: 2, title: 'Take out the trash', description: 'Take out the trash before 8 PM.', completed: false, expanded: false },
      { id: 3, title: 'Wash the Dishes', description: 'Wash the dishes after dinner.', completed: false, expanded: false }
    ]);
  };


  const toggleTodoExpansion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, expanded: !todo.expanded } : todo
      )
    );
  };

  const markTodoAsFinished = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, finished: true } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  const isTodoExpanded = (id) => {
    const todo = todos.find((item) => item.id === id);
    return todo ? todo.expanded : false;
  };

  const renderTodoItem = ({ item }) => (
    <View style={{ backgroundColor: item.finished ? '#e0e0e0' : '#fff', padding: 10, marginBottom: 10 }}>
      <TouchableOpacity
        style={styles.todoItem}
        onPress={() => toggleTodoExpansion(item.id)}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.todoTitle, { textDecorationLine: item.finished ? 'line-through' : 'none' }]}>
              {item.title}
            </Text>
            {item.finished && (
              <AntDesign name="checkcircle" size={20} color="green" style={{ marginLeft: 5 }} />
            )}
          </View>
          <TouchableOpacity onPress={() => toggleTodoExpansion(item.id)}>
            <AntDesign name={isTodoExpanded(item.id) ? "caretup" : "caretdown"} size={20} color="black" />
          </TouchableOpacity>
        </View>
        {isTodoExpanded(item.id) && (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.todoDescription}>{item.description}</Text>
            <View style={styles.controlPanel}>
              {!item.finished && (
                <TouchableOpacity style={[styles.controlButton, { marginRight: 10 }]} onPress={() => markTodoAsFinished(item.id)}>
                  <AntDesign name="checkcircle" size={20} color="green" />
                </TouchableOpacity>
              )}
              <TouchableOpacity style={styles.controlButton} onPress={() => deleteTodo(item.id)}>
                <AntDesign name="delete" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Todo List:</Text>
      
      <FlatList
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item, index) => item.id?.toString() ?? index.toString()}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'green' }]}
        //
        onPress={() => navigation.navigate('AddTodo', { addTodo })}
        //
      >
        <AntDesign name="pluscircle" size={20} color="white" style={{ marginRight: 10 }} />
        <Text style={styles.buttonText}>Add New Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3cde6',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoTitle: {
    fontSize: 18,
    marginRight: 10,
  },
  todoDetails: {
    marginLeft: 30,
  },
  todoDescription: {
    fontStyle: 'italic',
    color: 'gray',
    marginLeft: 10,
  },
  controlPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  addTodoContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'royalblue',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
});