import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function AddTodoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add New Todo</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Description"
        multiline
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="closecircle" size={20} color="white" />
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {} /* Implement Save functionality here */}
        >
          <AntDesign name="checkcircle" size={20} color="white" />
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'lightgray',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'royalblue',
    borderRadius: 5,
    padding: 10,
    width: '48%',
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
});
