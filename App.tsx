// import React, { useState } from 'react';

// import { useEffect } from 'react';
// import uuid from 'react-native-uuid';
// import { Alert } from 'react-native';

// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet
// } from 'react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// type Task = {
//   id: string;
//   text: string;
//   completed: boolean;
// };

// export default function App() {
//   const [task, setTask] = useState('');
//   const [tasks, setTasks] = useState<Task[]>([]);

//   useEffect(() => {
//     const loadTasks = async () => {
//       try {
//         const storedTasks = await AsyncStorage.getItem('tasks');
//         if (storedTasks) {
//           setTasks(JSON.parse(storedTasks));
//         }
//       } catch (error) {
//         console.log('Failed to load tasks:', error);
//       }
//     };
//     loadTasks();
//   }, []);

//   useEffect(() => {
//     const saveTasks = async () => {
//       try {
//         await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
//       } catch (error) {
//         console.log('Failed to save tasks:', error);
//       }
//     };
  
//     const timeout = setTimeout(saveTasks, 100); // slight delay
//     return () => clearTimeout(timeout);
//   }, [tasks]);
//   ;
  


//   const addTask = () => {
//     if (task.trim()) {
//       const newTask: Task = {
//         id: uuid.v4().toString(),
//         text: task,
//         completed: false,
//       };
//       setTasks(prevTasks => [...prevTasks, newTask]);
//       setTask('');
//     }
//   };
  
  
  
//   const toggleComplete = (id: string) => {
//     const updatedTasks = tasks.map(task =>
//       task.id === id ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updatedTasks);
//   };

//   const deleteTask = (id: string) => {
//     const updatedTasks = tasks.filter(task => task.id !== id);
//     setTasks(updatedTasks);
//   };
  
  

//   const renderItem = ({ item }: { item: Task }) => (
//     <View style={styles.taskItem}>
//       <TouchableOpacity onPress={() => toggleComplete(item.id)}>
//         <Text style={[styles.taskText, item.completed && styles.completed]}>
//           {item.text}
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//   style={{ backgroundColor: 'red', padding: 20 }}
//   onPress={() => {
//     console.log('DELETE button pressed');
//     deleteTask(item.id);
//   }}
// >
//   <Text style={{ color: 'white' }}>DELETE</Text>
// </TouchableOpacity>
//     </View>
//   );
  
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>My To-Do List</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter a task..."
//         value={task}
//         onChangeText={setTask}
//       />
//       <TouchableOpacity style={styles.addButton} onPress={addTask}>
//         <Text style={styles.addButtonText}>Add Task</Text>
//       </TouchableOpacity>
//       <FlatList
//   data={tasks}
//   renderItem={renderItem}
//   keyExtractor={(item) => item.id}
//   extraData={tasks}
// />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff', // Add background color
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderColor: '#999',
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     alignItems: 'center',
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   taskItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#eee',
//     borderRadius: 5,
//   },
//   taskText: {
//     fontSize: 18,
//   },
//   completed: {
//     textDecorationLine: 'line-through',
//     color: 'gray',
//   },
//   deleteText: {
//     color: 'black',
//     fontSize: 20,
//   },
// });

import React from 'react';
import Home from './src/Home'; // Make sure this path is correct

export default function App() {
  return <Home />;
}
