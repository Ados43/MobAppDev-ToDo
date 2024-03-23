import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerText}>My Todo List:</Text>
      </View>

      <View style={styles.lineTop}>
        <Text style={styles.lineTextTop}></Text>
      </View>

      <View style={styles.todoRow}>
        <Text style={styles.todoText}>Wash the car</Text>
      </View>

      <View style={styles.todoRow}>
        <Text style={styles.todoText}>Take out the trash</Text>
      </View>

      <View style={styles.todoRow}>
        <Text style={styles.todoText}>Wash the Dishes</Text>
      </View>

      <View style={styles.lineBottom}>
        <Text></Text>
      </View>

      <View style={styles.addNew}>
        <Button title="Add New To-Do"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#b3cde6',
    fontSize: 20,
    color: 'white',
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  headerText: {
    padding: 10,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'royalblue',
    margin: 10,
  },

  lineTop: {
    padding: 2,
    marginBottom: 15,
    backgroundColor: 'black',
  },

  todoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: 'royalblue',
    borderRadius: 10,
  },

  todoText: {
    padding: 10,
    fontSize: 20,
    color: 'white',
    marginRight: 10,
  },

  lineBottom: {
    backgroundColor: 'black',
    padding: 2,
    marginBottom: 10,
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
  },

  addNew: {
    // backgroundColor: 'royalblue',
    color: 'white',
    borderRadius: 10,
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    marginLeft: 20,
    marginRight: 20,
  }
});
