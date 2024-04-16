import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="light-content" /> */}
      <Text style={styles.headerText}>My Todo List:</Text>

      <View style={styles.lineTop}/>

      {/* ToDo Items  */}
      <View style={styles.todoContainer}>
        <View style={styles.todoRow}>
          <Text style={styles.todoText}>Wash the car</Text>
        </View>
        <View style={styles.todoRow}>
          <Text style={styles.todoText}>Take out the trash</Text>
        </View>
        <View style={styles.todoRow}>
          <Text style={styles.todoText}>Wash the Dishes</Text>
        </View>
      </View>

       {/* Bottom Line */}
       <View style={styles.lineBottom} />

      {/* Add New Button */}
      <View style={styles.addNew}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddTodo')}
        >
          <AntDesign name="pluscircle" size={20} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.buttonText}>Add New To-Do</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3cde6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'royalblue',
    margin: 10,
  },
  lineTop: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginBottom: 15,
  },
  todoContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  todoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'royalblue',
    borderRadius: 10,
    marginBottom: 10,
  },
  todoText: {
    padding: 10,
    fontSize: 20,
    color: 'white',
  },
  lineBottom: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginBottom: 120,
  },
  addNew: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    marginHorizontal: 20,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'royalblue',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    marginRight: 10,
  },
});