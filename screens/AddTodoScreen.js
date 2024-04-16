import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal'
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { route } from '@react-navigation/native';


export default function AddTodoScreen({ navigation, route }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
    const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
    
    //
    const { addTodo } = route.params;
    //

    const handleSave = () => {
        if (title.trim() === '' || description.trim() === '') {
            setIsErrorModalVisible(true);
            return;
        }
    
        const newTodo = {
            title: title.trim(),
            description: description.trim(),
        };
    
        console.log('New Todo:', newTodo);
    
        setTitle('');
        setDescription('');

        // navigation.navigate('Home', { newTodo });
        addTodo(title, description)
        //
        setIsSuccessModalVisible(true);
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

      <Modal isVisible={isSuccessModalVisible}>
        <View style={styles.modalContent}>
          <Text>Todo Added Successfully</Text>
          <TouchableOpacity onPress={() => setIsSuccessModalVisible(false)}>
            <Text style={styles.modalButton}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>

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