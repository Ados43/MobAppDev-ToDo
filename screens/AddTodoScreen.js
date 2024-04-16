import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal'; 
import { AntDesign } from '@expo/vector-icons'; 

export default function AddTodoScreen({ navigation, route }) {
    const [title, setTitle] = useState(''); // State for todo title
    const [description, setDescription] = useState(''); // State for todo description
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false); // State for success modal visibility
    const [isErrorModalVisible, setIsErrorModalVisible] = useState(false); // State for error modal visibility
    
    const { addTodo } = route.params; // Extracting addTodo function from route params

    // Function to handle saving of todo
    const handleSave = () => {
        if (title.trim() === '' || description.trim() === '') {
            setIsErrorModalVisible(true); // Showing error modal if title or description is empty
            return;
        }
    
        const newTodo = {
            title: title.trim(),
            description: description.trim(),
        };
    
        console.log('New Todo:', newTodo); // Logging new todo

        setTitle(''); // Resetting title state
        setDescription(''); // Resetting description state

        addTodo(title, description); // Calling addTodo function to add new todo
        setIsSuccessModalVisible(true); // Showing success modal
    };
    
    return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add New Todo</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Description"
        multiline
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={20} color="white" />
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={handleSave}
        >
          <AntDesign name="checkcircle" size={20} color="white" />
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Success modal */}
      <Modal isVisible={isSuccessModalVisible}>
        <View style={styles.modalContent}>
          <Text>Todo Added Successfully</Text>
          <TouchableOpacity onPress={() => setIsSuccessModalVisible(false)}>
            <Text style={styles.modalButton}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Error modal */}
      <Modal isVisible={isErrorModalVisible}>
        <View style={styles.modalContent}>
          <Text>Please fill in both Title and Description fields.</Text>
          <TouchableOpacity onPress={() => setIsErrorModalVisible(false)}>
            <Text style={styles.modalButton}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

// StyleSheet for styling components
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
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 20,
    color: 'blue',
  },
});
